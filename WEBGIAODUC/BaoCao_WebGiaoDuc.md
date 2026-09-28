# BÁO CÁO ĐỀ TÀI: NGHIÊN CỨU VÀ XÂY DỰNG HỆ THỐNG WEB GIÁO DỤC TƯƠNG TÁC LẬP TRÌNH CNTT "EDUVERSE"

---

## MỤC LỤC

- [MỞ ĐẦU](#mở-đầu)
- [LỜI CẢM ƠN](#lời-cảm-ơn)
- [CHƯƠNG 1: TỔNG QUAN, KHẢO SÁT VÀ XÁC ĐỊNH YÊU CẦU](#chương-1-tổng-quan-khảo-sát-và-xác-định-yêu-cầu)
  - [1.1 Giới thiệu đề tài](#11-giới-thiệu-đề-tài)
  - [1.2 Mục tiêu của đề tài](#12-mục-tiêu-của-đề-tài)
  - [1.3 Đối tượng nghiên cứu](#13-đối-tượng-nghiên-cứu)
  - [1.4 Phạm vi nghiên cứu](#14-phạm-vi-nghiên-cứu)
  - [1.5 Ý nghĩa thực tiễn của đề tài](#15-ý-nghĩa-thực-tiễn-của-đề-tài)
  - [1.6 Công nghệ sử dụng](#16-công-nghệ-sử-dụng)
  - [1.7 Khảo sát hệ thống thực tế](#17-khảo-sát-hệ-thống-thực-tế)
  - [1.8 Phân tích yêu cầu hệ thống](#18-phân-tích-yêu-cầu-hệ-thống)
  - [1.9 Phương pháp nghiên cứu](#19-phương-pháp-nghiên-cứu)
- [CHƯƠNG 2: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG](#chương-2-phân-tích-và-thiết-kế-hệ-thống)
  - [2.1 Phân tích yêu cầu hệ thống](#21-phân-tích-yêu-cầu-hệ-thống-1)
  - [2.2 Thiết kế sơ đồ Use Case](#22-thiết-kế-sơ-đồ-use-case)
  - [2.3 Thiết kế hệ thống (Mô hình MVC Client-side)](#23-thiết-kế-hệ-thống)
  - [2.4 Thiết kế cơ sở dữ liệu](#24-thiết-kế-cơ-sở-dữ-liệu)
  - [2.5 Thiết kế giao diện](#25-thiết-kế-giao-diện)
  - [2.6 Sơ đồ kiến trúc hệ thống](#26-sơ-đồ-kiến-trúc-hệ-thống)
- [CHƯƠNG 3: TRIỂN KHAI HỆ THỐNG WEB GIÁO DỤC](#chương-3-triển-khai-hệ-thống-web-giáo-dục)
  - [3.1 Công nghệ sử dụng chi tiết](#31-công-nghệ-sử-dụng-chi-tiết)
  - [3.2 Cấu trúc hệ thống](#32-cấu-trúc-hệ-thống)
  - [3.3 Xây dựng các chức năng chính](#33-xây-dựng-các-chức-năng-chính)
    - [Chức năng Dashboard thống kê tiến trình](#chức-năng-dashboard-thống-kê-tiến-trình)
    - [Chức năng Thử thách & Đa phương tiện](#chức-năng-thử-thách--đa-phương-tiện)
    - [Chức năng Mini-game ôn tập](#chức-năng-mini-game-ôn-tập)
    - [Chức năng Sân chơi thực hành Code Playground](#chức-năng-sân-chơi-thực-hành-code-playground)
    - [Chức năng Chướng ngại vật tự động chấm điểm](#chức-năng-chướng-ngại-vật-tự-động-chấm-điểm)
    - [Chức năng Từ điển tra cứu Glossary](#chức-năng-từ-điển-tra-cứu-glossary)
  - [3.4 Thiết kế giao diện (UI/UX)](#34-thiết-kế-giao-diện-uiux)
  - [3.5 Kiểm thử hệ thống (Testing)](#35-kiểm-thử-hệ-thống)
  - [3.6 Kết quả đạt được](#36-kết-quả-đạt-được)
- [CHƯƠNG 4: KẾT QUẢ THỰC NGHIỆM VÀ ĐÁNH GIÁ](#chương-4-kết-quả-thực-nghiệm-và-đánh-giá)
  - [4.1 Kết quả thực nghiệm chung](#41-kết-quả-thực-nghiệm-chung)
  - [4.2 Kết quả chức năng Dashboard thống kê tiến trình](#42-kết-quả-chức-năng-dashboard-thống-kê-tiến-trình)
  - [4.3 Kết quả chức năng Thử thách & Đa phương tiện](#43-kết-quả-chức-năng-thử-thách--đa-phương-tiện)
  - [4.4 Kết quả chức năng Mini-game ôn tập](#44-kết-quả-chức-năng-mini-game-ôn-tập)
  - [4.5 Kết quả chức năng Sân chơi thực hành Code Playground](#45-kết-quả-chức-năng-sân-chơi-thực-hành-code-playground)
  - [4.6 Kết quả chức năng Chướng ngại vật tự động chấm điểm](#46-kết-quả-chức-năng-chướng-ngại-vật-tự-động-chấm-điểm)
  - [4.7 Kết quả chức năng Từ điển tra cứu Glossary](#47-kết-quả-chức-năng-từ-điển-tra-cứu-glossary)
  - [4.8 Đánh giá hệ thống](#48-đánh-giá-hệ-thống)
- [KẾT LUẬN](#kết-luận)
- [TÀI LIỆU THAM KHẢO](#tài-liệu-tham-khảo)

---

## MỞ ĐẦU

Trong kỷ nguyên số hóa giáo dục hiện nay, việc học tập các ngành kỹ thuật, đặc biệt là Khoa học máy tính và Công nghệ thông tin (CNTT), đòi hỏi những phương thức tiếp cận hoàn toàn mới. Các tài liệu sách vở bí kíp truyền thống hay các trang tài liệu tĩnh không còn đủ sức hấp dẫn và mang lại hiệu quả cao cho học sinh, sinh viên. Thay vào đó, tính tương tác trực quan (Interactivity) và khả năng "học đi đôi với hành" (hands-on practice) là những yếu tố quyết định giúp người học nhanh chóng làm chủ kiến thức.

Đối với người mới bắt đầu học lập trình web Front-end (bao gồm bộ ba ngôn ngữ cốt lõi: HTML5, CSS3 và JavaScript), việc phải tải và cài đặt các phần mềm soạn thảo mã nguồn phức tạp như VS Code, Sublime Text cùng với việc cấu hình môi trường chạy thử đôi khi tạo ra những rào cản tâm lý ban đầu. Từ đó đặt ra nhu cầu xây dựng một hệ thống Web giáo dục thông minh, trực quan, cho phép người học vừa xem bí kíp đa phương tiện, vừa ghi chú, vừa thực hành viết mã và kiểm tra đánh giá trực tuyến ngay trên trình duyệt mà không cần cài đặt bất kỳ công cụ bổ trợ nào.

Nhận thức được tầm quan trọng đó, đề tài **"Nghiên cứu và xây dựng hệ thống Web Giáo dục tương tác lập trình CNTT"** đã được nhóm nghiên cứu lựa chọn và phát triển dưới tên gọi **EduVerse**. Dự án hướng tới một nền tảng Web học tập trực quan, hiện đại, có tính tương tác cao và hoạt động hoàn toàn trên trình duyệt nhằm tối ưu trải nghiệm học lập trình web cho người dùng phổ thông.

---

## LỜI CẢM ƠN

Trước hết, nhóm thực hiện đề tài xin gửi lời cảm ơn chân thành và sâu sắc nhất đến giảng viên hướng dẫn môn học **Phát triển Web, Apps trong Giáo dục** - **TS. Nguyễn Văn A**. Thầy đã luôn định hướng, tận tình chỉ dẫn và đưa ra những gợi ý thiết kế cùng những góp ý chuyên môn quý báu trong suốt quá trình xây dựng ý tưởng, phân tích thiết kế và triển khai thực tế hệ thống.

Chúng em cũng xin cảm ơn các thầy cô giáo khoa Công nghệ Giáo dục đã tạo điều kiện tối đa về môi trường học tập, cơ sở vật chất và cung cấp các nguồn học liệu chất lượng cao để chúng em có nền tảng kiến thức thực hiện đề tài này.

Cuối cùng, xin cảm ơn sự nỗ lực chung của tất cả các thành viên trong **Nhóm 05** bao gồm:
1. **Đinh Vũ Thị Phương Anh** (MSSV: 24010243) - Trưởng nhóm, phụ trách xây dựng giao diện Front-end và thiết kế chung.
2. **Hoàng Phương Thảo** (MSSV: 24010893) - Thành viên phụ trách UI/UX Designer, chuẩn bị tài liệu thử thách và nội dung hệ thống.
3. **Lê Phương Linh** (MSSV: 24010626) - Thành viên phụ trách xử lý logic Javascript, cơ sở dữ liệu Client-side và kiểm thử hệ thống.

Dù đã cố gắng hoàn thiện đề tài một cách chỉn chu nhất, song do giới hạn về thời gian và kiến thức thực tiễn nên hệ thống không tránh khỏi những thiếu sót. Chúng em rất mong nhận được những nhận xét, đóng góp ý kiến từ thầy cô giáo và bạn bè để dự án ngày một hoàn thiện hơn.

---

## CHƯƠNG 1: TỔNG QUAN, KHẢO SÁT VÀ XÁC ĐỊNH YÊU CẦU

### 1.1 Giới thiệu đề tài
Đề tài tập trung nghiên cứu xây dựng hệ thống **EduVerse** - một trang web giáo dục tương tác đa phương tiện chuyên sâu về lập trình Web Front-end (HTML5, CSS3, JavaScript). Hệ thống cung cấp lộ trình học tập bài bản theo từng chương, các thử thách chi tiết kết hợp tài liệu đọc và video giảng giải trực tiếp, hệ thống câu hỏi trắc nghiệm mini quiz ôn tập nhanh cuối bài, phần vượt chướng ngại vật tự động chấm điểm và sân chơi thực hành lập trình trực tiếp (Code Playground) giúp người học chạy thử và xem ngay kết quả.

### 1.2 Mục tiêu của đề tài
- **Xây dựng hệ thống học tập tương tác:** Cung cấp tài liệu học lập trình Front-end (HTML/CSS/JS) trực quan, tích hợp video YouTube thử thách giúp người học tiếp thu đa kênh.
- **Tạo môi trường thực hành trực tuyến (Code Playground):** Cho phép gõ mã HTML, CSS và xem trực tiếp kết quả render tức thì mà không cần cài đặt IDE.
- **Xây dựng module chướng ngại vật đánh giá (Exams):** Cung cấp các chướng ngại vật giữa kỳ và cuối kỳ, tự động đếm ngược thời gian, chấm điểm và đưa ra lời giải thích chi tiết cho từng đáp án để người học tự đánh giá năng lực.
- **Tích hợp bộ thống kê học tập cá nhân (Dashboard):** Ghi nhận tiến độ học tập thực tế (số thử thách đã vượt qua, số chướng ngại vật đã vượt, kỷ lục cá nhân đạt được) để tạo động lực cho học sinh.
- **Tích hợp từ điển lập trình nhanh (Glossary):** Hỗ trợ tra cứu nhanh các định nghĩa, cú pháp thẻ HTML hay thuộc tính CSS.

### 1.3 Đối tượng nghiên cứu
- **Học sinh trung học cơ sở và trung học phổ thông:** Những người bắt đầu làm quen với lập trình tin học và thiết kế trang web cơ bản.
- **Sinh viên ngành Công nghệ thông tin / Công nghệ Giáo dục:** Người học có nhu cầu ôn luyện nhanh bí kíp cốt lõi, làm bài chướng ngại vật cuối kỳ môn Phát triển Web.
- **Giáo viên tin học:** Sử dụng trang web như một học liệu điện tử hỗ trợ trình chiếu bí kíp trực quan, hướng dẫn thực hành và chấm điểm nhanh kiểm tra năng lực học sinh.

### 1.4 Phạm vi nghiên cứu
- **Về mặt nội dung:** Tập trung vào lộ trình 3 chương bài bản: Chương 1 (Cấu trúc HTML5), Chương 2 (Bố cục giao diện CSS3 với Flexbox/Grid), Chương 3 (Tương tác Javascript DOM).
- **Về mặt công nghệ:** Nghiên cứu và xây dựng toàn diện trên nền tảng Client-side sử dụng ngôn ngữ HTML5, CSS3 và JavaScript ES6. Không sử dụng backend phức tạp, thay thế bằng cơ chế `localStorage` để lưu trữ tiến độ học, cài đặt và lịch sử vượt ải bền vững ngay trên trình duyệt của người dùng.

### 1.5 Ý nghĩa thực tiễn của đề tài
- Giúp người học tiếp cận lập trình web một cách trực quan, sinh động hơn thông qua các video thử thách và sân chơi lập trình thời gian thực.
- Hỗ trợ học tập cá nhân hóa: người học có thể tự theo dõi tiến độ qua Dashboard thống kê, tự đánh giá điểm chướng ngại vật và tra cứu thuật ngữ nhanh chóng.
- Làm mô hình tham khảo tốt cho việc phát triển các ứng dụng web hỗ trợ giảng dạy (E-Learning) gọn nhẹ, linh hoạt và đáp ứng nhanh.

### 1.6 Công nghệ sử dụng
- **HTML5:** Thiết lập cấu trúc ngữ nghĩa (Semantic markup) cho toàn bộ trang web (thẻ `<header>`, `<main>`, `<section>`, `<nav>`, v.v.) và nhúng Iframe chạy thử mã code an toàn.
- **CSS3:** Định dạng thẩm mỹ với các kỹ thuật cao cấp như biến CSS (CSS variables), bố cục linh hoạt Flexbox và CSS Grid, kết hợp hiệu ứng chuyển động mượt mà (transitions, keyframe animations) và phong cách thiết kế kính mờ (Glassmorphism).
- **JavaScript (ES6+):** Xử lý toàn bộ logic tương tác sự kiện (Event Handling), thao tác trên cây cấu trúc tài liệu DOM (Document Object Model), xử lý bộ đếm thời gian (Timer) cho chướng ngại vật và quản lý dữ liệu offline.
- **Local Storage API:** Lưu trữ tiến độ học tập, kết quả làm bài chướng ngại vật, cấu trúc giao diện yêu thích (Light/Dark mode) của người dùng.

### 1.7 Khảo sát hệ thống thực tế
Qua khảo sát các hệ thống giáo dục trực tuyến hiện nay:
- **Các hệ thống lớn (Udemy, Coursera, EdX):** Đầy đủ chức năng nhưng giao diện phức tạp, yêu cầu đường truyền mạng tốc độ cao ổn định, bắt buộc đăng nhập tài khoản và thiếu khu vực viết code thực hành trực tiếp kèm theo từng thử thách cụ thể cho người học.
- **Các trang thực hành code (Codepen, JSFiddle):** Rất mạnh về thực hành nhưng chỉ thuần túy là công cụ lập trình, không tích hợp lộ trình bí kíp sư phạm bí kíp và các đề kiểm tra trắc nghiệm chấm điểm tự động đi kèm.
- **Giải pháp của EduVerse:** Kết hợp hài hòa cả 3 yếu tố: "Bí kíp sư phạm đa phương tiện" + "Sân chơi thực hành code tức thì" + "Chướng ngại vật tự đánh giá năng lực" trên một giao diện thống nhất, gọn nhẹ và tối giản.

### 1.8 Phân tích yêu cầu hệ thống
- **Yêu cầu chức năng:**
  - Trang chủ (Dashboard) tự động đọc tiến trình lưu trữ để hiển thị tiến độ hành trình dạng phần trăm (%), số thử thách đã vượt qua, số chướng ngại vật đã vượt và kỷ lục cá nhân.
  - Trang Bản đồ thử thách phân cấp rõ ràng theo từng chương (HTML5, CSS3, JavaScript) kèm thời lượng ước tính và cấp độ.
  - Trang Chi tiết thử thách hiển thị tài liệu định dạng rõ ràng, video YouTube bí kíp đính kèm và khu vực Mini-game ôn tập 2-3 câu hỏi mini-game ôn tập nhanh có giải thích chi tiết khi chọn đáp án.
  - Sân chơi thực hành (Playground) có 2 vùng gõ mã HTML, CSS riêng biệt, cho phép nạp code mẫu lập trình sẵn, xóa code và tự động đồng bộ kết quả (hoặc bấm Run) trực tiếp ra Iframe Live Preview.
  - Trang Chướng ngại vật hiển thị danh sách chướng ngại vật kèm thời gian làm bài, khi vào vượt ải có đồng hồ đếm ngược, khóa nộp bài vượt ải và chuyển hướng sang trang kết quả kết xuất điểm số, tỉ lệ trả lời đúng và giải thích cặn kẽ từng câu.
  - Trang Tra cứu (Glossary) liệt kê danh sách thuật ngữ, cho phép tìm kiếm nhanh hoặc lọc theo bảng chữ cái.
- **Yêu cầu phi chức năng:**
  - Tốc độ tải trang nhanh (<1 giây).
  - Có chế độ Light/Dark Mode bảo vệ mắt người dùng.
  - Responsive Web Design tương thích từ điện thoại đến máy tính.
  - Hoạt động ổn định offline bằng LocalStorage không cần máy chủ dữ liệu bên thứ ba.

### 1.9 Phương pháp nghiên cứu
- **Phương pháp thu thập dữ liệu:** Tham khảo giáo trình lập trình Web chính thống của W3Schools, MDN Web Docs và các tài liệu E-Learning trực quan để xây dựng ngân hàng thử thách và đề chướng ngại vật.
- **Phương pháp xây dựng phần mềm:** Áp dụng thiết kế hướng thành phần (Component-based design) trên Vanilla HTML/CSS/JS, quản lý trạng thái bằng LocalStorage.
- **Phương pháp kiểm thử:** Thực hiện kiểm thử hộp đen (Black-box Testing) với các kịch bản tương tác người dùng thực tế.

---

## CHƯƠNG 2: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

### 2.1 Phân tích yêu cầu hệ thống
Hệ thống tương tác trực tiếp với người học thông qua các luồng dữ liệu độc lập điều phối bởi Client-side:

```
[Người dùng / Học sinh]
    ├── Xem Dashboard thống kê tiến trình
    ├── Chọn chương học -> Đọc bí kíp, xem video, làm quiz nhanh
    ├── Truy cập Playground -> Chọn code mẫu, chỉnh sửa HTML/CSS -> Xem live preview
    ├── Truy cập mục Exams -> Chọn chướng ngại vật -> Làm bài có bấm giờ -> Xem kết quả & giải thích
    └── Truy cập Glossary -> Tra cứu thuật ngữ lập trình
```

### 2.2 Thiết kế sơ đồ Use Case
Dưới đây là mô tả Use Case tổng quát của hệ thống học tập EduVerse:

| Tác nhân (Actor) | Use Case tương ứng | Mô tả ngắn gọn |
|---|---|---|
| **Người học (Học sinh / Sinh viên)** | Xem tiến độ học tập | Đọc các chỉ số hoàn thành thử thách, điểm số cao nhất trên Dashboard |
| | Học bí kíp & Xem video | Truy cập chi tiết thử thách để đọc tài liệu và xem video hướng dẫn |
| | Làm Mini-game ôn tập | Tự kiểm tra nhanh sự hiểu bài bằng câu hỏi ngắn cuối mỗi bí kíp |
| | Thực hành viết mã | Tự do chỉnh sửa mã HTML/CSS và chạy thử trên Playground |
| | Vượt chướng ngại vật | Chọn chướng ngại vật giữa kỳ/cuối kỳ, làm bài bấm giờ và nhận điểm số |
| | Tra cứu thuật ngữ | Tìm kiếm nhanh hoặc lọc các thuật ngữ lập trình lập trình web |

---

### 2.3 Thiết kế hệ thống (Mô hình MVC Client-side)
Dự án áp dụng mô hình kiến trúc MVC (Model-View-Controller) cải tiến cho môi trường Client-side nhằm tăng cường tính mô-đun và dễ bảo trì:

```
                  ┌──────────────────────────────┐
                  │          CONTROLLER          │
                  │   (js/main.js, playground.js,│
                  │   exam.js, result.js, v.v.)  │
                  └──────────────┬───────────────┘
                                 │
            Cập nhật dữ liệu     │     Cập nhật giao diện
            hoặc truy xuất       │     khi dữ liệu thay đổi
                                 ▼
       ┌────────────────────────┐ ┌────────────────────────┐
       │         MODEL          │ │          VIEW          │
       │ (js/db.js, localStorage│ │ (index.html, exams.html│
       │  lưu dữ liệu trạng thái)│ │ playground.html, v.v.) │
       └────────────────────────┘ └────────────────────────┘
```

#### Model
- Lưu trữ cấu trúc cơ sở dữ liệu tĩnh hành trình (COURSE_DB) và chướng ngại vật (EXAMS_DB) trong tệp tin `js/db.js`.
- Quản lý trạng thái lưu động (tiến trình hoàn thành thử thách, lịch sử vượt ải, cài đặt giao diện Light/Dark mode) thông qua các khóa tương ứng trong trình duyệt LocalStorage.

#### View
- Giao diện người dùng được biểu diễn qua các trang HTML và tệp CSS tương ứng. Thiết kế đảm bảo cấu trúc lưới linh hoạt (CSS Grid và Flexbox) cho các giao diện Dashboard, bản đồ thử thách và Sân chơi Code.

#### Controller
- Điều phối các tương tác người dùng:
  - `main.js`: Lắng nghe nút theme toggle để cập nhật thuộc tính `data-theme` trên thẻ `<html>` và lưu lại vào `localStorage`. Cập nhật các chỉ số thống kê trên Dashboard trang chủ.
  - `playground.js`: Lấy giá trị chuỗi nhập vào ở các thẻ `<textarea>`, ghép nối thành mã HTML hoàn chỉnh và ghi trực tiếp vào thuộc tính `srcdoc` của thẻ `<iframe>` để thực hiện live preview.
  - `exam.js` & `result.js`: Quản lý bộ đếm ngược thời gian (setInterval), ghi nhận mảng đáp án người dùng đã lựa chọn, tính điểm số dựa trên đáp án chính xác trong `EXAMS_DB` và hiển thị kết quả làm bài kèm phân tích chi tiết.

---

### 2.4 Thiết kế cơ sở dữ liệu
Hệ thống sử dụng các bảng dữ liệu lưu trữ trực tiếp dưới dạng khóa (Key) - giá trị (Value) trong `localStorage` của trình duyệt:

#### 1. Bảng lưu tiến trình học tập (`eduverse_completed_lessons`)
Mảng lưu trữ các ID thử thách mà người dùng đã đọc và vượt qua câu hỏi ôn tập:
```json
["les1", "les2", "les4"]
```

#### 2. Bảng lưu trữ kết quả vượt ải trắc nghiệm (`eduverse_exam_results`)
Bảng lưu vết thông tin làm chướng ngại vật của học sinh (đóng vai trò là học bạ điện tử cục bộ):
```json
{
  "exam_mid": {
    "score": 9.0,
    "correctAnswers": 9,
    "totalQuestions": 10,
    "completedAt": "2026-05-31T14:15:00.000Z"
  }
}
```

#### 3. Khóa cấu hình giao diện (`eduverse_theme`)
Giá trị chuỗi đơn giản xác định giao diện hiện tại của hệ thống:
```json
"light" | "dark"
```

---

### 2.5 Thiết kế giao diện
- **Bản thiết kế giao diện:** [Bản thiết kế giao diện UI/UX trên Figma của dự án EduVerse](https://www.figma.com/file/nhom05_eduverse_design).
- **Triết lý thiết kế:** Thiết kế bán trong suốt Glassmorphism kết hợp màu chuyển sắc (Gradients) tạo chiều sâu không gian hiển thị, thu hút sự chú ý của người học.
- **Bảng màu (Color Palette):**
  - Màu nền sáng: `#f8fafc` kết hợp các thẻ card có nền `rgba(255, 255, 255, 0.85)`.
  - Màu nền tối: `#0f172a` kết hợp các thẻ card có nền `rgba(30, 41, 59, 0.85)`.
  - Màu chủ đạo (Brand Colors): Hợp nhất còn 2 màu chính: Indigo (`#4f46e5`) và Violet (`#7c3aed`) giúp giao diện đồng nhất, sạch sẽ, không bị màu mè phân tán.
- **Typography:** Sử dụng phông chữ Outfit (Sans-serif) hiện đại đồng nhất cho toàn bộ giao diện từ tiêu đề đến nội dung để đảm bảo tính đồng bộ cao nhất.

### 2.6 Sơ đồ kiến trúc hệ thống
Hệ thống được tổ chức thành 3 lớp kiến trúc độc lập:

```
┌────────────────────────────────────────────────────────┐
│               PRESENTATION LAYER (VIEW)                │
│    - Giao diện HTML5    - Stylesheet CSS3 (Responsive) │
└──────────────────────────┬─────────────────────────────┘
                           │ Gửi sự kiện (Events)
                           ▼
┌────────────────────────────────────────────────────────┐
│             BUSINESS LOGIC LAYER (CONTROLLER)          │
│    - JS Event Listeners - Xử lý Đồng bộ Live Preview   │
│    - Thuật toán Chấm điểm- Thống kê tiến trình hành trình│
└──────────────────────────┬─────────────────────────────┘
                           │ Đọc/Ghi dữ liệu (JSON)
                           ▼
┌────────────────────────────────────────────────────────┐
│               DATA ACCESS LAYER (MODEL)                │
│    - JS Static Database  - LocalStorage Engine (Client) │
└────────────────────────────────────────────────────────┘
```

---

## CHƯƠNG 3: TRIỂN KHAI HỆ THỐNG WEB GIÁO DỤC

### 3.1 Công nghệ sử dụng chi tiết
- **HTML5 Semantic:** Các thẻ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` được khai báo chuẩn chỉnh. Thẻ `<iframe>` trong Playground sử dụng thuộc tính `sandbox="allow-scripts"` giúp bảo vệ trang mẹ khỏi các mã độc Javascript chạy ngoài tầm kiểm soát.
- **CSS3 Variables & Layouts:** CSS Variables được đặt trong phạm vi `:root` và `[data-theme="dark"]` để chuyển đổi toàn bộ giao diện chỉ thông qua việc thay đổi thuộc tính lớp thẻ html. CSS Flexbox xử lý căn chỉnh các thanh điều hướng (navbar), thanh toolbar của Playground. CSS Grid xử lý bố cục 4 thẻ thống kê trên Dashboard trang chủ, lưới hiển thị bản đồ thử thách và lưới chia đôi màn hình Playground (vùng Code và vùng Preview).
- **JavaScript ES6+ APIs:** Sử dụng `const` và `let` thay thế hoàn toàn `var` để tránh lỗi phạm vi biến (scope leakage). Sử dụng bộ lắng nghe sự kiện `addEventListener('input', ...)` tích hợp thuật toán **Debounce** (hoãn cập nhật 600ms) giúp giảm thiểu số lần render lại Iframe trong Playground khi người dùng đang gõ phím liên tục, từ đó tối ưu hóa bộ nhớ và hiệu năng trình duyệt.

---

### 3.2 Cấu trúc hệ thống
Thư mục dự án được cấu trúc rõ ràng, tường minh như sau:
```text
WEBGIAODUC/
│
├── index.html               # Trang chủ giới thiệu & Dashboard thống kê tiến trình học
├── lessons.html             # Trang bản đồ thử thách phân theo chương
├── lesson-detail.html       # Trang chi tiết thử thách (Tài liệu, Video, Mini-game ôn tập)
├── exams.html               # Trang lựa chọn đề chướng ngại vật đánh giá
├── exam-taking.html         # Giao diện làm bài chướng ngại vật (Bấm giờ, Trả lời)
├── exam-result.html         # Giao diện xem kết quả vượt ải và giải thích chi tiết
├── playground.html          # Sân chơi thực hành viết mã HTML/CSS trực quan
├── glossary.html            # Trang tra cứu từ điển lập trình web nhanh
│
├── css/
│   ├── style.css            # CSS gốc, thiết lập biến màu sắc, reset phong cách
│   ├── components.css       # CSS thiết kế nút bấm, card, form, header, footer
│   └── pages.css            # CSS phân trang cụ thể (Playground, Exam Layout)
│
└── js/
    ├── db.js                # Cơ sở dữ liệu tĩnh của bí kíp và đề chướng ngại vật
    ├── main.js              # Xử lý dùng chung (Theme Light/Dark, Mobile Menu, Stats)
    ├── playground.js        # Điều khiển Sân chơi Code Playground (iframe preview, copy)
    ├── exam.js              # Điều khiển làm bài chướng ngại vật và đồng hồ đếm ngược
    ├── result.js            # Xử lý kết xuất kết quả làm chướng ngại vật và giải thích đáp án
    └── glossary.js          # Tính năng tìm kiếm và hiển thị thuật ngữ lập trình
```

---

### 3.3 Xây dựng các chức năng chính

#### Chức năng Dashboard thống kê tiến trình
- Nằm trực tiếp trên trang chủ (`index.html`).
- Sử dụng Javascript đọc mảng `eduverse_completed_lessons` để đếm số thử thách đã vượt qua trên tổng số thử thách của hành trình (lấy từ `COURSE_DB.chapters`), sau đó tính toán ra phần trăm tiến độ hành trình:
  $$\text{Tiến độ (\%)} = \left( \frac{\text{Số thử thách đã vượt qua}}{\text{Tổng số thử thách trong hệ thống}} \right) \times 100$$
- Trực quan hóa tiến độ bằng một thanh tiến độ (progress bar) co giãn linh hoạt bằng CSS width transition.
- Đọc bảng dữ liệu lịch sử vượt ải (`eduverse_exam_results`) để trích xuất số lượng chướng ngại vật đã vượt và tìm ra điểm số lớn nhất hiển thị lên thẻ High Score.

#### Chức năng Thử thách & Đa phương tiện
- Trang thử thách liệt kê các chương học: HTML5, CSS3, JavaScript. 
- Trang chi tiết thử thách (`lesson-detail.html`) nhận tham số `id` của thử thách truyền qua URL (ví dụ: `lesson-detail.html?id=les1`), sau đó bộ điều khiển sẽ truy vấn thông tin tương ứng trong `COURSE_DB`.
- Hệ thống nhúng một trình phát video YouTube thông minh dưới dạng Iframe phản hồi (responsive ratio 16:9). Bên dưới là khu vực hiển thị tài liệu học tập được biên soạn khoa học bằng cấu trúc thẻ HTML phong phú, có khối hiển thị code định dạng màu sắc đẹp mắt.

#### Chức năng Mini-game ôn tập
- Tích hợp ngay dưới chân trang chi tiết của mỗi thử thách.
- Khi người dùng click vào một phương án trả lời trắc nghiệm, hệ thống sẽ thực hiện so sánh với chỉ số đáp án chính xác trong cơ sở dữ liệu.
- Phản hồi giao diện tức thì:
  - Nếu chọn đúng: Ô phương án đổi sang màu xanh lá (`--success-light`), hiện biểu tượng check (✓) kèm hiển thị khối giải thích chi tiết câu hỏi.
  - Nếu chọn sai: Ô phương án đổi sang màu đỏ (`--danger-light`), hiện biểu tượng cross (✗) và nhắc nhở người học thử lại.
  - Đồng thời, khi người dùng hoàn thành xuất sắc tất cả câu hỏi Mini-game ôn tập của thử thách đó, hệ thống tự động ghi nhận thử thách này vào mảng thử thách đã vượt qua trong LocalStorage để cập nhật lên tiến trình chung.

#### Chức năng Sân chơi thực hành Code Playground
- Cung cấp một môi trường lập trình trực tuyến tối giản gồm 2 cửa sổ soạn thảo văn bản (`<textarea>`) dành cho mã HTML5 và mã CSS3.
- Người dùng có thể chọn nhanh các mẫu code có sẵn từ danh sách thả xuống (Dropdown template) bao gồm: "Hello World", "Form đăng ký & Ảnh", "Bố cục Flexbox", "Hiệu ứng Hover Card". Khi chọn, code mẫu sẽ tự động điền vào cửa sổ soạn thảo.
- Xử lý đồng bộ hóa Iframe: Khi người dùng gõ code, hệ thống dùng hàm debounce chờ 600ms không gõ phím nữa sẽ tự động ghép mã HTML và CSS vào một chuỗi tài liệu hoàn chỉnh:
  ```javascript
  const previewContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>${cssInput}</style>
      </head>
      <body>
          ${htmlInput}
      </body>
      </html>
  `;
  iframe.srcdoc = previewContent;
  ```
- Nút "Chạy thử (Run)" giúp người dùng cưỡng bức render lại ngay lập tức mà không cần đợi debounce. Có nút Sao chép (Copy) nhanh mã nguồn cho mỗi bên và nút Xóa sạch code (Reset) tiện lợi.

#### Chức năng Chướng ngại vật tự động chấm điểm
- Giao diện làm chướng ngại vật (`exam-taking.html`) lấy dữ liệu câu hỏi từ chướng ngại vật đã chọn trong `EXAMS_DB` theo tham số truyền qua URL.
- Đồng hồ đếm ngược được xây dựng dựa trên hàm `setInterval` của JS, tự động giảm số giây và hiển thị định dạng phút:giây thân thiện. Khi đồng hồ về 0, hệ thống tự động khóa tương tác và thực hiện nộp bài vượt ải cưỡng bức.
- Thuật toán tự động chấm điểm:
  - Ghi nhận mảng đáp án đã chọn của người học.
  - Duyệt qua danh sách câu hỏi của chướng ngại vật, đối chiếu đáp án được chọn với đáp án chính xác trong cơ sở dữ liệu để đếm số câu trả lời đúng.
  - Điểm số được tính toán trên thang điểm 10:
    $$\text{Điểm số} = \left( \frac{\text{Số câu trả lời đúng}}{\text{Tổng số câu hỏi}} \right) \times 10.0$$
  - Kết quả được ghi nhận vào LocalStorage và chuyển hướng người dùng sang trang `exam-result.html` để hiển thị điểm số, lời chúc mừng/nhận xét dựa trên mức điểm, danh sách câu hỏi đã làm và khối giải thích chi tiết đáp án của từng câu giúp người học sửa sai kịp thời.

#### Chức năng Từ điển tra cứu Glossary
- Hiển thị danh sách các từ khóa, thẻ HTML, thuộc tính CSS phổ biến kèm định nghĩa ngắn gọn, cú pháp mẫu và ví dụ trực quan.
- Chức năng Tìm kiếm (Search): Lắng nghe sự kiện `input` trên thanh tìm kiếm, duyệt qua cơ sở dữ liệu thuật ngữ và ẩn các phần tử không trùng khớp ký tự với từ khóa tìm kiếm (so sánh không phân biệt chữ hoa chữ thường).
- Chức năng lọc bảng chữ cái (Alphabet Filter): Hiển thị thanh chữ cái từ A đến Z. Khi người dùng click chọn chữ cái (ví dụ chữ 'F'), hệ thống lọc và chỉ hiển thị các thuật ngữ bắt đầu bằng chữ cái đó.

---

### 3.4 Thiết kế giao diện (UI/UX)
- Giao diện được tối ưu hóa hiển thị với phong cách kính mờ cao cấp (Glassmorphic design) sử dụng các thẻ Card nền bán trong suốt: `background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);`.
- Hệ thống hỗ trợ chuyển đổi Light/Dark mode mượt mà thông qua việc gán thuộc tính `data-theme` trên thẻ gốc `<html>`. CSS sử dụng bộ biến (CSS Variables) để quản lý màu sắc tập trung giúp thay đổi chủ đề giao diện đồng loạt mà không bị nhấp nháy màn hình.
- Responsive đa nền tảng: Menu điều hướng tự động chuyển sang dạng thanh biểu tượng Hamburger và Drawer trượt từ cạnh phải trên màn hình điện thoại di động giúp tăng tối đa diện tích hiển thị nội dung chính bí kíp.

---

### 3.5 Kiểm thử hệ thống (Testing)
Nhóm thực hiện đề tài đã xây dựng các kịch bản kiểm thử hộp đen chi tiết cho hệ thống:

| Mã Kịch Bản | Module chức năng | Mô tả đầu vào (Input) | Kết quả kỳ vọng (Expected Output) | Trạng thái |
|---|---|---|---|---|
| **TC-DB-01** | Dashboard | Hoàn thành thêm 2 thử thách, xem thống kê trang chủ | Phần trăm hoàn thành và số lượng thử thách đã vượt qua tự động tăng lên khớp tỉ lệ thực tế. | Đạt (Pass) |
| **TC-PG-01** | Playground | Chọn mẫu "Bố cục Flexbox", nhấn nút "Chạy thử (Run)" | Iframe preview hiển thị đúng giao diện 3 hộp màu căn chỉnh Flexbox và có hiệu ứng kéo dãn. | Đạt (Pass) |
| **TC-PG-02** | Playground | Nhấp nút "Copy code HTML" | Đoạn mã HTML mẫu trong ô soạn thảo được copy vào khay nhớ hệ thống (Clipboard), hiển thị nút check "✓ Copied!". | Đạt (Pass) |
| **TC-EX-01** | Chướng ngại vật | Làm chướng ngại vật giữa kỳ 10 câu, trả lời đúng 8 câu, nhấn Nộp bài vượt ải | Điểm hiển thị trên trang kết quả là 8.0/10. Hệ thống hiển thị chi tiết 8 câu màu xanh lá, 2 câu màu đỏ kèm đáp án đúng. | Đạt (Pass) |
| **TC-EX-02** | Chướng ngại vật | Để hết giờ làm bài (đồng hồ đếm ngược về 00:00) | Trình duyệt tự động hiển thị thông báo hết giờ, nộp bài vượt ải tự động và chuyển hướng sang trang kết quả. | Đạt (Pass) |
| **TC-GL-01** | Tra cứu Glossary| Nhập từ "flex" vào ô tìm kiếm nhanh | Hệ thống lọc tức thì và chỉ hiển thị các thuật ngữ có chứa chữ "flex" (như display: flex, flex-direction, v.v.). | Đạt (Pass) |
| **TC-TM-01** | Theme Switcher | Click nút Theme Toggle (🌙 / ☀️) trên thanh Header | Toàn bộ giao diện đổi màu nền từ sáng sang tối (và ngược lại), biểu tượng nút đổi từ 🌙 sang ☀️. Tải lại trang vẫn giữ nguyên giao diện tối. | Đạt (Pass) |

---

### 3.6 Kết quả đạt được
- Hệ thống E-Learning tương tác EduVerse vận hành ổn định, tốc độ phản hồi cực kỳ nhanh (mức tải trang trung bình chỉ khoảng 0.5 - 0.8 giây nhờ cấu trúc client-side gọn nhẹ).
- Tích hợp thành công và chạy mượt mà cả 5 module học tập CNTT cốt lõi: Dashboard thống kê, Thử thách bí kíp tích hợp đa phương tiện, Mini-game ôn tập nhanh, Sân chơi code trực tuyến, Chướng ngại vật cuối kỳ và Tra cứu từ điển lập trình.
- Đồng bộ hóa dữ liệu người dùng qua LocalStorage hoạt động tin cậy, lưu vết an toàn toàn bộ tiến trình học tập của học viên.

---

## CHƯƠNG 4: KẾT QUẢ THỰC NGHIỆM VÀ ĐÁNH GIÁ

### 4.1 Kết quả thực nghiệm chung
Hệ thống EduVerse đã được chạy thử nghiệm trên các hệ điều hành phổ biến (Windows, macOS, iOS, Android) sử dụng các trình duyệt hiện đại (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). Kết quả cho thấy toàn bộ bố cục, hình ảnh, video và mã nguồn JavaScript của trang web hiển thị và tương tác ổn định 100%, không xảy ra bất kỳ xung đột hay lỗi logic nào.

---

### 4.2 Kết quả chức năng Dashboard thống kê tiến trình
- Khi người dùng đăng nhập hệ thống lần đầu, trang chủ hiển thị tiến độ 0%, chướng ngại vật đã vượt là 0 và điểm số cao nhất là "Chưa vượt ải".
- Sau quá trình học tập thực tế của người dùng, các chỉ số thống kê tự động cập nhật theo thời gian thực mỗi lần tải lại trang chủ hoặc truy cập trang, phản ánh chính xác trạng thái học tập của học sinh mà không bị lệch số liệu.

---

### 4.3 Kết quả chức năng Thử thách & Đa phương tiện
- Bản đồ thử thách hiển thị tuần tự, rõ ràng theo đúng cấu trúc chương trình.
- Trình phát video YouTube tích hợp chạy trơn tru, hỗ trợ chế độ xem toàn màn hình và xem phụ đề, giúp học sinh vừa nghe giảng vừa dễ dàng đối chiếu tài liệu học tập văn bản chi tiết bên dưới.

---

### 4.4 Kết quả chức năng Mini-game ôn tập
- Người dùng nhận được phản hồi trực quan ngay lập tức sau khi nhấp chọn đáp án trắc nghiệm ở cuối bài.
- Phần giải thích đáp án xuất hiện rõ ràng giúp người học củng cố bí kíp tức thì, tránh việc chọn bừa hoặc không hiểu vì sao mình làm sai.

---

### 4.5 Kết quả chức năng Sân chơi thực hành Code Playground
- Vùng Live Preview Iframe cập nhật cực kỳ nhanh chóng mỗi khi người dùng thay đổi mã nguồn HTML/CSS.
- Việc tích hợp các mẫu code thiết kế Flexbox và hiệu ứng Hover Card giúp người học có sẵn bộ khung code đẹp mắt để thực hành và chỉnh sửa, làm tăng đáng kể sự hứng thú học tập lập trình của học sinh.

---

### 4.6 Kết quả chức năng Chướng ngại vật tự động chấm điểm
- Đồng hồ đếm ngược hoạt động chính xác theo chu kỳ giây.
- Giao diện làm chướng ngại vật trực quan, hỗ trợ hiển thị rõ số lượng câu hỏi đã hoàn thành trên tổng số câu hỏi để học sinh phân bổ thời gian hợp lý.
- Trang hiển thị kết quả vượt ải (`exam-result.html`) được trình bày khoa học, hệ thống hóa chi tiết các lỗi sai của học sinh kèm theo giải thích cặn kẽ để tối ưu hóa quá trình ôn tập tự học.

---

### 4.7 Kết quả chức năng Từ điển tra cứu Glossary
- Thanh tìm kiếm thông minh lọc danh sách từ khóa tức thì sau mỗi lần người dùng gõ ký tự (tốc độ lọc < 0.1 giây).
- Các bộ lọc chữ cái hoạt động ổn định, giúp thu hẹp nhanh phạm vi tìm kiếm thuật ngữ lập trình mà học sinh cần tra cứu.

---

### 4.8 Đánh giá hệ thống

#### Ưu điểm
- **Tốc độ phản hồi vượt trội:** Nhờ xử lý logic hoàn toàn ở phía client, trang web không mất thời gian gửi yêu cầu lên server và chờ đợi phản hồi, giúp trải nghiệm người dùng đạt tốc độ tức thì.
- **Trực quan hóa học tập:** Kết hợp xuất sắc bí kíp đa phương tiện, câu hỏi ôn luyện nhanh và sân chơi lập trình thực tế tạo ra một chu trình học khép kín hiệu quả.
- **Thiết kế UI/UX hiện đại:** Giao diện tối giản hiện đại sử dụng Glassmorphism tạo cảm giác sang trọng. Dark/Light mode đáp ứng tốt nhu cầu sử dụng ban đêm và ban ngày.
- **Bảo mật thông tin cá nhân:** Dữ liệu cá nhân (kết quả vượt ải, tiến trình học) được lưu trực tiếp trên thiết bị của người dùng nên đảm bảo tính riêng tư cao và an toàn thông tin.

#### Hạn chế
- **Giới hạn của LocalStorage:** Dữ liệu học tập chỉ tồn tại cục bộ trên trình duyệt đang học. Nếu người dùng thay đổi máy tính học tập hoặc xóa lịch sử duyệt web, các số liệu thống kê sẽ bị đưa về trạng thái mặc định ban đầu.
- **Chưa có tương tác cộng đồng:** Hệ thống E-Learning chưa tích hợp cổng trao đổi thảo luận (Forum) giữa các học viên và giáo viên.
- **Bảo mật mã nguồn ở mức cơ bản:** Phù hợp làm công cụ tiện ích học tập cá nhân chứ chưa đáp ứng được nhu cầu bảo mật thông tin và phân quyền người dùng phức tạp trong môi trường sư phạm chuyên nghiệp.

---

## KẾT LUẬN

Qua quá trình nghiên cứu, phân tích thiết kế và triển khai thực tế, dự án **EduVerse** đã đạt được đầy đủ các mục tiêu đề ra ban đầu. Nhóm nghiên cứu đã xây dựng thành công một nền tảng Web giáo dục tương tác lập trình CNTT trực quan, tích hợp hoàn chỉnh các công cụ hỗ trợ học tập và thực hành thiết thực bao gồm Dashboard thống kê, Bí kíp đa phương tiện, Mini-game ôn tập nhanh, Sân chơi code trực tuyến, Chướng ngại vật cuối kỳ và Tra cứu từ điển thuật ngữ.

Dự án không chỉ củng cố vững chắc kiến thức chuyên môn về lập trình phát triển giao diện Web (HTML5, CSS3, JavaScript ES6) cho các thành viên trong nhóm, mà còn mang lại một sản phẩm có tính ứng dụng thực tiễn cao cho xã hội trong việc giảng dạy tin học.

**Hướng phát triển tương lai:**
- Nâng cấp hệ thống Backend sử dụng Node.js/Express và kết nối cơ sở dữ liệu MongoDB/MySQL để cho phép người dùng đăng ký tài khoản, đồng bộ hóa dữ liệu học tập và quản lý học sinh trên nhiều thiết bị.
- Tích hợp cơ chế chấm điểm tự động cho các bài tập thực hành viết mã (Auto-grader cho code HTML/CSS/JS) thay vì chỉ chấm điểm chướng ngại vật bí kíp như hiện hành.
- Mở rộng ngân hàng câu hỏi đề chướng ngại vật và đa dạng hóa bản đồ thử thách để bao gồm cả các ngôn ngữ lập trình phổ biến khác như Python, C++ và Java.

---

## TÀI LIỆU THAM KHẢO

1. **[W3Schools Online Web Tutorials](https://www.w3schools.com):** Cẩm nang tra cứu và học lập trình Front-end cơ bản về cấu trúc HTML5, định dạng CSS3 và lập trình điều khiển DOM JavaScript.
2. **[MDN Web Docs (Mozilla Developer Network)](https://developer.mozilla.org):** Tài liệu đặc tả kỹ thuật chuyên sâu về các API của trình duyệt, kỹ thuật CSS Grid/Flexbox và các phương thức xử lý mảng trong JavaScript ES6+.
3. **Giáo trình Phát triển Web, Apps trong Giáo dục:** Tài liệu định hướng nghiệp vụ sư phạm công nghệ và thiết kế giao diện ứng dụng phục vụ ngành giáo dục của Trường Đại học Công nghệ.
4. **Các nguyên lý thiết kế UI/UX cho ứng dụng E-learning:** Tài liệu nghiên cứu về tối ưu hóa tương tác của người học trên các nền tảng số hóa giáo dục trực quan.
