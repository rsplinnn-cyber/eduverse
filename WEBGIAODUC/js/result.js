// ==========================================================================
// EXAM RESULT PROCESSING & DETAILED REVIEW SCRIPT
// Đọc kết quả từ SessionStorage, lưu điểm cao nhất, vẽ biểu đồ và chạy pháo hoa giấy.
// ==========================================================================

let resultData = null;
let examData = null;

document.addEventListener('DOMContentLoaded', () => {
    // 1. ĐỌC DỮ LIỆU BÀI LÀM VỪA HOÀN THÀNH TỪ SESSION STORAGE
    const sessionData = sessionStorage.getItem('eduverse_current_result');
    if (!sessionData) {
        alert('Không tìm thấy kết quả vượt ải mới! Quay lại trang danh sách thử thách.');
        window.location.href = 'exams.html';
        return;
    }

    resultData = JSON.parse(sessionData);

    // 2. TÌM CHI TIẾT CHƯỚNG NGẠI VẬT TRONG DATABASE ĐỂ HIỂN THỊ REVIEW
    examData = EXAMS_DB.find(ex => ex.id === resultData.examId);
    if (!examData) {
        alert('Dữ liệu chướng ngại vật không khớp!');
        window.location.href = 'exams.html';
        return;
    }

    // 3. LƯU LẠI KẾT QUẢ ĐẠT ĐƯỢC CAO NHẤT (LOCAL STORAGE)
    saveHighestScore(resultData.examId, resultData.score, resultData.date);

    // 4. HIỂN THỊ KẾT QUẢ LÊN GIAO DIỆN
    displayResultStats();

    // 5. HIỂN THỊ CHI TIẾT ĐÁP ÁN (REVIEW MODE)
    renderDetailedReview();

    // 6. KHỞI TẠO NÚT BẤM
    initActionButtons();

    // 7. CHẠY HIỆU ỨNG PHÁO HOA GIẤY (CONFETTI) NẾU ĐIỂM SỐ TỪ 5 TRỞ LÊN
    if (resultData.score >= 5.0) {
        startConfettiEffect();
    }
});

/**
 * Lưu điểm cao nhất vào localStorage
 */
function saveHighestScore(examId, score, date) {
    const examResults = JSON.parse(localStorage.getItem('eduverse_exam_results') || '{}');
    const existing = examResults[examId];

    // Chỉ cập nhật nếu chưa có điểm cũ hoặc điểm mới cao hơn điểm cũ
    if (!existing || score > existing.score) {
        examResults[examId] = {
            score: score,
            date: date
        };
        localStorage.setItem('eduverse_exam_results', JSON.stringify(examResults));
    }
}

/**
 * Đưa thông số thống kê điểm số lên UI
 */
function displayResultStats() {
    document.getElementById('result-exam-name').textContent = examData.title;
    
    // Vòng tròn điểm số
    const scoreValEl = document.getElementById('result-score-val');
    scoreValEl.textContent = resultData.score.toFixed(1);

    // Thay đổi màu sắc vòng tròn dựa trên điểm số
    if (resultData.score >= 8.0) {
        scoreValEl.style.background = 'linear-gradient(135deg, var(--success), var(--primary))';
    } else if (resultData.score >= 5.0) {
        scoreValEl.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
    } else {
        scoreValEl.style.background = 'linear-gradient(135deg, var(--danger), var(--warning))';
    }

    // Nhận xét tương ứng
    const verdictTextEl = document.getElementById('result-verdict-text');
    if (resultData.score >= 9.0) {
        verdictTextEl.textContent = '👑 Xuất sắc! Bạn đã hoàn toàn làm chủ kiến thức.';
        verdictTextEl.style.color = 'var(--success)';
    } else if (resultData.score >= 7.0) {
        verdictTextEl.textContent = '🌟 Giỏi! Bạn làm bài rất tốt.';
        verdictTextEl.style.color = 'var(--primary)';
    } else if (resultData.score >= 5.0) {
        verdictTextEl.textContent = '👍 Thành công! Bạn đã vượt qua chướng ngại vật.';
        verdictTextEl.style.color = 'var(--info)';
    } else {
        verdictTextEl.textContent = '📚 Chưa vượt ải! Hãy đọc kỹ bí kíp và thử lại nhé.';
        verdictTextEl.style.color = 'var(--danger)';
    }

    // Cập nhật 4 ô thống kê
    document.getElementById('stat-score-lbl').textContent = `${resultData.score.toFixed(1)} / 10`;
    document.getElementById('stat-correct-lbl').textContent = `${resultData.correctCount} / ${resultData.totalCount}`;
    document.getElementById('stat-time-lbl').textContent = formatSecondsToTime(resultData.timeSpent);
    
    const accuracy = Math.round((resultData.correctCount / resultData.totalCount) * 100);
    document.getElementById('stat-accuracy-lbl').textContent = `${accuracy}%`;
}

