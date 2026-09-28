// ==========================================================================
// CODE PLAYGROUND INTERACTIVE SCRIPT
// Xử lý live preview của iframe, quản lý các mẫu code và sao chép mã.
// ==========================================================================

const CODE_TEMPLATES = {
    empty: {
        html: `<!-- Viết mã HTML của bạn tại đây -->\n<div class="box">\n  <h1>Sân Chơi EduVerse ✨</h1>\n  <p>Nhấp vào nút Chạy thử ở trên để cập nhật!</p>\n</div>`,
        css: `/* Viết mã CSS của bạn tại đây */\nbody {\n  font-family: sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  margin: 0;\n  background-color: #fafafa;\n}\n.box {\n  text-align: center;\n  padding: 2rem;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n}`
    },
    hello: {
        html: `<!-- MẪU 1: HELLO WORLD HTML5 -->\n<div class="card">\n  <h1>Hello World! 👋</h1>\n  <p>Chào mừng bạn đến với Sân chơi Lập trình EduVerse.</p>\n  <button class="btn" onclick="alert('Chào bạn đến với thế giới Front-end!')">Nhấp vào tôi</button>\n</div>`,
        css: `/* Phong cách cho thẻ Card */\nbody {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  background-color: #f0f4f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n  margin: 0;\n}\n.card {\n  background-color: white;\n  padding: 2.5rem;\n  border-radius: 16px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  max-width: 400px;\n}\nh1 {\n  color: #4f46e5;\n  margin-bottom: 0.5rem;\n}\np {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n.btn {\n  background-color: #4f46e5;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.btn:hover {\n  background-color: #4338ca;\n}`
    },
    media: {
        html: `<!-- MẪU 2: THẺ ẢNH VÀ FORM ĐĂNG KÝ -->\n<div class="form-container">\n  <!-- Nhúng hình ảnh minh họa -->\n  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60" alt="Học tập" class="form-banner">\n  \n  <h2>Đăng ký nhận tài liệu học 📚</h2>\n  <p>Điền thông tin bên dưới để tải tài liệu HTML/CSS.</p>\n  \n  <form onsubmit="alert('Đăng ký nhận tài liệu thành công!'); return false;">\n    <label for="name">Họ và tên:</label>\n    <input type="text" id="name" placeholder="Ví dụ: Nguyễn Văn A" required>\n    \n    <label for="email">Email liên hệ:</label>\n    <input type="email" id="email" placeholder="email@gmail.com" required>\n    \n    <button type="submit" class="submit-btn">Đăng ký ngay</button>\n  </form>\n</div>`,
        css: `/* Styling form và ảnh */\nbody {\n  font-family: sans-serif;\n  background: linear-gradient(135deg, #e0e7ff, #ede9fe);\n  min-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 1rem 0;\n}\n.form-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 20px rgba(0,0,0,0.06);\n  width: 90%;\n  max-width: 360px;\n  overflow: hidden;\n  padding-bottom: 2rem;\n}\n.form-banner {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\nh2, p, form {\n  padding: 0 1.5rem;\n}\nh2 {\n  color: #1e1b4b;\n  margin-top: 1rem;\n  margin-bottom: 0.25rem;\n  font-size: 1.3rem;\n}\np {\n  color: #6b7280;\n  font-size: 0.85rem;\n  margin-bottom: 1.25rem;\n}\nlabel {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\ninput {\n  width: 100%;\n  padding: 0.65rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n  box-sizing: border-box;\n}\ninput:focus {\n  border-color: #6366f1;\n  outline: none;\n}\n.submit-btn {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: #6366f1;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.submit-btn:hover {\n  background-color: #4f46e5;\n}`
    },
    flex: {
        html: `<!-- MẪU 3: DÀN BỐ CỤC FLEXBOX -->\n<div class="flex-container">\n  <div class="flex-item flex-item-1">Hộp 1\n    <br><span class="desc">flex: 1</span>\n  </div>\n  <div class="flex-item flex-item-2">Hộp 2\n    <br><span class="desc">Căn giữa</span>\n  </div>\n  <div class="flex-item flex-item-3">Hộp 3\n    <br><span class="desc">flex: 1</span>\n  </div>\n</div>`,
        css: `/* CSS Flexbox Container và Items */\nbody {\n  font-family: system-ui, sans-serif;\n  margin: 1.5rem;\n  background-color: #f8fafc;\n}\n.flex-container {\n  background-color: #e2e8f0;\n  border: 3px dashed #94a3b8;\n  border-radius: 12px;\n  padding: 1.5rem;\n  min-height: 250px;\n  display: flex;\n  flex-direction: row; /* xếp hàng ngang */\n  justify-content: space-between; /* giãn đều các hộp */\n  align-items: center; /* căn dọc ở giữa */\n  gap: 1rem;\n}\n.flex-item {\n  padding: 1.5rem 1rem;\n  border-radius: 8px;\n  color: white;\n  font-weight: 600;\n  font-size: 1rem;\n  text-align: center;\n  flex: 1; /* tự động co giãn đều */\n}\n.desc {\n  font-weight: 400;\n  font-size: 0.8rem;\n  opacity: 0.85;\n}\n.flex-item-1 { background-color: #ef4444; }\n.flex-item-2 { \n  background-color: #3b82f6; \n  align-self: stretch; /* kéo dài hết chiều cao của container */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flex-item-3 { background-color: #10b981; }`
    },
    hover: {
        html: `<!-- MẪU 4: HIỆU ỨNG HOVER CARD -->\n<div class="card-container">\n  <div class="hover-card">\n    <div class="badge">🔥 Đăng ký nhiều</div>\n    <h3>Thiết Kế Web Căn Bản</h3>\n    <p>Học HTML5 & CSS3 chỉ trong 30 ngày từ con số không tròn trĩnh.</p>\n    <a href="#" class="go-link">Khám phá lộ trình học ➜</a>\n  </div>\n</div>`,
        css: `/* Thiết kế nền tối cao cấp & Hiệu ứng di chuột */\nbody {\n  background-color: #0f172a;\n  color: white;\n  font-family: system-ui, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n  margin: 0;\n}\n.hover-card {\n  background-color: #1e293b;\n  border: 1px solid #334155;\n  padding: 2.25rem;\n  border-radius: 16px;\n  width: 280px;\n  position: relative;\n  /* Hiệu ứng mượt mà khi di chuột qua */\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n  cursor: pointer;\n}\n/* Trạng thái di chuột qua CARD */\n.hover-card:hover {\n  transform: translateY(-8px); /* Trượt nhẹ lên trên */\n  border-color: #818cf8; /* Đổi màu viền */\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(99, 102, 241, 0.15);\n}\n.badge {\n  background-color: #ef4444;\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.25rem 0.5rem;\n  border-radius: 999px;\n  display: inline-block;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n}\nh3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.25rem;\n}\np {\n  color: #94a3b8;\n  font-size: 0.85rem;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.go-link {\n  color: #818cf8;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n}`
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const htmlInput = document.getElementById('html-code-input');
    const cssInput = document.getElementById('css-code-input');
    const selectTemplate = document.getElementById('template-select');
    
    const runBtn = document.getElementById('run-code-btn');
    const resetBtn = document.getElementById('reset-code-btn');
    
    const copyHtmlBtn = document.getElementById('copy-html-btn');
    const copyCssBtn = document.getElementById('copy-css-btn');
    const statusIndicator = document.getElementById('preview-status-indicator');

    // 1. LOAD TEMPLATE BAN ĐẦU (Mẫu 1)
    loadTemplate('hello');
    selectTemplate.value = 'hello';

    // 2. KHỞI CHẠY PREVIEW
    updateLivePreview();

    // 3. SỰ KIỆN NÚT CHẠY THỬ
    runBtn.addEventListener('click', () => {
        updateLivePreview();
        showStatusTemp('Đã cập nhật', 'var(--success)', 1500);
    });

    // 4. SỰ KIỆN THAY ĐỔI TEMPLATE
    selectTemplate.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val !== 'empty' && val in CODE_TEMPLATES) {
            loadTemplate(val);
        } else if (val === 'empty') {
            htmlInput.value = '';
            cssInput.value = '';
        }
        updateLivePreview();
    });

    // 5. SỰ KIỆN XÓA CODE
    resetBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa toàn bộ code hiện tại?')) {
            htmlInput.value = '';
            cssInput.value = '';
            updateLivePreview();
            selectTemplate.value = 'empty';
        }
    });

    // 6. TỰ ĐỘNG CẬP NHẬT KHI GÕ CHỮ (DEBOUNCE 500MS)
    let typingTimer;
    const doneTypingInterval = 600;

    const handleInput = () => {
        statusIndicator.textContent = 'Đang thay đổi...';
        statusIndicator.style.backgroundColor = 'var(--warning-light)';
        statusIndicator.style.color = 'var(--warning)';
        
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            updateLivePreview();
            statusIndicator.textContent = 'Đồng bộ';
            statusIndicator.style.backgroundColor = 'var(--success-light)';
            statusIndicator.style.color = 'var(--success)';
        }, doneTypingInterval);
    };

    htmlInput.addEventListener('input', handleInput);
    cssInput.addEventListener('input', handleInput);

    // 7. SAO CHÉP MÃ
    setupCopyBtn(copyHtmlBtn, htmlInput);
    setupCopyBtn(copyCssBtn, cssInput);
});

