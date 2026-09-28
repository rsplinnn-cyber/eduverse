// ==========================================================================
// LESSON DETAIL & SMART NOTES & MINI-GAME SCRIPT
// Điều khiển logic hiển thị thử thách, ghi chú cá nhân và phần mini-game ôn tập nhanh.
// ==========================================================================

let currentLessonId = null;
let currentLessonData = null;

// Trạng thái của phần Mini-game ôn tập
let quizQuestions = [];
let currentQuizIdx = 0;
let selectedOptionIdx = null;
let quizUserChoices = {}; // Lưu trữ lựa chọn của người dùng cho từng câu hỏi: { qIdx: selectedIdx }
let quizCheckedStates = {}; // Lưu trạng thái đã bấm kiểm tra của từng câu: { qIdx: { isCorrect: true/false } }

document.addEventListener('DOMContentLoaded', () => {
    // 1. ĐỌC THÔNG TIN THỬ THÁCH TỪ URL PARAMETERS
    const urlParams = new URLSearchParams(window.location.search);
    currentLessonId = urlParams.get('id');

    if (!currentLessonId) {
        alert('Không tìm thấy thử thách! Quay lại bản đồ thử thách.');
        window.location.href = 'lessons.html';
        return;
    }

    // 2. TÌM DỮ LIỆU THỬ THÁCH TRONG DATABASE
    loadLessonData(currentLessonId);

    // 3. KHỞI TẠO TABS CHUYỂN ĐỔI (TÀI LIỆU / QUIZ)
    initTabSwitching();

    // 4. KHỞI TẠO HỆ THỐNG GHI CHÚ
    initNotesSystem();

    // 5. KHỞI TẠO HỆ THỐNG MINI-GAME ÔN TẬP
    initQuickQuizSystem();
});

/**
 * Tìm thử thách trong database tĩnh và đưa lên giao diện
 */
function loadLessonData(lessonId) {
    let foundLesson = null;
    let foundChapterTitle = "";

    for (const chap of COURSE_DB.chapters) {
        const match = chap.lessons.find(les => les.id === lessonId);
        if (match) {
            foundLesson = match;
            foundChapterTitle = chap.title.split(":")[0]; // "Chương 1"
            break;
        }
    }

    if (!foundLesson) {
        alert('Thử thách không tồn tại!');
        window.location.href = 'lessons.html';
        return;
    }

    currentLessonData = foundLesson;
    quizQuestions = foundLesson.quiz || [];

    // Hiển thị nội dung lên UI
    document.getElementById('lesson-chapter-title').textContent = foundChapterTitle;
    document.getElementById('lesson-detail-title').textContent = foundLesson.title;
    
    const videoWrapper = document.querySelector('.video-wrapper');
    if (videoWrapper) {
        const url = foundLesson.videoUrl;
        if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('/embed/')) {
            // Lấy ID video từ URL YouTube
            let videoId = '';
            if (url.includes('embed/')) {
                videoId = url.split('embed/')[1].split('?')[0];
            } else if (url.includes('v=')) {
                videoId = url.split('v=')[1].split('&')[0];
            } else if (url.includes('youtu.be/')) {
                videoId = url.split('youtu.be/')[1].split('?')[0];
            }

            // Lấy tham số thời gian bắt đầu nếu có (ví dụ: ?start=1305 hoặc &t=1305)
            let startParam = '';
            const startMatch = url.match(/[?&](?:start|t)=(\d+)/);
            if (startMatch) {
                startParam = `&start=${startMatch[1]}`;
            }

            // Tạo một URL YouTube xem trực tiếp
            let directWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;
            if (startMatch) {
                directWatchUrl += `&t=${startMatch[1]}s`;
            }

            if (window.location.protocol === 'file:') {
                // Hiển thị khung giữ chỗ (placeholder) thiết kế đẹp mắt thay thế iframe bị lỗi
                videoWrapper.innerHTML = `
                    <div class="video-offline-placeholder">
                        <div class="placeholder-icon">📺</div>
                        <h3>Xem Video Bài Giảng Trên YouTube</h3>
                        <p>Do ứng dụng đang mở ngoại tuyến (<code>file:///</code>), YouTube chặn phát video trực tiếp. Hãy bấm nút dưới đây để xem bài giảng trên YouTube.</p>
                        <a href="${directWatchUrl}" target="_blank" class="btn btn-warning btn-lg" style="text-decoration: none;">
                            Xem trên YouTube ↗
                        </a>
                    </div>
                `;
            } else {
                // Nhúng iframe YouTube phát trực tiếp bình thường khi chạy trên server
                videoWrapper.innerHTML = `
                    <iframe 
                        id="lesson-video-iframe"
                        src="https://www.youtube.com/embed/${videoId}?rel=0${startParam}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        referrerpolicy="strict-origin-when-cross-origin"
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: var(--border-radius-md);"
                    ></iframe>
                `;
            }
        } else {
            videoWrapper.innerHTML = `
                <video 
                    id="lesson-video" 
                    controls 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: var(--border-radius-md); background-color: black;"
                >
                    <source src="${url}" type="video/mp4">
                    Trình duyệt của bạn không hỗ trợ phát video HTML5.
                </video>
            `;
            const videoEl = document.getElementById('lesson-video');
            if (videoEl) {
                videoEl.load();
            }
        }
    }
    
    document.getElementById('lesson-doc-html').innerHTML = foundLesson.document;
    document.title = `${foundLesson.title} - EduVerse`;
}

