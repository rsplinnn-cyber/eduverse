// ==========================================================================
// ONLINE EXAM ENGINE SCRIPT
// Quản lý đếm ngược, lưu trữ tạm kết quả làm bài, điều hướng danh sách câu hỏi.
// ==========================================================================

let examId = null;
let examData = null;
let questions = [];
let currentIdx = 0;

// Các biến lưu trạng thái làm bài
let userAnswers = {}; // { qIdx: selectedOptionIdx }
let flaggedQuestions = {}; // { qIdx: true/false }
let timeLeft = 0; // Tính bằng giây
let timerInterval = null;
let totalDurationSeconds = 0;

document.addEventListener('DOMContentLoaded', () => {
    // 1. ĐỌC THÔNG TIN CHƯỚNG NGẠI VẬT TỪ URL
    const urlParams = new URLSearchParams(window.location.search);
    examId = urlParams.get('id');

    if (!examId) {
        alert('Không tìm thấy chướng ngại vật! Quay lại danh sách thử thách.');
        window.location.href = 'exams.html';
        return;
    }

    // 2. LOAD CHƯỚNG NGẠI VẬT TỪ EXAMS_DB
    loadExamData(examId);

    // 3. KHỞI TẠO BỘ ĐẾM GIỜ
    startExamTimer();

    // 4. VẼ BẢN ĐỒ CÂU HỎI (PALETTE)
    renderPaletteGrid();

    // 5. HIỂN THỊ CÂU HỎI ĐẦU TIÊN
    renderQuestion();

    // 6. SETUP ĐIỀU HƯỚNG VÀ SỰ KIỆN NÚT BẤM
    initNavigation();
});

/**
 * Tìm chướng ngại vật và gán dữ liệu ban đầu
 */
function loadExamData(id) {
    examData = EXAMS_DB.find(ex => ex.id === id);
    if (!examData) {
        alert('Chướng ngại vật không tồn tại!');
        window.location.href = 'exams.html';
        return;
    }
    
    questions = examData.questions || [];
    timeLeft = examData.duration * 60; // quy ra giây
    totalDurationSeconds = timeLeft;

    document.getElementById('exam-header-title').textContent = examData.title;
    document.title = `${examData.title} - Đang vượt ải`;
}

/**
 * Chạy đồng hồ đếm ngược
 */
function startExamTimer() {
    const timerText = document.getElementById('timer-text');
    const timerBox = document.getElementById('exam-timer');

    const updateTimerDisplay = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        const pad = (n) => n.toString().padStart(2, '0');
        timerText.textContent = `${pad(mins)}:${pad(secs)}`;

        // Cảnh báo khi còn dưới 1 phút (60 giây)
        if (timeLeft <= 60) {
            timerBox.classList.add('warning-time');
        } else {
            timerBox.classList.remove('warning-time');
        }
    };

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmitExam();
        }
    }, 1000);
}

/**
 * Hiển thị câu hỏi hiện tại lên giao diện
 */
function renderQuestion() {
    const question = questions[currentIdx];
    
    // 1. Cập nhật nhãn chỉ số câu hỏi
    document.getElementById('question-index-label').textContent = `Câu ${currentIdx + 1} / ${questions.length}`;

    // 2. Cập nhật checkbox đánh dấu xem lại
    document.getElementById('flag-checkbox').checked = !!flaggedQuestions[currentIdx];

    // 3. Cập nhật nội dung câu hỏi
    document.getElementById('question-text').textContent = question.question;

    // 4. Vẽ danh sách các đáp án lựa chọn
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = question.options.map((opt, idx) => `
        <div class="option-card" data-opt-idx="${idx}">
            <div class="option-circle"></div>
            <div>${escapeHtml(opt)}</div>
        </div>
    `).join('');

    // Khôi phục lựa chọn cũ nếu có
    const savedAnswer = userAnswers[currentIdx];
    if (savedAnswer !== undefined) {
        const activeCard = optionsContainer.querySelector(`[data-opt-idx="${savedAnswer}"]`);
        if (activeCard) activeCard.classList.add('selected');
    }

    // Gắn sự kiện click chọn đáp án
    const optionCards = optionsContainer.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            optionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            const idx = parseInt(card.getAttribute('data-opt-idx'));
            userAnswers[currentIdx] = idx;

            // Cập nhật thanh tiến độ và bảng điều hướng
            updateProgressBar();
            updatePaletteBtn(currentIdx);
        });
    });

    // Cập nhật trạng thái nút bấm Lùi/Tiến
    document.getElementById('prev-q-btn').disabled = (currentIdx === 0);
    
    const nextBtn = document.getElementById('next-q-btn');
    if (currentIdx === questions.length - 1) {
        nextBtn.textContent = 'Nộp bài vượt ải';
        nextBtn.classList.remove('btn-primary');
        nextBtn.classList.add('btn-accent');
    } else {
        nextBtn.textContent = 'Câu tiếp theo';
        nextBtn.classList.remove('btn-accent');
        nextBtn.classList.add('btn-primary');
    }

    // Đánh dấu nút tương ứng trong Palette đang được chọn
    const paletteBtns = document.querySelectorAll('.palette-btn');
    paletteBtns.forEach(btn => btn.classList.remove('active'));
    const currentPaletteBtn = document.getElementById(`palette-btn-${currentIdx}`);
    if (currentPaletteBtn) currentPaletteBtn.classList.add('active');
}

