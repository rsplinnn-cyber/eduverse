// ==========================================================================
// WEB GLOSSARY / DICTIONARY DATA & LOGIC SCRIPT
// Lưu trữ cơ sở dữ liệu tra cứu thẻ HTML, thuộc tính CSS và xử lý tìm kiếm.
// ==========================================================================

const GLOSSARY_DB = [
    // --- HTML TAGS ---
    {
        name: "<div>",
        type: "html",
        desc: "Thẻ container khối (Block-level elements) dùng để gom nhóm các phần tử khác để dàn trang và định dạng CSS.",
        syntax: '<div class="box-container">\n  <h2>Tiêu đề</h2>\n  <p>Nội dung</p>\n</div>',
        snippet: '<div style="padding: 20px; border: 1px solid #ddd;">\n  <h3>Hộp chứa Div</h3>\n  <p>Thẻ div này chứa tiêu đề và đoạn văn.</p>\n</div>'
    },
    {
        name: "<span>",
        type: "html",
        desc: "Thẻ container nội dòng (Inline elements) dùng để gom nhóm một đoạn text hoặc phần tử nhỏ để định dạng riêng biệt.",
        syntax: 'Tôi muốn tô màu <span class="highlight">chữ này</span>.',
        snippet: 'Tôi đang học lập trình <span style="color: red; font-weight: bold;">HTML/CSS</span> trực quan.'
    },
    {
        name: "<a>",
        type: "html",
        desc: "Thẻ liên kết siêu văn bản (Anchor tag). Thuộc tính href chứa URL đích, target='_blank' mở trong tab mới.",
        syntax: '<a href="https://google.com" target="_blank">Đến Google</a>',
        snippet: '<a href="https://google.com" target="_blank" style="color: blue; text-decoration: underline;">Đến Google trong tab mới</a>'
    },
    {
        name: "<img>",
        type: "html",
        desc: "Thẻ đơn nhúng hình ảnh. Thuộc tính src khai báo đường dẫn ảnh, alt mô tả ảnh phục vụ SEO và thiết bị đọc màn hình.",
        syntax: '<img src="anh.jpg" alt="Mô tả ảnh" width="300">',
        snippet: '<img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300" alt="Học lập trình" style="border-radius: 8px; max-width: 100%;">'
    },
    {
        name: "<form>",
        type: "html",
        desc: "Thẻ biểu mẫu, bao bọc toàn bộ các trường nhập liệu (input, select, textarea) để gửi dữ liệu.",
        syntax: '<form action="/submit" method="POST">\n  <!-- Các input đặt ở đây -->\n</form>',
        snippet: '<form onsubmit="alert(\'Submitted!\'); return false;">\n  <input type="text" placeholder="Nhập chữ..." style="padding:5px;">\n  <button type="submit">Gửi</button>\n</form>'
    },
    {
        name: "<input>",
        type: "html",
        desc: "Thẻ đơn nhận dữ liệu từ người dùng. Thuộc tính type quy định kiểu nhập: text, password, email, checkbox, radio...",
        syntax: '<input type="email" placeholder="Nhập email..." required>',
        snippet: '<input type="text" placeholder="Gõ gì đó vào đây..." style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">'
    },
    {
        name: "<button>",
        type: "html",
        desc: "Thẻ tạo nút bấm. Thuộc tính type='submit' dùng gửi form, type='button' dùng kết hợp sự kiện JavaScript.",
        syntax: '<button type="button" onclick="sayHello()">Nhấp</button>',
        snippet: '<button style="background: #4f46e5; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Nút bấm</button>'
    },
    
    // --- CSS PROPERTIES ---
    {
        name: "display: flex",
        type: "css",
        desc: "Thuộc tính bật mô hình Flexbox Layout cho phần tử cha (container), giúp xếp hàng và co giãn các item con cực kỳ dễ dàng.",
        syntax: '.parent-container {\n  display: flex;\n  flex-direction: row; /* mặc định */\n}',
        snippet: '/* Dán vào CSS của thẻ cha */\ndisplay: flex;\njustify-content: center;\nalign-items: center;'
    },
    {
        name: "justify-content",
        type: "css",
        desc: "Sắp xếp phân bổ các item con dọc theo trục chính (main axis). Các giá trị: flex-start, center, flex-end, space-between...",
        syntax: '.container {\n  display: flex;\n  justify-content: space-between;\n}',
        snippet: 'justify-content: space-between;'
    },
    {
        name: "align-items",
        type: "css",
        desc: "Sắp xếp căn chỉnh các item con dọc theo trục phụ (cross axis - vuông góc trục chính). Các giá trị: flex-start, center, stretch...",
        syntax: '.container {\n  display: flex;\n  align-items: center;\n}',
        snippet: 'align-items: center;'
    },
    {
        name: "position",
        type: "css",
        desc: "Định vị vị trí hiển thị của phần tử. Các giá trị: static (mặc định), relative (tương đối), absolute (tuyệt đối theo cha relative), fixed (cố định trên màn hình).",
        syntax: '.child {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}',
        snippet: 'position: relative; /* Thẻ cha */\n/* và */\nposition: absolute; top: 0; left: 0; /* Thẻ con */'
    },
    {
        name: "margin / padding",
        type: "css",
        desc: "Margin là khoảng cách lề ngoài của phần tử với các thẻ xung quanh. Padding là khoảng cách đệm từ viền vào đến nội dung bên trong.",
        syntax: '.box {\n  margin: 20px; /* Lề ngoài */\n  padding: 15px; /* Lề trong */\n}',
        snippet: 'margin: 15px auto; /* Căn giữa chiều ngang */\npadding: 20px;'
    },
    {
        name: "border-radius",
        type: "css",
        desc: "Thuộc tính bo tròn các góc viền của phần tử. Giá trị tính bằng px hoặc % (50% tạo hình tròn hoàn hảo).",
        syntax: '.avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}',
        snippet: 'border-radius: 12px;'
    },
    {
        name: "box-shadow",
        type: "css",
        desc: "Tạo bóng đổ cho khối. Cú pháp: box-shadow: [lệch-x] [lệch-y] [độ-mờ] [độ-lan] [màu-bóng].",
        syntax: '.card {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}',
        snippet: 'box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);'
    }
];