/**
 * Đóng mở các Tab tài liệu học tập và Quiz ôn tập nhanh
 */
function initTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab-target');

            // Xóa active cũ
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Thêm active mới
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

/**
 * ==========================================================================
 * HỆ THỐNG GHI CHÚ CÁ NHÂN (LOCALSTORAGE)
 * ==========================================================================
 */
function initNotesSystem() {
    const noteInput = document.getElementById('note-input');
    const saveBtn = document.getElementById('note-save-btn');

    // Load ghi chú ban đầu
    renderNotesList();

    saveBtn.addEventListener('click', () => {
        const text = noteInput.value.trim();
        if (!text) {
            alert('Vui lòng nhập nội dung trước khi lưu!');
            return;
        }

        // Tạo đối tượng ghi chú mới
        const newNote = {
            id: Date.now(),
            text: text,
            timestamp: getFormattedDateTime()
        };

        // Lấy danh sách cũ từ localStorage
        const storageKey = `eduverse_notes_${currentLessonId}`;
        const existingNotes = JSON.parse(localStorage.getItem(storageKey) || '[]');
        
        // Thêm ghi chú mới vào đầu danh sách
        existingNotes.unshift(newNote);
        localStorage.setItem(storageKey, JSON.stringify(existingNotes));

        // Reset input và vẽ lại danh sách
        noteInput.value = '';
        renderNotesList();
    });
}

function renderNotesList() {
    const container = document.getElementById('notes-list-container');
    const storageKey = `eduverse_notes_${currentLessonId}`;
    const notes = JSON.parse(localStorage.getItem(storageKey) || '[]');

    if (notes.length === 0) {
        container.innerHTML = `
            <div class="text-muted" style="text-align: center; font-size: 0.9rem; padding: 2rem 0;">
                Chưa có ghi chú nào. Hãy ghi lại các ý chính của cuốn bí kíp!
            </div>
        `;
        return;
    }

    container.innerHTML = notes.map(note => `
        <div class="note-item">
            <div class="note-time">📅 ${note.timestamp}</div>
            <div class="note-text">${escapeHtml(note.text)}</div>
            <button class="note-delete-btn" onclick="deleteNote(${note.id})" title="Xóa ghi chú">🗑️</button>
        </div>
    `).join('');
}

