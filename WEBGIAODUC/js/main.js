// ==========================================================================
// CORE COMMON SCRIPT FOR EDUVERSE
// Quản lý theme (Sáng/Tối), Drawer Menu di động, Đồng bộ localStorage và thống kê học tập.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. KHỞI TẠO THEME (SÁNG / TỐI)
    initTheme();

    // 2. KHỞI TẠO MENU ĐIỀU HƯỚNG DI ĐỘNG (MOBILE DRAWER)
    initMobileNav();

    // 3. ĐÁNH DẤU TRANG ACTIVE TRÊN THANH NAVIGATION
    highlightActiveLink();

    // 4. HIỂN THỊ SỐ LIỆU THỐNG KÊ (Cho trang index.html)
    updateDashboardStats();
});

/**
 * Khởi tạo và thiết lập chuyển đổi giao diện Sáng / Tối
 */
function initTheme() {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const savedTheme = localStorage.getItem('eduverse_theme') || 'light';
    
    // Áp dụng theme lưu trữ
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleIcons(savedTheme);

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('eduverse_theme', newTheme);
            updateThemeToggleIcons(newTheme);
            
            // Phát sự kiện tùy biến để các biểu đồ hoặc phần tử khác cập nhật màu nếu cần
            window.dispatchEvent(new Event('themechange'));
        });
    });
}

function updateThemeToggleIcons(theme) {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        if (theme === 'dark') {
            btn.innerHTML = '☀️'; // Icon mặt trời cho chế độ sáng
            btn.setAttribute('title', 'Chuyển sang giao diện Sáng');
        } else {
            btn.innerHTML = '🌙'; // Icon mặt trăng cho chế độ tối
            btn.setAttribute('title', 'Chuyển sang giao diện Tối');
        }
    });
}

/**
 * Thiết lập điều khiển đóng mở Drawer Navigation trên Mobile
 */
function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const closeBtn = document.querySelector('.drawer-close-btn');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.drawer-overlay');

    if (!toggleBtn || !drawer || !overlay) return;

    const openDrawer = () => {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Ngăn cuộn trang phía dưới
    };

    const closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
}

/**
 * Tự động tìm và thêm class 'active' cho link menu tương ứng với trang hiện tại
 */
function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Đọc localStorage để tính toán các số liệu học tập thực tế và cập nhật lên UI
 */
function updateDashboardStats() {
    // Chỉ cập nhật nếu đang đứng ở trang chủ hoặc các trang có thống kê
    const progressText = document.getElementById('stat-progress-percent');
    const completedText = document.getElementById('stat-completed-lessons');
    const examText = document.getElementById('stat-exam-count');
    const highestScoreText = document.getElementById('stat-highest-score');

    // Lấy số liệu từ LocalStorage
    const completedLessons = JSON.parse(localStorage.getItem('eduverse_completed_lessons') || '[]');
    
    // Tính tổng số thử thách trong database
    let totalLessonsCount = 0;
    if (typeof COURSE_DB !== 'undefined') {
        COURSE_DB.chapters.forEach(chap => {
            totalLessonsCount += chap.lessons.length;
        });
    } else {
        totalLessonsCount = 5; // Số mặc định nếu chưa load DB
    }

    const completedCount = completedLessons.length;
    const progressPercent = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;

    // Lấy dữ liệu thi cử
    const examResults = JSON.parse(localStorage.getItem('eduverse_exam_results') || '{}');
    const examCount = Object.keys(examResults).length;
    
    let maxScore = 0;
    Object.values(examResults).forEach(res => {
        if (res.score > maxScore) maxScore = res.score;
    });

    // Cập nhật giao diện nếu phần tử tồn tại
    if (progressText) {
        progressText.textContent = `${progressPercent}%`;
        // Tăng chiều rộng thanh tiến độ trang chủ nếu có
        const progressBar = document.getElementById('stat-progress-bar');
        if (progressBar) progressBar.style.width = `${progressPercent}%`;
    }
    if (completedText) completedText.textContent = `${completedCount}/${totalLessonsCount}`;
    if (examText) examText.textContent = examCount;
    if (highestScoreText) highestScoreText.textContent = examCount > 0 ? `${maxScore.toFixed(1)}/10` : 'Chưa thử sức';
}

/**
 * Hàm trợ giúp lưu trữ tiến trình học tập
 */
function markLessonAsCompleted(lessonId) {
    let completed = JSON.parse(localStorage.getItem('eduverse_completed_lessons') || '[]');
    if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem('eduverse_completed_lessons', JSON.stringify(completed));
    }
}

function isLessonCompleted(lessonId) {
    const completed = JSON.parse(localStorage.getItem('eduverse_completed_lessons') || '[]');
    return completed.includes(lessonId);
}