/**
 * Đưa chi tiết câu hỏi, lựa chọn đúng sai và giải thích ra giao diện
 */
function renderDetailedReview() {
    const container = document.getElementById('result-review-container');
    const qList = examData.questions;

    container.innerHTML = qList.map((q, qIdx) => {
        const userChoiceIdx = resultData.userAnswers[qIdx];
        const isCorrect = (userChoiceIdx === q.answer);

        // Vẽ các option trắc nghiệm
        const optionsHtml = q.options.map((opt, optIdx) => {
            let stateClass = "";
            let icon = "⚪";

            if (optIdx === q.answer) {
                // Đây là đáp án đúng trong cơ sở dữ liệu
                stateClass = "correct-answer";
                icon = "✅";
            } else if (optIdx === userChoiceIdx && !isCorrect) {
                // Người dùng chọn sai đáp án này
                stateClass = "wrong-answer";
                icon = "❌";
            }

            return `
                <div class="review-opt-card ${stateClass}">
                    <span>${icon}</span>
                    <div>${escapeHtml(opt)}</div>
                </div>
            `;
        }).join('');

        return `
            <div class="review-item glass-card" style="border-left: 6px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                <div class="review-q-num">Câu số ${qIdx + 1} (${isCorrect ? 'Đúng' : 'Sai'})</div>
                <div class="review-q-text">${escapeHtml(q.question)}</div>
                <div class="review-options">
                    ${optionsHtml}
                </div>
                <div class="review-explanation">
                    💡 <strong>Giải thích đáp án:</strong> ${q.explanation}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Gắn sự kiện chuyển trang cho nút làm lại và nút quay về
 */
function initActionButtons() {
    const backBtn = document.getElementById('result-back-btn');
    const retakeBtn = document.getElementById('result-retake-btn');

    backBtn.addEventListener('click', () => {
        window.location.href = 'exams.html';
    });

    retakeBtn.addEventListener('click', () => {
        window.location.href = `exam-taking.html?id=${resultData.examId}`;
    });
}

function formatSecondsToTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')} phút ${secs.toString().padStart(2, '0')} giây`;
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
 * Hiệu ứng Canvas Confetti
 */
function startConfettiEffect() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    // Đồng bộ kích thước canvas
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#6366f1', '#a855f7', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];
    const particles = [];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            spin: Math.random() * 0.2 - 0.1
        });
    }

    let animationFrameId;

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let active = false;

        particles.forEach(p => {
            p.y += p.speed;
            p.angle += p.spin;
            
            // Vẽ mảnh giấy xoay xoay
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            // Nếu mảnh giấy rơi ra khỏi cạnh dưới, quăng lại lên trên (trong vòng 4 giây đầu)
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
            
            if (p.y < canvas.height) active = true;
        });

        if (active) {
            animationFrameId = requestAnimationFrame(draw);
        }
    };

    draw();

    // Dừng hiệu ứng sau 5 giây để tối ưu tài nguyên
    setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.removeEventListener('resize', resizeCanvas);
    }, 6000);
}
