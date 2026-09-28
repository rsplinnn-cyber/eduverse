// ==========================================================================
// STATIC DATABASE FOR EDUVERSE
// Chứa dữ liệu thử thách, mini-game ôn tập, và các chướng ngại vật
// ==========================================================================

const COURSE_DB = {
    title: "Lập trình Web Cơ bản (HTML, CSS, JS)",
    description: "Khóa học nhập môn giúp bạn nắm vững ba trụ cột cốt lõi của phát triển Web front-end.",
    chapters: [
        {
            id: "chap1",
            title: "Chương 1: HTML5 - Cấu trúc Trang Web",
            lessons: [
                {
                    id: "les1",
                    title: "Thử thách 1: Tổng quan và Cấu trúc Tài liệu HTML5",
                    duration: "10 phút",
                    level: "Cơ bản",
                    videoUrl: "https://www.youtube.com/embed/B0NgbjglAzs",
                    summary: "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu siêu văn bản được sử dụng để xây dựng cấu trúc cơ bản cho một trang web. Trong bài này, chúng ta sẽ tìm hiểu về các cặp thẻ nền tảng `<html>`, `<head>`, `<body>`, các tiêu đề `<h1>`-`<h6>` và đoạn văn `<p>`.",
                    document: `
                        <h3>1. Siêu văn bản là gì?</h3>
                        <p>Khác với văn bản thông thường, siêu văn bản chứa các liên kết (hyperlinks) dẫn đến các tài nguyên khác và sử dụng cấu trúc các "thẻ" (tags) để định nghĩa cấu trúc tài liệu.</p>
                        <h3>2. Cấu trúc cơ bản của file HTML5</h3>
                        <pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="vi"&gt;\n&lt;head&gt;\n    &lt;meta charset="UTF-8"&gt;\n    &lt;title&gt;Tiêu đề trang&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;Xin chào EduVerse!&lt;/h1&gt;\n    &lt;p&gt;Đây là đoạn văn bản đầu tiên.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>
                        <h3>3. Các thẻ định dạng cơ bản</h3>
                        <ul>
                            <li><strong>&lt;h1&gt; đến &lt;h6&gt;</strong>: Biểu thị các tiêu đề theo mức độ quan trọng giảm dần. Chỉ nên có duy nhất 1 thẻ h1 trên mỗi trang web.</li>
                            <li><strong>&lt;p&gt;</strong>: Biểu thị đoạn văn bản (paragraph). Trình duyệt sẽ tự động thêm khoảng trống trên và dưới mỗi đoạn văn.</li>
                            <li><strong>&lt;br&gt;</strong>: Xuống dòng mà không tạo đoạn văn mới (Thẻ đơn, không có thẻ đóng).</li>
                        </ul>
                    `,
                    quiz: [
                        {
                            question: "Thẻ nào được dùng để định nghĩa tiêu đề quan trọng nhất trên trang web?",
                            options: [
                                "Thẻ <head>",
                                "Thẻ <h1>",
                                "Thẻ <title>",
                                "Thẻ <header>"
                            ],
                            answer: 1,
                            explanation: "Thẻ <h1> dùng để biểu diễn tiêu đề cấp 1 (lớn nhất và quan trọng nhất trên trang). Thẻ <head> chứa siêu dữ liệu metadata, thẻ <title> định nghĩa tiêu đề hiển thị trên tab trình duyệt."
                        },
                        {
                            question: "Đâu là thẻ đơn không cần thẻ đóng trong HTML?",
                            options: [
                                "Thẻ <p>",
                                "Thẻ <html>",
                                "Thẻ <br>",
                                "Thẻ <body>"
                            ],
                            answer: 2,
                            explanation: "Thẻ <br> (break line) dùng để xuống dòng trực tiếp và là một thẻ rỗng (empty tag) nên không cần có thẻ đóng."
                        },
                        {
                            question: "Khai báo nào ở đầu tài liệu để báo hiệu cho trình duyệt biết đây là trang HTML5?",
                            options: [
                                "<html>",
                                "<!DOCTYPE html>",
                                "<meta charset='UTF-8'>",
                                "<head>"
                            ],
                            answer: 1,
                            explanation: "<!DOCTYPE html> là khai báo bắt buộc ở dòng đầu tiên của tài liệu để trình duyệt render trang web theo tiêu chuẩn HTML5 hiện đại."
                        }
                    ]
                },
                {
                    id: "les2",
                    title: "Thử thách 2: Thẻ Đa phương tiện & Liên kết",
                    duration: "12 phút",
                    level: "Cơ bản",
                    videoUrl: "https://www.youtube.com/embed/kY0qS0-K5a8",
                    summary: "Một trang web sống động không thể thiếu hình ảnh, âm thanh, video và các đường liên kết kết nối thế giới. Học cách sử dụng các thuộc tính src, href, alt để điều khiển hiển thị tài nguyên.",
                    document: `
                        <h3>1. Thẻ liên kết &lt;a&gt; (Anchor Tag)</h3>
                        <p>Thẻ liên kết giúp chuyển hướng người dùng sang một trang mới hoặc một vị trí khác trên trang. Thuộc tính quan trọng nhất là <code>href</code>.</p>
                        <pre><code>&lt;a href="https://google.com" target="_blank"&gt;Đến Google&lt;/a&gt;</code></pre>
                        <p>If want link to open in new tab, we use <code>target="_blank"</code>.</p>
                        <h3>2. Thẻ hiển thị hình ảnh &lt;img&gt;</h3>
                        <p>Thẻ <code>&lt;img&gt;</code> là thẻ đơn dùng để nhúng ảnh. Bắt buộc cần có thuộc tính <code>src</code> (đường dẫn ảnh) và thuộc tính <code>alt</code> (mô tả văn bản thay thế khi ảnh lỗi hoặc hỗ trợ người khiếm thị).</p>
                        <pre><code>&lt;img src="assets/logo.png" alt="Logo EduVerse" width="200"&gt;</code></pre>
                        <h3>3. Nhúng âm thanh & Video</h3>
                        <p>HTML5 cung cấp thẻ <code>&lt;video&gt;</code> và <code>&lt;audio&gt;</code> đi kèm thuộc tính <code>controls</code> để hiển thị thanh điều khiển tua nhạc, âm lượng.</p>
                        <pre><code>&lt;video src="clip.mp4" controls width="400"&gt;&lt;/video&gt;</code></pre>
                    `,
                    quiz: [
                        {
                            question: "Thuộc tính nào là bắt buộc đối với thẻ <img> để hỗ trợ người khiếm thị và tối ưu SEO?",
                            options: [
                                "src",
                                "alt",
                                "title",
                                "href"
                            ],
                            answer: 1,
                            explanation: "alt (alternative text) cung cấp văn bản thay thế cho ảnh, giúp bộ đọc màn hình (screen reader) đọc lên cho người khiếm thị và giúp Google Bot hiểu nội dung ảnh để làm SEO."
                        },
                        {
                            question: "Làm thế nào để một liên kết mở ra trong một tab/cửa sổ mới khi nhấp chuột?",
                            options: [
                                "target='_self'",
                                "target='_new'",
                                "target='_blank'",
                                "href='newtab'"
                            ],
                            answer: 2,
                            explanation: "Thuộc tính target='_blank' chỉ thị cho trình duyệt mở liên kết đó trong một tab mới hoàn toàn."
                        }
                    ]
                }
            ]
        },
        {
            id: "chap2",
            title: "Chương 2: CSS3 - Định dạng Giao diện",
            lessons: [
                {
                    id: "les3",
                    title: "Thử thách 3: CSS Căn bản & Selector",
                    duration: "15 phút",
                    level: "Trung bình",
                    videoUrl: "https://www.youtube.com/embed/kYJm1e39nI0",
                    summary: "Học cách làm đẹp trang web. CSS (Cascading Style Sheets) giúp bạn thay đổi màu sắc, font chữ, khoảng cách. Khám phá các bộ chọn (Selectors) để áp đặt thuộc tính chính xác lên thẻ mong muốn.",
                    document: `
                        <h3>1. Ba cách chèn CSS vào HTML</h3>
                        <ul>
                            <li><strong>Inline CSS</strong>: Viết trực tiếp vào thuộc tính style của thẻ (Không khuyến khích vì khó bảo trì).</li>
                            <li><strong>Internal CSS</strong>: Viết trong thẻ &lt;style&gt; đặt ở &lt;head&gt;.</li>
                            <li><strong>External CSS</strong>: Tạo file .css riêng biệt và nhúng vào bằng thẻ &lt;link&gt; (Tốt nhất).</li>
                        </ul>
                        <h3>2. Các bộ chọn Selector phổ biến</h3>
                        <ul>
                            <li><strong>Tag Selector</strong>: Chọn trực tiếp tên thẻ. Ví dụ: <code>p { color: red; }</code></li>
                            <li><strong>Class Selector</strong>: Chọn qua thuộc tính class, bắt đầu bằng dấu chấm. Ví dụ: <code>.button-active { color: blue; }</code></li>
                            <li><strong>ID Selector</strong>: Chọn qua thuộc tính id, bắt đầu bằng dấu thăng. Mỗi ID là duy nhất trên trang. Ví dụ: <code>#main-header { font-size: 24px; }</code></li>
                        </ul>
                        <h3>3. Box Model trong CSS</h3>
                        <p>Mỗi phần tử HTML được coi là một chiếc hộp hình chữ nhật, bao gồm 4 thành phần từ trong ra ngoài: <strong>Content $\rightarrow$ Padding $\rightarrow$ Border $\rightarrow$ Margin</strong>.</p>
                    `,
                    quiz: [
                        {
                            question: "Để chỉ định CSS cho một class cụ thể, ta dùng ký tự nào trước tên class đó trong file CSS?",
                            options: [
                                "Ký tự thăng (#)",
                                "Ký tự chấm (.)",
                                "Ký tự và (&)",
                                "Không dùng ký tự nào"
                            ],
                            answer: 1,
                            explanation: "Trong CSS, dấu chấm (.) được dùng cho bộ chọn class (ví dụ .title), còn dấu thăng (#) được dùng cho bộ chọn id (ví dụ #header)."
                        },
                        {
                            question: "Thứ tự từ trong ra ngoài của Box Model là gì?",
                            options: [
                                "Content -> Border -> Padding -> Margin",
                                "Content -> Margin -> Border -> Padding",
                                "Content -> Padding -> Border -> Margin",
                                "Padding -> Content -> Border -> Margin"
                            ],
                            answer: 2,
                            explanation: "Cấu trúc Box Model chuẩn bao gồm nội dung (Content), tiếp đến là khoảng đệm (Padding), viền (Border), và cuối cùng là khoảng cách lề ngoài (Margin)."
                        }
                    ]
                },
                {
                    id: "les4",
                    title: "Thử thách 4: Bố cục Trang Web với Flexbox",
                    duration: "18 phút",
                    level: "Trung bình",
                    videoUrl: "https://www.youtube.com/embed/R9K1G9yR5-U",
                    summary: "Flexbox là một công cụ mạnh mẽ trong CSS giúp sắp xếp các phần tử con theo chiều ngang hoặc dọc cực kỳ linh hoạt, giải quyết triệt để các vấn đề căn giữa (centering) và co giãn responsive.",
                    document: `
                        <h3>1. Khởi tạo Flex Container</h3>
                        <p>Để bắt đầu sử dụng Flexbox, chúng ta thiết lập thuộc tính <code>display: flex;</code> cho phần tử cha.</p>
                        <h3>2. Các thuộc tính cốt lõi của Flexbox</h3>
                        <ul>
                            <li><strong>flex-direction</strong>: Định hướng trục chính (main axis) xếp hàng ngang (<code>row</code>) hay hàng dọc (<code>column</code>).</li>
                            <li><strong>justify-content</strong>: Căn chỉnh vị trí các phần tử dọc theo trục chính (<code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>).</li>
                            <li><strong>align-items</strong>: Căn chỉnh vị trí các phần tử dọc theo trục phụ (cross axis - vuông góc với trục chính).</li>
                        </ul>
                        <pre><code>.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}</code></pre>
                        <p>Đoạn mã trên là giải pháp kinh điển để căn giữa tuyệt đối một phần tử con bên trong cha.</p>
                    `,
                    quiz: [
                        {
                            question: "Thuộc tính nào dùng để căn chỉnh các phần tử flex con dọc theo trục chính (main axis)?",
                            options: [
                                "align-items",
                                "justify-content",
                                "align-content",
                                "flex-flow"
                            ],
                            answer: 1,
                            explanation: "justify-content dùng để căn chỉnh và phân bổ vị trí các item con dọc theo trục chính (thông thường là chiều ngang)."
                        },
                        {
                            question: "Làm thế nào để các phần tử flex con tự động xuống dòng khi chiều rộng của cha không đủ chứa?",
                            options: [
                                "flex-direction: row",
                                "flex-wrap: wrap",
                                "display: block",
                                "overflow: scroll"
                            ],
                            answer: 1,
                            explanation: "Thuộc tính flex-wrap: wrap cho phép các flex item con tự động rớt dòng xuống hàng mới khi hàng hiện tại không còn đủ không gian hiển thị."
                        }
                    ]
                },
                {
                    id: "les_grid",
                    title: "Thử thách 5: Bố cục Nâng cao với CSS Grid",
                    duration: "15 phút",
                    level: "Trung bình",
                    videoUrl: "https://www.youtube.com/embed/0kF6m4i5l-E",
                    summary: "CSS Grid Layout là hệ thống bố cục hai chiều (2D) mạnh mẽ, giúp bạn quản lý đồng thời cả hàng và cột, phân chia lưới trang web phức tạp một cách trực quan và khoa học.",
                    document: `
                        <h3>1. Tổng quan về CSS Grid</h3>
                        <p>Khác với Flexbox hoạt động theo mô hình 1 chiều (1D), CSS Grid Layout cho phép sắp xếp các thẻ theo cả hàng dọc và hàng ngang cùng lúc. Grid cực kỳ hữu ích để phân vùng các bố cục lớn của toàn trang web.</p>
                        <h3>2. Các thuộc tính cơ bản của Grid Container</h3>
                        <ul>
                            <li><strong>display: grid;</strong>: Chuyển đổi phần tử cha thành một Grid Container.</li>
                            <li><strong>grid-template-columns</strong>: Thiết lập số lượng và chiều rộng của các cột (ví dụ: <code>grid-template-columns: 200px 1fr;</code>).</li>
                            <li><strong>grid-template-rows</strong>: Thiết lập số lượng và chiều cao của các hàng.</li>
                            <li><strong>gap</strong>: Định nghĩa khoảng cách giữa các hàng và cột (viết tắt của <code>row-gap</code> và <code>column-gap</code>).</li>
                        </ul>
                        <h3>3. Đơn vị fr (Fractional Unit) & Hàm repeat()</h3>
                        <p>Đơn vị <code>fr</code> đại diện cho một phần không gian trống còn lại của Grid Container. Hàm <code>repeat()</code> giúp viết gọn các khai báo trùng lặp:</p>
                        <pre><code>.grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}</code></pre>
                        <p>Đoạn CSS trên tạo ra lưới gồm 3 cột bằng nhau, phân chia đều không gian tự động co giãn khi thay đổi kích thước màn hình.</p>
                    `,
                    quiz: [
                        {
                            question: "Thuộc tính nào dùng để kích hoạt bố cục dạng lưới Grid cho một container?",
                            options: [
                                "display: block;",
                                "display: grid;",
                                "display: flex;",
                                "grid-template-columns"
                            ],
                            answer: 1,
                            explanation: "display: grid; dùng để thiết lập Grid container, kích hoạt mô hình bố cục 2 chiều."
                        },
                        {
                            question: "Thuộc tính grid-template-columns: repeat(3, 1fr); thực hiện công việc gì?",
                            options: [
                                "Tạo ra 3 dòng có kích thước bằng nhau",
                                "Tạo ra 3 cột có kích thước bằng nhau, chia đều không gian còn lại",
                                "Gộp 3 cột lại làm một",
                                "Tạo khoảng trống 3px giữa các cột"
                            ],
                            answer: 1,
                            explanation: "Hàm repeat(3, 1fr) tạo ra 3 cột có chiều rộng tỷ lệ bằng nhau (1 fraction unit) và tự động co giãn theo container."
                        }
                    ]
                }
            ]
        },
        {
            id: "chap3",
            title: "Chương 3: JavaScript - Tạo Tương Tác",
            lessons: [
                {
                    id: "les5",
                    title: "Thử thách 6: Biến, Kiểu Dữ Liệu & DOM cơ bản",
                    duration: "20 phút",
                    level: "Trung bình",
                    videoUrl: "https://www.youtube.com/embed/NEgDBzHg9_c?start=300",
                    summary: "JavaScript biến trang web tĩnh thành các ứng dụng web động. Học cách khai báo biến bằng let/const, các phép toán số học cơ bản và làm quen với khái niệm DOM (Document Object Model).",
                    document: `
                        <h3>1. Khai báo biến trong JS hiện đại</h3>
                        <ul>
                            <li><code>const</code>: Dùng khai báo các hằng số không thể gán lại giá trị trong suốt chương trình.</li>
                            <li><code>let</code>: Dùng khai báo biến có thể thay đổi giá trị và có phạm vi khối (block-scoped).</li>
                            <li>Tránh sử dụng <code>var</code> do có cơ chế hoisting phức tạp gây ra nhiều lỗi logic tiềm ẩn.</li>
                        </ul>
                        <h3>2. DOM là gì?</h3>
                        <p>DOM (Document Object Model) biểu diễn toàn bộ trang web dưới dạng một cây đối tượng. JavaScript sử dụng DOM để đọc, sửa đổi cấu trúc HTML và phong cách CSS của trang web.</p>
                        <h3>3. Lấy phần tử HTML bằng JS</h3>
                        <pre><code>// Chọn phần tử bằng ID\nconst myTitle = document.getElementById('main-title');\n\n// Thay đổi nội dung chữ\nmyTitle.textContent = "Tiêu đề mới!";\n\n// Thay đổi phong cách CSS trực tiếp\nmyTitle.style.color = "blue";</code></pre>
                    `,
                    quiz: [
                        {
                            question: "Cách khai báo biến nào trong JS giúp ngăn chặn việc gán lại giá trị cho biến đó sau khi khởi tạo?",
                            options: [
                                "let",
                                "var",
                                "const",
                                "def"
                            ],
                            answer: 2,
                            explanation: "Khai báo const (constant) dùng để gán giá trị cố định không thể ghi đè/gán lại sau đó."
                        },
                        {
                            question: "Phương thức DOM nào giúp bạn chọn một phần tử HTML bằng giá trị ID của nó?",
                            options: [
                                "document.querySelectorClass()",
                                "document.getElementById()",
                                "document.getElementsByTagName()",
                                "document.fetchId()"
                            ],
                            answer: 1,
                            explanation: "document.getElementById('id_name') là phương thức chuẩn và hiệu năng nhất để truy xuất nhanh một thẻ HTML có ID tương ứng."
                        }
                    ]
                },
                {
                    id: "les6",
                    title: "Thử thách 7: Mảng và Đối tượng trong JavaScript",
                    duration: "15 phút",
                    level: "Trung bình",
                    videoUrl: "https://www.youtube.com/embed/NEgDBzHg9_c?start=1305",
                    summary: "Mảng (Array) giúp lưu trữ danh sách các phần tử có thứ tự. Đối tượng (Object) giúp biểu diễn các thực thể phức tạp có thuộc tính và phương thức cụ thể. Đây là hai kiểu dữ liệu phức hợp cốt lõi.",
                    document: `
                        <h3>1. Mảng (Array) trong JS</h3>
                        <p>Mảng cho phép lưu trữ nhiều giá trị trong một biến duy nhất. Các phần tử trong mảng được định vị bằng chỉ số (index) bắt đầu từ 0.</p>
                        <pre><code>const fruits = ["Táo", "Chuối", "Cam"];\nconsole.log(fruits[0]); // In ra: Táo\nfruits.push("Xoài"); // Thêm phần tử vào cuối mảng</code></pre>
                        <h3>2. Đối tượng (Object) trong JS</h3>
                        <p>Đối tượng dùng để lưu trữ dữ liệu dưới dạng cặp khóa - giá trị (key - value) nhằm mô tả chi tiết thuộc tính của một thực thể phức tạp.</p>
                        <pre><code>const student = {\n    name: "Đinh Vũ Thị Phương Anh",\n    age: 20,\n    major: "Công nghệ thông tin"\n};\nconsole.log(student.name); // In ra: Đinh Vũ Thị Phương Anh</code></pre>
                    `,
                    quiz: [
                        {
                            question: "Chỉ số (index) đầu tiên của một phần tử trong mảng JavaScript bắt đầu từ số mấy?",
                            options: [
                                "1",
                                "0",
                                "-1",
                                "Không xác định"
                            ],
                            answer: 1,
                            explanation: "Mảng trong JavaScript có chỉ số bắt đầu từ số 0 cho phần tử đầu tiên."
                        },
                        {
                            question: "Cách nào dùng để truy xuất thuộc tính 'name' của đối tượng 'user' trong JS?",
                            options: [
                                "user.name",
                                "user->name",
                                "user(name)",
                                "user#name"
                            ],
                            answer: 0,
                            explanation: "Chúng ta truy xuất thuộc tính của đối tượng bằng cú pháp dấu chấm (object.key). Ví dụ: user.name."
                        }
                    ]
                },
                {
                    id: "les7",
                    title: "Thử thách 8: Lắng nghe & Xử lý Sự kiện DOM",
                    duration: "18 phút",
                    level: "Trung bình",
                    videoUrl: "https://www.youtube.com/embed/NEgDBzHg9_c?start=2390",
                    summary: "Sự kiện (Event) là các hành động tương tác của người dùng như click chuột, submit form, gõ phím. Học cách sử dụng addEventListener để lắng nghe và kích hoạt code tương tác.",
                    document: `
                        <h3>1. Sự kiện trên Web là gì?</h3>
                        <p>Khi người dùng click chuột, di chuyển con trỏ, gửi form hoặc gõ bàn phím, trình duyệt phát ra tín hiệu Sự kiện (Event).</p>
                        <h3>2. Cách lắng nghe sự kiện bằng addEventListener</h3>
                        <p>Phương thức <code>addEventListener()</code> dùng để gán một bộ lắng nghe sự kiện lên phần tử HTML.</p>
                        <pre><code>const btn = document.getElementById('myBtn');\nbtn.addEventListener('click', function() {\n    alert('Nút bấm đã được click!');\n});</code></pre>
                        <h3>3. Các sự kiện phổ biến</h3>
                        <ul>
                            <li><code>click</code>: Khi nhấp chuột vào phần tử.</li>
                            <li><code>submit</code>: Khi gửi dữ liệu của một Form.</li>
                            <li><code>input</code>: Khi giá trị trong ô nhập liệu thay đổi.</li>
                        </ul>
                    `,
                    quiz: [
                        {
                            question: "Phương thức nào dùng để gán một bộ lắng nghe sự kiện lên một phần tử HTML trong JS?",
                            options: [
                                "listen()",
                                "addEventListener()",
                                "onClick()",
                                "attachEvent()"
                            ],
                            answer: 1,
                            explanation: "addEventListener() là phương thức chuẩn để gán một sự kiện (ví dụ: click, submit) lên phần tử DOM."
                        },
                        {
                            question: "Sự kiện nào kích hoạt ngay lập tức khi người dùng nhập dữ liệu vào một ô <input>?",
                            options: [
                                "click",
                                "submit",
                                "input",
                                "change"
                            ],
                            answer: 2,
                            explanation: "Sự kiện 'input' được kích hoạt ngay lập tức khi giá trị trong thẻ <input> thay đổi."
                        }
                    ]
                }
            ]
        }
    ]
};