// Định nghĩa hàm global để xóa ghi chú do gọi từ chuỗi HTML inline
window.deleteNote = function(noteId) {
    if (!confirm('Bạn có chắc chắn muốn xóa ghi chú này?')) return;
    const storageKey = `eduverse_notes_${currentLessonId}`;
    let notes = JSON.parse(localStorage.getItem(storageKey) || '[]');
    notes = notes.filter(n => n.id !== noteId);
    localStorage.setItem(storageKey, JSON.stringify(notes));
    renderNotesList();
};

function getFormattedDateTime() {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const date = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
    return `${time} ngày ${date}`;
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

/**
 * ==========================================================================
 * HỆ THỐNG MINI-GAME ÔN TẬP
 * ==========================================================================
 */
function initQuickQuizSystem() {
    const prevBtn = document.getElementById('quiz-prev-btn');
    const submitBtn = document.getElementById('quiz-submit-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    const finishBtn = document.getElementById('quiz-finish-btn');

    if (quizQuestions.length === 0) {
        document.getElementById('quiz-block').innerHTML = `
            <div class="text-muted" style="text-align: center; padding: 2rem;">
                Không có mini-game ôn tập cho thử thách này.
            </div>
        `;
        return;
    }

    // Vẽ câu hỏi đầu tiên
    renderQuizQuestion();

    // Sự kiện nút kiểm tra
    submitBtn.addEventListener('click', () => {
        if (selectedOptionIdx === null) {
            alert('Vui lòng chọn một đáp án trước!');
            return;
        }

        const currentQuestion = quizQuestions[currentQuizIdx];
        const isCorrect = (selectedOptionIdx === currentQuestion.answer);

        // Lưu trạng thái đã kiểm tra
        quizCheckedStates[currentQuizIdx] = { isCorrect: isCorrect };
        
        // Show feedback
        showQuizFeedback(isCorrect, currentQuestion.explanation);
        
        // Tô màu các thẻ lựa chọn trực quan ngay lập tức
        const optionCards = document.querySelectorAll('#quiz-options-list .option-card');
        optionCards.forEach(card => {
            const idx = parseInt(card.getAttribute('data-opt-idx'));
            card.classList.remove('selected'); // Xóa viền chọn màu tím để tránh xung đột màu
            if (idx === currentQuestion.answer) {
                card.classList.add('correct');
            } else if (idx === selectedOptionIdx && !isCorrect) {
                card.classList.add('incorrect');
            }
        });
        
        // Đóng băng click đáp án
        freezeOptions();

        // Cập nhật điều hướng nút bấm
        updateQuizControls();
    });

    // Sự kiện nút tiếp theo
    nextBtn.addEventListener('click', () => {
        if (currentQuizIdx < quizQuestions.length - 1) {
            currentQuizIdx++;
            selectedOptionIdx = quizUserChoices[currentQuizIdx] !== undefined ? quizUserChoices[currentQuizIdx] : null;
            renderQuizQuestion();
        }
    });

    // Sự kiện nút quay lại
    prevBtn.addEventListener('click', () => {
        if (currentQuizIdx > 0) {
            currentQuizIdx--;
            selectedOptionIdx = quizUserChoices[currentQuizIdx] !== undefined ? quizUserChoices[currentQuizIdx] : null;
            renderQuizQuestion();
        }
    });

    // Sự kiện vượt qua thử thách
    finishBtn.addEventListener('click', () => {
        markLessonAsCompleted(currentLessonId);
        alert('🎉 Chúc mừng! Bạn đã chinh phục thành công thử thách này.');
        window.location.href = 'lessons.html';
    });
}

function renderQuizQuestion() {
    const qText = document.getElementById('quiz-q-text');
    const optionsList = document.getElementById('quiz-options-list');
    const counter = document.getElementById('quiz-counter');
    const feedbackBox = document.getElementById('quiz-feedback-box');

    const currentQuestion = quizQuestions[currentQuizIdx];

    // Cập nhật số thứ tự câu hỏi
    counter.textContent = `Câu ${currentQuizIdx + 1} / ${quizQuestions.length}`;
    
    // Đưa câu hỏi ra UI
    qText.textContent = currentQuestion.question;

    // Đưa danh sách đáp án ra UI
    optionsList.innerHTML = currentQuestion.options.map((opt, idx) => `
        <div class="option-card" data-opt-idx="${idx}">
            <div class="option-circle"></div>
            <div>${escapeHtml(opt)}</div>
        </div>
    `).join('');

    // Setup sự kiện click lên Option Card
    const optionCards = optionsList.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            // Nếu câu này đã bấm kiểm tra rồi thì không cho chọn lại nữa
            if (quizCheckedStates[currentQuizIdx] !== undefined) return;

            optionCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedOptionIdx = parseInt(card.getAttribute('data-opt-idx'));
            quizUserChoices[currentQuizIdx] = selectedOptionIdx;
        });
    });

    // Nếu trước đó đã chọn đáp án này rồi thì khôi phục giao diện chọn
    if (selectedOptionIdx !== null) {
        const savedCard = optionsList.querySelector(`[data-opt-idx="${selectedOptionIdx}"]`);
        if (savedCard) savedCard.classList.add('selected');
    }

    // Kiểm tra xem câu này đã nhấn Kiểm tra chưa để khôi phục feedback và vô hiệu hóa
    if (quizCheckedStates[currentQuizIdx] !== undefined) {
        const isCorrect = quizCheckedStates[currentQuizIdx].isCorrect;
        showQuizFeedback(isCorrect, currentQuestion.explanation);
        
        // Đánh dấu thẻ đúng/sai trực quan
        const optionCards = optionsList.querySelectorAll('.option-card');
        optionCards.forEach(card => {
            const idx = parseInt(card.getAttribute('data-opt-idx'));
            card.classList.remove('selected'); // Xóa viền chọn màu tím để tránh xung đột màu
            if (idx === currentQuestion.answer) {
                card.classList.add('correct');
            } else if (idx === selectedOptionIdx && !isCorrect) {
                card.classList.add('incorrect');
            }
        });

        freezeOptions();
    } else {
        feedbackBox.style.display = 'none';
    }

    // Cập nhật hiển thị các nút điều khiển
    updateQuizControls();
}