function loadTemplate(key) {
    const htmlInput = document.getElementById('html-code-input');
    const cssInput = document.getElementById('css-code-input');
    
    htmlInput.value = CODE_TEMPLATES[key].html;
    cssInput.value = CODE_TEMPLATES[key].css;
}

function updateLivePreview() {
    const html = document.getElementById('html-code-input').value;
    const css = document.getElementById('css-code-input').value;
    const iframe = document.getElementById('output-iframe');

    const previewContent = `
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
        </body>
        </html>
    `;

    // Nạp trực tiếp vào iframe srcdoc để tránh lỗi bảo mật tập tin nội bộ
    iframe.srcdoc = previewContent;
}

function setupCopyBtn(btn, inputEl) {
    btn.addEventListener('click', () => {
        const text = inputEl.value;
        if (!text) {
            alert('Không có nội dung để sao chép!');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            btn.style.color = 'var(--success)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.color = '';
            }, 1500);
        }).catch(err => {
            console.error('Lỗi khi copy: ', err);
            // Dùng chiêu sơ cua nếu trình duyệt chặn clipboard API
            inputEl.select();
            document.execCommand('copy');
            btn.textContent = '✓ Copied!';
            setTimeout(() => { btn.textContent = originalText; }, 1500);
        });
    });
}

function showStatusTemp(text, color, delay) {
    const indicator = document.getElementById('preview-status-indicator');
    const originalText = indicator.textContent;
    const originalBg = indicator.style.backgroundColor;
    const originalCol = indicator.style.color;

    indicator.textContent = text;
    indicator.style.backgroundColor = 'var(--success-light)';
    indicator.style.color = color;

    setTimeout(() => {
        indicator.textContent = originalText;
        indicator.style.backgroundColor = originalBg;
        indicator.style.color = originalCol;
    }, delay);
}