let currentFilter = "all";
let searchQuery = "";

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('glossary-search-input');
    const tabBtns = document.querySelectorAll('.glossary-tab-btn');

    // 1. VẼ TẤT CẢ DỮ LIỆU BAN ĐẦU
    renderGlossary();

    // 2. SỰ KIỆN GÕ TÌM KIẾM
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderGlossary();
    });

    // 3. SỰ KIỆN CLICK TABS LỌC
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentFilter = btn.getAttribute('data-filter');
            renderGlossary();
        });
    });
});

/**
 * Lọc và kết xuất dữ liệu glossary ra lưới giao diện
 */
function renderGlossary() {
    const grid = document.getElementById('glossary-results-grid');
    
    // Lọc theo loại (HTML/CSS) và từ khóa tìm kiếm
    const filteredList = GLOSSARY_DB.filter(item => {
        // Lọc theo Tab
        const matchTab = (currentFilter === "all") || (item.type === currentFilter);
        
        // Lọc theo từ khóa tìm kiếm (trong tên hoặc mô tả)
        const matchSearch = item.name.toLowerCase().includes(searchQuery) || 
                            item.desc.toLowerCase().includes(searchQuery);

        return matchTab && matchSearch;
    });

    if (filteredList.length === 0) {
        grid.innerHTML = `
            <div class="text-muted" style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;">
                🔍 Không tìm thấy kết quả phù hợp với từ khóa "${escapeHtml(searchQuery)}".
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredList.map(item => {
        const typeBadge = item.type === 'html' 
            ? '<span class="badge badge-info">HTML5 Tag</span>' 
            : '<span class="badge badge-secondary">CSS3 Property</span>';

        return `
            <div class="glossary-card glass-card">
                <div class="glossary-card-header">
                    ${typeBadge}
                    <h3>${escapeHtml(item.name)}</h3>
                </div>
                <p class="glossary-desc">${item.desc}</p>
                <div class="glossary-syntax-title">Cú pháp mẫu:</div>
                <pre class="glossary-syntax"><code>${escapeHtml(item.syntax)}</code></pre>
                <button class="btn btn-secondary btn-sm copy-snippet-btn" data-snippet="${escapeAttribute(item.snippet)}">
                    📋 Sao chép code mẫu
                </button>
            </div>
        `;
    }).join('');

    // Setup click Copy cho các nút vừa sinh ra
    const copyBtns = grid.querySelectorAll('.copy-snippet-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const snippet = btn.getAttribute('data-snippet');
            navigator.clipboard.writeText(snippet).then(() => {
                const originalText = btn.innerHTML;
                btn.innerHTML = '✓ Đã sao chép!';
                btn.style.color = 'var(--success)';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.color = '';
                }, 1200);
            }).catch(err => {
                console.error('Lỗi copy: ', err);
            });
        });
    });
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

function escapeAttribute(text) {
    return text.replace(/"/g, '&quot;');
}