// CHƯỚNG NGẠI VẬT ĐẦY ĐỦ (ASSESSMENT DATABASE)
const EXAMS_DB = [
    {
        id: "exam_mid",
        title: "Chướng ngại vật Giữa kì: Chiến binh HTML5 & CSS3",
        description: "Vượt qua thử thách tổng hợp để đánh giá kỹ năng xây dựng cấu trúc và làm đẹp giao diện web của bạn.",
        duration: 10, // 10 phút = 600s
        questions: [
            {
                question: "Thẻ HTML5 nào được sử dụng để hiển thị một cấu trúc bài viết độc lập (ví dụ bài báo, bài viết blog)?",
                options: [
                    "<section>",
                    "<aside>",
                    "<article>",
                    "<div>"
                ],
                answer: 2,
                explanation: "Thẻ <article> dùng để bao bọc một nội dung độc lập, tự chủ, có thể tái sử dụng hoặc phân phối độc lập (như bài viết tin tức, bài đăng diễn đàn)."
            },
            {
                question: "Thuộc tính HTML nào dùng để liên kết nhãn <label> với ô nhập liệu <input> tương ứng?",
                options: [
                    "for",
                    "id",
                    "name",
                    "type"
                ],
                answer: 0,
                explanation: "Thuộc tính 'for' trên <label> phải có giá trị trùng khớp với thuộc tính 'id' của ô <input> để khi người dùng click vào nhãn label, ô input sẽ tự động được focus."
            },
            {
                question: "Giá trị mặc định của thuộc tính 'position' trong CSS là gì?",
                options: [
                    "relative",
                    "absolute",
                    "static",
                    "fixed"
                ],
                answer: 2,
                explanation: "Mặc định tất cả các phần tử HTML đều có position: static. Khi ở trạng thái này, các thuộc tính top, right, bottom, left và z-index sẽ không có tác dụng."
            },
            {
                question: "Để chuyển đổi toàn bộ chữ cái của một đoạn văn thành chữ in hoa bằng CSS, thuộc tính nào được sử dụng?",
                options: [
                    "font-style: uppercase",
                    "text-transform: uppercase",
                    "text-decoration: capitalize",
                    "text-style: uppercase"
                ],
                answer: 1,
                explanation: "text-transform: uppercase biến đổi tất cả các chữ thường thành chữ in hoa mà không làm thay đổi nội dung chữ gốc trong HTML."
            },
            {
                question: "Trong Flexbox, để đảo ngược thứ tự hiển thị của các phần tử con theo chiều ngang, ta dùng giá trị nào?",
                options: [
                    "flex-direction: row-reverse",
                    "flex-direction: column-reverse",
                    "justify-content: flex-end",
                    "flex-wrap: wrap-reverse"
                ],
                answer: 0,
                explanation: "flex-direction: row-reverse sắp xếp các phần tử con theo trục nằm ngang nhưng đảo ngược thứ tự hiển thị từ phải qua trái."
            },
            {
                question: "CSS selector nào dùng để chọn các phần tử con ở vị trí chẵn trong danh sách?",
                options: [
                    ":nth-child(even)",
                    ":nth-child(odd)",
                    ":nth-child(2x)",
                    ":nth-child(double)"
                ],
                answer: 0,
                explanation: ":nth-child(even) (hoặc :nth-child(2n)) chọn tất cả các phần tử con ở thứ tự chẵn (2, 4, 6...)."
            },
            {
                question: "Đơn vị đo lường 'rem' trong CSS được tính toán dựa trên cái gì?",
                options: [
                    "Kích thước font chữ của phần tử cha trực tiếp",
                    "Kích thước font chữ của phần tử gốc html",
                    "Kích thước của màn hình thiết bị hiển thị",
                    "Kích thước cố định của trình duyệt"
                ],
                answer: 1,
                explanation: "rem (root em) là đơn vị tương đối tỉ lệ thuận với kích thước font chữ (font-size) được khai báo tại phần tử gốc <html>. Thường mặc định 1rem = 16px."
            },
            {
                question: "Thẻ HTML5 nào được sử dụng để chèn thanh điều hướng chính của trang web?",
                options: [
                    "<header>",
                    "<nav>",
                    "<section>",
                    "<aside>"
                ],
                answer: 1,
                explanation: "Thẻ <nav> (navigation) được sinh ra để chứa các liên kết điều hướng chính của website giúp công cụ tìm kiếm và trình đọc màn hình dễ nhận biết cấu trúc."
            },
            {
                question: "Thuộc tính CSS nào cho phép ẩn hoàn toàn một thẻ HTML khỏi trang web và giải phóng khoảng không gian mà nó chiếm?",
                options: [
                    "visibility: hidden",
                    "opacity: 0",
                    "display: none",
                    "filter: blur(100px)"
                ],
                answer: 2,
                explanation: "display: none ẩn hoàn toàn phần tử và xóa bỏ nó khỏi luồng dựng bố cục (không chiếm khoảng trống). Ngược lại, visibility: hidden ẩn đi nhưng vẫn giữ lại vùng không gian trống của thẻ."
            },
            {
                question: "Trong mô hình Grid CSS, thuộc tính nào thiết lập khoảng cách (khoảng trống) giữa các dòng và cột?",
                options: [
                    "grid-margin",
                    "grid-padding",
                    "gap",
                    "grid-spacing"
                ],
                answer: 2,
                explanation: "Thuộc tính gap (hoặc grid-gap) thiết lập khoảng trống giữa các hàng và các cột trong cả Flexbox và Grid CSS."
            }
        ]
    },
    {
        id: "exam_final",
        title: "Chướng ngại vật Cuối kì: Pháp sư Javascript DOM",
        description: "Vượt qua chướng ngại vật cuối cùng để chứng tỏ năng lực thiết kế web và điều khiển các sự kiện tương tác bằng Javascript.",
        duration: 15, // 15 phút = 900s
        questions: [
            {
                question: "Đâu là cách chính xác để lắng nghe sự kiện Click chuột lên một nút bấm có id='btn' trong JS?",
                options: [
                    "document.getElementById('btn').onclick(function(){...})",
                    "document.getElementById('btn').addEventListener('click', function(){...})",
                    "document.getElementById('btn').listen('click', function(){...})",
                    "document.getElementById('btn').on('click', function(){...})"
                ],
                answer: 1,
                explanation: "addEventListener('eventName', callback) là phương thức hiện đại và khuyên dùng nhất vì nó cho phép gán nhiều hàm xử lý sự kiện cho cùng một phần tử."
            },
            {
                question: "Kết quả của biểu thức `typeof null` trong JavaScript là gì?",
                options: [
                    "'null'",
                    "'undefined'",
                    "'object'",
                    "'number'"
                ],
                answer: 2,
                explanation: "Trong JS, typeof null trả về 'object'. Đây là một lỗi thiết kế lịch sử nổi tiếng của JavaScript nhưng đã được giữ lại để tránh làm hỏng các trang web cũ."
            },
            {
                question: "Cách nào dùng để tạo ra một đối tượng đại diện cho chuỗi JSON từ một chuỗi thô trong JS?",
                options: [
                    "JSON.stringify()",
                    "JSON.parse()",
                    "JSON.toObject()",
                    "JSON.convert()"
                ],
                answer: 1,
                explanation: "JSON.parse(jsonString) phân tích một chuỗi dạng JSON thô thành một đối tượng JS. Ngược lại, JSON.stringify(object) chuyển đối tượng JS thành chuỗi JSON."
            },
            {
                question: "Để lưu trữ một khóa-giá trị vào bộ nhớ localStorage của trình duyệt, ta dùng hàm nào?",
                options: [
                    "localStorage.saveItem(key, value)",
                    "localStorage.setItem(key, value)",
                    "localStorage.addKey(key, value)",
                    "localStorage.write(key, value)"
                ],
                answer: 1,
                explanation: "localStorage.setItem(key, value) dùng để lưu dữ liệu. Lưu ý cả key và value truyền vào đều bắt buộc phải là dạng chuỗi."
            },
            {
                question: "Sự khác biệt lớn nhất giữa toán tử so sánh bằng == và === trong JS là gì?",
                options: [
                    "== so sánh giá trị lẫn kiểu dữ liệu, === chỉ so sánh giá trị",
                    "== chỉ so sánh giá trị, === so sánh cả giá trị và kiểu dữ liệu (so sánh nghiêm ngặt)",
                    "=== chỉ dùng cho chuỗi chữ, == dùng cho số",
                    "Không có sự khác biệt nào"
                ],
                answer: 1,
                explanation: "== thực hiện ép kiểu tự động trước khi so sánh giá trị. === kiểm tra nghiêm ngặt, chỉ trả về true nếu cả giá trị và kiểu dữ liệu đều giống nhau."
            },
            {
                question: "Làm thế nào để truy cập nội dung chữ bên trong một thẻ (bao gồm các thẻ con bên trong nó) bằng JS?",
                options: [
                    "element.textContent",
                    "element.innerHTML",
                    "element.innerText",
                    "Cả A và C đều đúng"
                ],
                answer: 3,
                explanation: "Cả textContent và innerText đều trả về nội dung chữ bên trong phần tử. textContent trả về toàn bộ text (kèm khoảng trắng và ẩn), innerText chỉ trả về text hiển thị trên giao diện."
            },
            {
                question: "Phương thức nào dùng để thêm một phần tử con vào vị trí cuối cùng bên trong một phần tử cha trong DOM?",
                options: [
                    "parent.addChild(child)",
                    "parent.appendChild(child)",
                    "parent.insertChild(child)",
                    "parent.push(child)"
                ],
                answer: 1,
                explanation: "appendChild(childNode) thêm một node con vào danh sách con cuối cùng của node cha được chỉ định."
            },
            {
                question: "Từ khóa 'this' trong một hàm xử lý sự kiện click của DOM trỏ tới đối tượng nào?",
                options: [
                    "Đối tượng window toàn cục",
                    "Chính phần tử HTML vừa kích hoạt sự kiện click",
                    "Tài liệu document",
                    "Không trỏ tới đối tượng nào (undefined)"
                ],
                answer: 1,
                explanation: "Trong các sự kiện DOM chuẩn, 'this' tham chiếu đến chính phần tử HTML (DOM Element) đã lắng nghe và kích hoạt sự kiện đó."
            },
            {
                question: "Làm thế nào để dừng việc gửi dữ liệu của một Form và tải lại trang khi submit trong JS?",
                options: [
                    "event.stopSubmit()",
                    "event.preventDefault()",
                    "event.stopPropagation()",
                    "return false"
                ],
                answer: 1,
                explanation: "event.preventDefault() ngăn chặn hành vi mặc định của sự kiện, đối với form hành vi mặc định là gửi request lên server và tải lại trang."
            },
            {
                question: "Kiểu dữ liệu nào sau đây KHÔNG PHẢI kiểu dữ liệu nguyên thủy (primitive data type) trong JS?",
                options: [
                    "String",
                    "Number",
                    "Array",
                    "Boolean"
                ],
                answer: 2,
                explanation: "Các kiểu dữ liệu nguyên thủy gồm: String, Number, Boolean, BigInt, Symbol, null, undefined. Còn Array (Mảng) bản chất là một Object (kiểu phức hợp)."
            },
            {
                question: "Trong CSS, thuộc tính nào định nghĩa thứ tự xếp chồng (lớp hiển thị trước/sau) của các phần tử đè lên nhau?",
                options: [
                    "z-index",
                    "layer-index",
                    "stack-order",
                    "display-order"
                ],
                answer: 0,
                explanation: "z-index thiết lập vị trí hiển thị dọc theo trục Z. Giá trị z-index lớn hơn sẽ hiển thị đè lên các phần tử có z-index nhỏ hơn."
            },
            {
                question: "Hàm `setInterval(fn, 1000)` thực hiện công việc gì?",
                options: [
                    "Chạy hàm fn sau đúng 1 giây rồi dừng",
                    "Chạy lặp đi lặp lại hàm fn sau mỗi khoảng thời gian 1 giây",
                    "Dừng chạy hàm fn sau 1 giây",
                    "Hoãn thực thi hàm fn trong 1 giây"
                ],
                answer: 1,
                explanation: "setInterval thiết lập chu kỳ gọi hàm lặp lại sau mỗi chu kỳ mili-giây chỉ định (1000ms = 1 giây). Để chạy một lần duy nhất ta dùng setTimeout."
            },
            {
                question: "Làm thế nào để tạo ra một bản sao chuỗi JSON từ một đối tượng trong JS để lưu vào LocalStorage?",
                options: [
                    "JSON.parse(obj)",
                    "JSON.stringify(obj)",
                    "obj.toJSON()",
                    "JSON.toString(obj)"
                ],
                answer: 1,
                explanation: "JSON.stringify() chuyển đổi đối tượng JavaScript thành một chuỗi văn bản định dạng JSON để lưu trữ hoặc truyền tải."
            },
            {
                question: "Cách khai báo biến nào sau đây có phạm vi khối (block scope - chỉ có hiệu lực bên trong cặp ngoặc nhọn {})?",
                options: [
                    "var",
                    "let và const",
                    "let và var",
                    "Cả 3 cách khai báo trên"
                ],
                answer: 1,
                explanation: "let và const được giới thiệu từ ES6 có phạm vi block-scope (chỉ tồn tại trong {} như if, for). var có phạm vi function-scope hoặc global-scope."
            },
            {
                question: "Hành vi nào xảy ra khi bạn click vào một thẻ liên kết có href='#'?",
                options: [
                    "Trang web tải lại từ đầu",
                    "Trang web tự động cuộn lên đầu trang",
                    "Trang web mở ra tab mới",
                    "Không xảy ra hành vi gì cả"
                ],
                answer: 1,
                explanation: "href='#' trỏ tới bookmark gốc của tài liệu, do đó hành vi mặc định là cuộn trang web lên phía trên cùng (top)."
            }
        ]
    }
];