/**
 * Vẽ lưới 1-N câu hỏi định vị bên phải
 */
function renderPaletteGrid() {
    const grid = document.getElementById('question-palette-grid');
    grid.innerHTML = questions.map((_, idx) => `
        <button class="palette-btn" id="palette-btn-${idx}" title="Đến câu ${idx + 1}">
            <span>${idx + 1}</span>
        </button>
    `).join('');

    const buttons = grid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            currentIdx = idx;
            renderQuestion();
        });
        updatePaletteBtn(idx);
    });
}

/**
 * Cập nhật style cho 1 ô nút bấm trong Palette
 */
function updatePaletteBtn(idx) {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;

    btn.className = 'palette-btn'; // reset classes

    if (currentIdx === idx) {
        btn.classList.add('active');
    }

    if (flaggedQuestions[idx]) {
        btn.classList.add('flagged');
    } else if (userAnswers[idx] !== undefined) {
        btn.classList.add('answered');
    }
}

/**
 * Cập nhật thanh tiến độ làm bài đầu trang
 */
function updateProgressBar() {
    const answeredCount = Object.keys(userAnswers).length;
    const percent = Math.round((answeredCount / questions.length) * 100);
    document.getElementById('exam-progress-bar').style.width = `${percent}%`;
}

/**
 * Thiết lập điều hướng click
 */
function initNavigation() {
    const prevBtn = document.getElementById('prev-q-btn');
    const nextBtn = document.getElementById('next-q-btn');
    const quitBtn = document.getElementById('quit-exam-btn');
    const quickSubmitBtn = document.getElementById('quick-submit-btn');
    
    const flagCheckbox = document.getElementById('flag-checkbox');

    // Sự kiện checkbox Đánh dấu xem lại
    flagCheckbox.addEventListener('change', (e) => {
        flaggedQuestions[currentIdx] = e.target.checked;
        updatePaletteBtn(currentIdx);
    });

    // Đi tiếp / Nộp bài
    nextBtn.addEventListener('click', () => {
        if (currentIdx < questions.length - 1) {
            currentIdx++;
            renderQuestion();
        } else {
            // Đã là câu cuối, click sẽ kích hoạt modal nộp bài
            openSubmitModal();
        }
    });

    // Quay lại
    prevBtn.addEventListener('click', () => {
        if (currentIdx > 0) {
            currentIdx--;
            renderQuestion();
        }
    });

    quitBtn.addEventListener('click', () => {
        if (confirm('⚠️ Bạn có chắc muốn thoát? Toàn bộ tiến trình vượt ải hiện tại của bạn sẽ bị hủy bỏ.')) {
            clearInterval(timerInterval);
            window.location.href = 'exams.html';
        }
    });

    // Nút nộp bài trên header
    quickSubmitBtn.addEventListener('click', openSubmitModal);

    // Xử lý các nút trong Submit Modal
    const submitModal = document.getElementById('submit-confirm-modal');
    const cancelSubmitBtn = document.getElementById('confirm-cancel-btn');
    const confirmSubmitBtn = document.getElementById('confirm-submit-btn');

    cancelSubmitBtn.addEventListener('click', () => {
        submitModal.classList.remove('open');
    });

    confirmSubmitBtn.addEventListener('click', () => {
        submitModal.classList.remove('open');
        processSubmit();
    });
}

/**
 * Mở modal nộp bài và đưa thống kê số câu đã làm
 */
function openSubmitModal() {
    const modal = document.getElementById('submit-confirm-modal');
    const statsText = document.getElementById('submit-modal-stats-text');
    const answeredCount = Object.keys(userAnswers).length;

    statsText.innerHTML = `Bạn đã hoàn thành <strong>${answeredCount}/${questions.length}</strong> câu hỏi.`;
    modal.classList.add('open');
}

/**
 * Tự động nộp bài khi hết giờ
 */
function autoSubmitExam() {
    alert('⏱️ Đã hết thời gian vượt ải! Hệ thống sẽ tự động ghi nhận kết quả hiện tại.');
    processSubmit();
}

/**
 * Xử lý tính điểm, lưu trữ tạm vào sessionStorage và chuyển hướng sang trang kết quả
 */
function processSubmit() {
    clearInterval(timerInterval);

    // Tính toán kết quả
    let correctCount = 0;
    questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
            correctCount++;
        }
    });

    const score = (correctCount / questions.length) * 10;
    const timeSpentSeconds = totalDurationSeconds - timeLeft;

    // Chuẩn bị dữ liệu đóng gói lưu vào SessionStorage
    const examResultPayload = {
        examId: examId,
        score: score,
        correctCount: correctCount,
        totalCount: questions.length,
        timeSpent: timeSpentSeconds,
        userAnswers: userAnswers,
        date: new Date().toLocaleDateString('vi-VN')
    };

    sessionStorage.setItem('eduverse_current_result', JSON.stringify(examResultPayload));

    // Chuyển hướng sang trang kết quả
    window.location.href = 'exam-result.html';
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