function showQuizFeedback(isCorrect, explanation) {
    const feedbackBox = document.getElementById('quiz-feedback-box');
    if (isCorrect) {
        feedbackBox.className = "quiz-feedback correct";
        feedbackBox.innerHTML = `<strong>Đúng rồi!</strong> ${explanation}`;
    } else {
        feedbackBox.className = "quiz-feedback incorrect";
        feedbackBox.innerHTML = `<strong>Chưa chính xác!</strong> ${explanation}`;
    }
}

function freezeOptions() {
    const optionCards = document.querySelectorAll('#quiz-options-list .option-card');
    optionCards.forEach(card => {
        card.style.cursor = 'not-allowed';
    });
}

function updateQuizControls() {
    const prevBtn = document.getElementById('quiz-prev-btn');
    const submitBtn = document.getElementById('quiz-submit-btn');
    const nextBtn = document.getElementById('quiz-next-btn');
    const finishBtn = document.getElementById('quiz-finish-btn');

    // Nút lùi câu hỏi
    prevBtn.disabled = (currentQuizIdx === 0);

    const isCurrentChecked = (quizCheckedStates[currentQuizIdx] !== undefined);
    const isLastQuestion = (currentQuizIdx === quizQuestions.length - 1);

    if (isCurrentChecked) {
        // Nếu đã chấm điểm câu này
        submitBtn.style.display = 'none';
        
        if (isLastQuestion) {
            // Kiểm tra xem tất cả các câu đã được trả lời chưa
            const allAnswered = Object.keys(quizCheckedStates).length === quizQuestions.length;
            if (allAnswered) {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'none';
            }
        } else {
            nextBtn.style.display = 'inline-block';
            finishBtn.style.display = 'none';
        }
    } else {
        // Chưa bấm nút kiểm tra câu này
        submitBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'none';
    }
}
