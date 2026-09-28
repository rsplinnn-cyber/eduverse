# HƯỚNG DẪN & CÂU LỆNH PROMPT TẠO SLIDE THUYẾT TRÌNH ĐỒ ÁN EDUVERSE

Tài liệu này chứa các câu lệnh (Prompt) và hướng dẫn chi tiết được thiết kế tối ưu để bạn sao chép và gửi vào các công cụ AI (như **ChatGPT**, **Claude**, hoặc **Canva**, **Gamma.app**) nhằm tự động tạo slide thuyết trình cho đồ án **EduVerse** (môn **Phát triển ứng dụng Web, apps trong Giáo dục**).

---

## 📌 PHƯƠNG ÁN 1: DÙNG CANVA (Công cụ thiết kế Slide phổ biến & Đẹp mắt nhất)

Canva cung cấp nhiều cách để tạo Slide tự động bằng AI hoặc tạo hàng loạt từ dữ liệu. Dưới đây là 3 cách tối ưu nhất kèm Prompt tương ứng:

### 💡 Cách 1.1: Sử dụng Canva Docs to Decks (Tối ưu nhất - Đầy đủ nội dung)
*Phương pháp này cho phép bạn viết một tài liệu có cấu trúc tiêu đề rõ ràng trong Canva Docs, sau đó tự động chuyển đổi thành slide chỉ với 1 click.*

#### Hướng dẫn thực hiện:
1. Copy toàn bộ đoạn **Prompt cho ChatGPT/Claude** ở bên dưới.
2. Dán vào ChatGPT hoặc Claude để nhận nội dung Markdown của 12 Slide.
3. Trên Canva, nhấn nút **Tạo thiết kế** (Create a design) -> Chọn **Tài liệu** (Canva Docs).
4. Dán toàn bộ nội dung Markdown nhận được vào tài liệu Canva Docs.
5. Nhấp vào nút **Chuyển đổi** (Convert) ở góc phải màn hình -> Chọn **Chuyển đổi thành bản thuyết trình** (Docs to Decks).
6. Chọn một mẫu thiết kế (Template) phù hợp và nhấn tạo. Bạn đã có một slide deck đầy đủ nội dung chi tiết!

#### 📋 Copy Prompt cho ChatGPT/Claude để tạo Canva Docs:
```text
Hãy đóng vai trò là một chuyên gia thiết kế nội dung slide thuyết trình. Tôi muốn chuẩn bị nội dung để đưa vào Canva Docs và sử dụng tính năng "Docs to Decks" (Chuyển văn bản thành slide thuyết trình) để tạo slide cho đồ án môn học "Phát triển ứng dụng Web, apps trong Giáo dục".

Thông tin chung của đồ án:
- Tên đề tài: Nghiên cứu và xây dựng hệ thống Web Giáo dục tương tác lập trình CNTT "EduVerse".
- Giảng viên hướng dẫn: TS. Nguyễn Văn A
- Nhóm thực hiện: Nhóm 05
- Thành viên nhóm:
  1. Đinh Vũ Thị Phương Anh (MSSV: 24010243) - Trưởng nhóm, phụ trách xây dựng giao diện Front-end và thiết kế chung.
  2. Hoàng Phương Thảo (MSSV: 24010893) - Thành viên phụ trách UI/UX Designer, chuẩn bị tài liệu thử thách và nội dung hệ thống.
  3. Lê Phương Linh (MSSV: 24010626) - Thành viên phụ trách xử lý logic Javascript, cơ sở dữ liệu Client-side và kiểm thử hệ thống.

Hãy viết nội dung tài liệu chuẩn định dạng Markdown để khi dán vào Canva Docs, nó có thể chuyển đổi thành 12 trang slide hoàn hảo. 
Quy tắc định dạng Canva Docs to Decks:
- Dùng thẻ H1 (#) cho tiêu đề mỗi Slide (mỗi thẻ H1 sẽ tự động tách thành 1 slide mới trong Canva).
- Dùng thẻ H2 (##) hoặc văn bản thường dạng danh sách (bullet points) cho nội dung chi tiết trong slide đó.
- Nội dung ngắn gọn, súc tích, trực quan, có kèm các emoji phù hợp ở đầu dòng để slide sinh động.

Cấu trúc chi tiết 12 slide cần tạo bao gồm:
Slide 1: Trang tiêu đề (Tên đề án, Môn học, GVHD, Nhóm và 3 thành viên trên).
Slide 2: Tính cấp thiết & Lý do chọn đề tài (Khó khăn của việc học Front-end truyền thống vs giải pháp EduVerse chạy trực tiếp trên trình duyệt).
Slide 3: Mục tiêu của đề tài (Học tương tác, Code Playground, Exams tự động chấm điểm, Dashboard thống kê, Từ điển Glossary).
Slide 4: Đối tượng & Phạm vi nghiên cứu (Học sinh/sinh viên/giáo viên; Lộ trình HTML5/CSS3/JS, Client-side LocalStorage).
Slide 5: Kiến trúc hệ thống (Mô hình MVC Client-side: Model - db.js/LocalStorage, View - HTML/CSS, Controller - JS event handlers).
Slide 6: Chức năng Dashboard & Học tập đa phương tiện (Tính % tiến độ học tập, Video YouTube 16:9, khối mã nguồn đẹp mắt).
Slide 7: Chức năng Mini-game ôn tập & Từ điển Glossary (Quiz cuối bài có giải thích đúng/sai lập tức; Glossary bộ lọc A-Z và tìm kiếm <0.1 giây).
Slide 8: Chức năng Sân chơi thực hành (Code Playground viết mã HTML/CSS, đồng bộ Iframe Live Preview sử dụng thuật toán Debounce 600ms, các code mẫu sẵn).
Slide 9: Chức năng Chướng ngại vật tự động chấm điểm (Exams đếm ngược setInterval, chấm điểm trên thang 10, trang kết quả giải thích cặn kẽ).
Slide 10: Thiết kế giao diện (UI/UX) & Kiểm thử (Glassmorphism, Light/Dark mode lưu LocalStorage; Black-box testing đạt 100%).
Slide 11: Đánh giá hệ thống (Ưu điểm: phản hồi nhanh <1s, bảo mật offline; Hạn chế: giới hạn LocalStorage, chưa có forum).
Slide 12: Kết luận & Hướng phát triển tương lai (Backend Node.js/Express, Auto-grader thực hành, thêm Python/C++).
```

---

### 💡 Cách 1.2: Sử dụng Canva Bulk Create (Tạo hàng loạt bằng dữ liệu CSV)
*Cách này cực kỳ hữu ích khi bạn đã tự thiết kế một slide mẫu (có các ô văn bản cho Tiêu đề, Nội dung chính) và muốn AI điền dữ liệu tự động cho 12 slide.*

#### Hướng dẫn thực hiện:
1. Gửi prompt dưới đây cho ChatGPT/Claude để nhận bảng dữ liệu cấu trúc Slide.
2. Sao chép bảng dữ liệu đó, dán vào Excel hoặc Google Sheets và lưu lại dưới dạng file `.csv` (hoặc copy trực tiếp dạng bảng trong Canva).
3. Trên Canva, mở slide thiết kế mẫu của bạn lên. Ở thanh menu bên trái, chọn **Ứng dụng** (Apps) -> Tìm kiếm **Tạo hàng loạt** (Bulk Create).
4. Chọn **Nhập dữ liệu thủ công** (Enter data manually) rồi dán bảng dữ liệu vào, hoặc chọn **Tải lên tệp CSV** (Upload CSV).
5. Nhấp chuột phải vào từng hộp văn bản trên slide thiết kế mẫu -> Chọn **Kết nối dữ liệu** (Connect data) với cột tương ứng (ví dụ: Title kết nối với cột Title, Content kết nối với cột Content).
6. Nhấn **Tiếp tục** (Continue) -> Chọn tất cả các dòng -> Nhấn **Tạo trang** (Generate pages). Canva sẽ tự động nhân bản ra 12 slides với đầy đủ nội dung.

#### 📋 Copy Prompt cho ChatGPT/Claude để tạo bảng CSV:
```text
Tôi muốn tạo slide trên Canva bằng tính năng "Bulk Create" (Tạo hàng loạt). Hãy tạo một bảng dữ liệu gồm 12 dòng tương ứng với 12 slide của đồ án EduVerse.
Bảng dữ liệu cần có các cột rõ ràng:
1. Slide_Number (Số thứ tự slide từ 1 đến 12)
2. Slide_Title (Tiêu đề slide)
3. Slide_Subtitle (Tiêu đề phụ hoặc ngữ cảnh của slide)
4. Bullet_1 (Ý chính 1)
5. Bullet_2 (Ý chính 2)
6. Bullet_3 (Ý chính 3)
7. Bullet_4 (Ý chính 4 - nếu có)
8. Visual_Idea (Gợi ý hình ảnh minh họa cho slide)

Thông tin chung đồ án:
- Đề tài: EduVerse - Hệ thống Web Giáo dục tương tác lập trình CNTT.
- GVHD: TS. Nguyễn Văn A.
- Thành viên nhóm 05: Đinh Vũ Thị Phương Anh (Trưởng nhóm, Front-end & thiết kế), Hoàng Phương Thảo (UI/UX Designer, nội dung), Lê Phương Linh (JS logic, database & kiểm thử).

Nội dung các dòng slide tương ứng với cấu trúc báo cáo đồ án EduVerse bao gồm: Trang tiêu đề (có tên 3 thành viên), Tính cấp thiết, Mục tiêu, Đối tượng & Phạm vi, Kiến trúc MVC Client-side, Dashboard & Lesson detail, Mini-game & Glossary, Code Playground (Debounce 600ms), Exams ( setInterval & chấm điểm), UI/UX Glassmorphism & Black-box testing, Đánh giá (Ưu/Nhược điểm), Kết luận & Tương lai.

Hãy viết kết quả dưới dạng bảng Markdown rõ ràng và kèm theo một khối mã CSV thô (Raw CSV) phân tách bằng dấu phẩy để tôi dễ dàng copy.
```

---

### 💡 Cách 1.3: Sử dụng Canva Magic Design (Tạo trực tiếp từ mô tả ngắn)
*Cách làm nhanh nhất nhưng nội dung sẽ khái quát hơn. Thích hợp để tạo khung slide và bố cục nhanh.*

#### Hướng dẫn thực hiện:
1. Tại trang chủ Canva, nhấp vào ô tìm kiếm và nhập nội dung prompt bên dưới (Canva Magic Design hỗ trợ cả tiếng Anh và tiếng Việt, nhưng tiếng Anh thường cho ra nhiều mẫu hiện đại hơn).
2. Canva sẽ hiển thị danh sách các mẫu bài thuyết trình được thiết kế riêng cho nội dung của bạn.
3. Chọn mẫu bạn thích nhất, nhấn **Áp dụng tất cả các trang** (Apply all pages) và tinh chỉnh lại thông tin thành viên.

#### 📋 Copy Prompt nhập vào ô tìm kiếm Canva Magic Design:
*   **Tiếng Việt**:
    ```text
    Bài thuyết trình đồ án CNTT EduVerse, môn Phát triển Web trong Giáo dục. Nhóm 05 gồm Đinh Vũ Thị Phương Anh, Hoàng Phương Thảo, Lê Phương Linh. GVHD TS. Nguyễn Văn A. Phong cách công nghệ tối giản, Glassmorphism, tone màu tím violet và xanh indigo. Gồm các phần: Lý do chọn đề tài, mục tiêu, kiến trúc MVC Client-side, chức năng Dashboard, Playground, Exams, Glossary, kiểm thử và hướng phát triển.
    ```
*   **Tiếng Anh (Khuyên dùng để AI Canva hiểu tốt nhất)**:
    ```text
    Tech style presentation for IT education project "EduVerse" (HTML/CSS/JS). Advisor: Dr. Nguyen Van A. Team 05: Phuong Anh (Front-end), Phuong Thao (UI/UX), Phuong Linh (JS & Testing). Modern dark mode theme with violet & indigo gradients, glassmorphism. Covers: Objectives, MVC architecture, Dashboard, Code Playground with Debounce, Quiz & Glossary, Exams with timer, testing, and roadmap.
    ```

---

## 📌 PHƯƠNG ÁN 2: DÙNG GAMMA.APP (Tạo Slide trực tiếp cực nhanh và đẹp mắt)
*Gamma.app là công cụ AI tạo slide thuyết trình trực tiếp từ văn bản với giao diện cực kỳ hiện đại và có sẵn các template đẹp.*

### Hướng dẫn sử dụng:
1. Truy cập vào [Gamma.app](https://gamma.app/) và đăng nhập.
2. Chọn **Create new with AI** (Tạo mới bằng AI) -> Chọn **Generate** -> Chọn **Presentation** (Bài thuyết trình).
3. Copy toàn bộ nội dung trong khung **Prompt** dưới đây và dán vào ô mô tả của Gamma.
4. Chọn số lượng trang slide mong muốn (Khuyên dùng: **12 slides**), chọn ngôn ngữ **Tiếng Việt**.
5. Nhấn **Generate** và chọn một giao diện (Theme) phù hợp (Khuyên dùng tone màu tối / Dark mode hoặc Glassmorphic chuyển sắc để đồng bộ với thiết kế EduVerse).

### 📋 Copy Prompt cho Gamma:
```text
Hãy tạo một bài thuyết trình chuyên nghiệp, hiện đại, phong cách công nghệ (sử dụng phối màu Indigo, Violet và hiệu ứng Glassmorphism) về đồ án "EduVerse". Đây là đồ án môn học "Phát triển ứng dụng Web, apps trong Giáo dục".

Thông tin chung:
- Tên đồ án: EduVerse - Hệ thống Web Giáo dục tương tác lập trình CNTT (Front-end HTML5, CSS3, JavaScript).
- Giảng viên hướng dẫn: TS. Nguyễn Văn A
- Nhóm thực hiện: Nhóm 05
- Thành viên nhóm:
  1. Đinh Vũ Thị Phương Anh (MSSV: 24010243) - Trưởng nhóm, phụ trách xây dựng giao diện Front-end và thiết kế chung.
  2. Hoàng Phương Thảo (MSSV: 24010893) - Thành viên phụ trách UI/UX Designer, chuẩn bị tài liệu thử thách và nội dung hệ thống.
  3. Lê Phương Linh (MSSV: 24010626) - Thành viên phụ trách xử lý logic Javascript, cơ sở dữ liệu Client-side và kiểm thử hệ thống.

Cấu trúc chi tiết bài thuyết trình gồm 12 Slide như sau:

Slide 1: Trang tiêu đề
- Tiêu đề chính: NGHIÊN CỨU VÀ XÂY DỰNG HỆ THỐNG WEB GIÁO DỤC TƯƠNG TÁC LẬP TRÌNH CNTT "EDUVERSE"
- Môn học: Phát triển Web, Apps trong Giáo dục
- Giảng viên hướng dẫn: TS. Nguyễn Văn A
- Nhóm thực hiện: Nhóm 05 (Đinh Vũ Thị Phương Anh, Hoàng Phương Thảo, Lê Phương Linh)

Slide 2: Tính cấp thiết & Lý do chọn đề tài
- Khó khăn của người mới học lập trình Front-end (HTML/CSS/JS): Sách vở truyền thống khô khan, thiếu tương tác; việc cài đặt các công cụ lập trình phức tạp tạo rào cản tâm lý ban đầu.
- Giải pháp: Xây dựng EduVerse hoạt động hoàn toàn trên trình duyệt, kết hợp lý thuyết đa phương tiện và thực hành tức thì.

Slide 3: Mục tiêu của đề tài
- Xây dựng hệ thống học tập tương tác đa kênh (lý thuyết + video).
- Tạo môi trường thực hành trực tuyến (Code Playground) không cần cài đặt.
- Module chướng ngại vật (Exams) tự động chấm điểm và giải thích chi tiết.
- Dashboard thống kê tiến trình cá nhân hóa nhằm tạo động lực.
- Từ điển lập trình (Glossary) tra cứu nhanh thuật ngữ.

Slide 4: Đối tượng & Phạm vi nghiên cứu
- Đối tượng: Học sinh THCS/THPT làm quen lập trình; Sinh viên CNTT/Công nghệ Giáo dục ôn tập; Giáo viên Tin học dùng làm học liệu điện tử hỗ trợ giảng dạy.
- Phạm vi nội dung: Lộ trình 3 chương (HTML5, Bố cục CSS3 Flexbox/Grid, Tương tác JavaScript DOM).
- Phạm vi công nghệ: Client-side hoàn toàn (HTML5, CSS3, JS ES6, LocalStorage), không cần máy chủ phức tạp.

Slide 5: Kiến trúc hệ thống (Mô hình MVC Client-side)
- Sơ đồ MVC:
  + Model: Dữ liệu tĩnh (db.js) & Dữ liệu động (LocalStorage: tiến trình học, lịch sử thi).
  + View: Giao diện HTML5 & Stylesheet CSS3 (Responsive, Glassmorphism).
  + Controller: Logic điều phối (main.js, playground.js, exam.js, glossary.js) xử lý sự kiện DOM và lưu trữ.

Slide 6: Chức năng Dashboard & Học tập đa phương tiện
- Dashboard: Tự động tính % tiến độ học tập từ LocalStorage, trực quan hóa bằng Progress Bar sinh động; hiển thị kỷ lục cá nhân (High Score).
- Chi tiết thử thách: Nhúng video YouTube tỷ lệ 16:9, đi kèm tài liệu lý thuyết cấu trúc rõ ràng và khối hiển thị mã nguồn đẹp mắt.

Slide 7: Chức năng Mini-game ôn tập & Từ điển Glossary
- Mini-game: Tích hợp cuối mỗi bài học. Phản hồi trực quan lập tức (Đúng: hiện màu xanh lá + giải thích chi tiết; Sai: hiện màu đỏ + yêu cầu thử lại). Hoàn thành quiz để ghi nhận tiến độ.
- Glossary: Hỗ trợ tìm kiếm nhanh (Search) không phân biệt hoa/thường và bộ lọc chữ cái (A-Z) hoạt động tức thì (<0.1 giây).

Slide 8: Chức năng Sân chơi thực hành (Code Playground)
- Môi trường viết mã trực tiếp: Gồm 2 cửa sổ soạn thảo riêng cho HTML và CSS.
- Đồng bộ Iframe Live Preview: Sử dụng thuật toán Debounce (chờ 600ms không gõ phím) giúp render mượt mà, tối ưu hiệu năng.
- Tính năng bổ trợ: Nút Run (chạy ngay), Reset (xóa sạch code), Copy nhanh code mẫu có sẵn (Hello World, Bố cục Flexbox, Hover Card).

Slide 9: Chức năng Chướng ngại vật tự động chấm điểm (Exams)
- Giao diện làm bài: Đồng hồ đếm ngược (setInterval), khóa tương tác và tự động nộp bài khi hết giờ.
- Thuật toán chấm điểm: Tính điểm trên thang 10 dựa vào tỷ lệ câu đúng.
- Trang kết quả (exam-result.html): Hiển thị chi tiết đáp án đúng/sai kèm lời giải thích cặn kẽ từng câu giúp người học tự sửa sai.

Slide 10: Thiết kế giao diện (UI/UX) & Kiểm thử
- Phong cách UI/UX: Thiết kế bán trong suốt Glassmorphism hiện đại. Chuyển đổi Light/Dark mode mượt mà bằng CSS Variables, ghi nhớ trạng thái qua LocalStorage.
- Responsive Design: Thân thiện với thiết bị di động (Hamburger menu & Sidebar trượt).
- Kiểm thử hộp đen (Black-box Testing): Đạt chuẩn 100% trên các kịch bản thực tế (Playground render mẫu Flexbox, đồng hồ đếm ngược tự động nộp bài, tìm kiếm Glossary...).

Slide 11: Đánh giá hệ thống (Ưu điểm & Hạn chế)
- Ưu điểm: Phản hồi siêu nhanh (<1 giây) vì chạy Client-side; giao diện trực quan, cuốn hút; bảo mật thông tin cá nhân cao (lưu offline).
- Hạn chế: Dữ liệu bị giới hạn bởi LocalStorage (mất khi đổi máy hoặc xóa cache); chưa có tính năng thảo luận cộng đồng; bảo mật mã nguồn mức cơ bản.

Slide 12: Kết luận & Hướng phát triển tương lai
- Kết luận: Dự án hoàn thành xuất sắc mục tiêu đề ra, tạo ra công cụ E-learning hữu ích và củng cố kỹ năng Front-end cho nhóm.
- Hướng phát triển:
  1. Nâng cấp Backend (Node.js/Express + MongoDB/MySQL) để đồng bộ tài khoản trực tuyến.
  2. Tích hợp bộ chấm điểm tự động thực hành code (Auto-grader cho HTML/CSS/JS).
  3. Mở rộng kho nội dung (Python, C++, Java).
```

---

## 📌 PHƯƠNG ÁN 3: DÙNG CHATGPT / CLAUDE TẠO MÃ VBA (Import thẳng vào PowerPoint)
*Phương án này giúp bạn tạo ra một file PowerPoint (.pptx) thực tế trên máy tính chỉ với vài thao tác sao chép mã code.*

### Hướng dẫn sử dụng:
1. Gửi câu lệnh dưới đây cho **ChatGPT** hoặc **Claude**.
2. Nhận lại một đoạn mã **VBA (Visual Basic for Applications)**.
3. Mở **PowerPoint** trên máy tính lên. Nhấn tổ hợp phím `Alt + F11` để mở cửa sổ VBA.
4. Chọn `Insert -> Module` rồi dán toàn bộ đoạn mã nhận được vào.
5. Nhấn nút **F5** hoặc biểu tượng **Run** (mũi tên xanh) để chạy. PowerPoint sẽ tự động sinh ra một slide deck đầy đủ nội dung theo mẫu!

### 📋 Copy Prompt cho ChatGPT / Claude:
```text
Tôi đang làm slide thuyết trình cho đồ án môn học "Phát triển ứng dụng Web, apps trong Giáo dục". Tên đề tài là: "Nghiên cứu và xây dựng hệ thống Web Giáo dục tương tác lập trình CNTT EduVerse".
Giảng viên hướng dẫn: TS. Nguyễn Văn A.
Thành viên thực hiện Nhóm 05:
- Đinh Vũ Thị Phương Anh (MSSV: 24010243) - Trưởng nhóm, phụ trách xây dựng giao diện Front-end và thiết kế chung.
- Hoàng Phương Thảo (MSSV: 24010893) - Thành viên phụ trách UI/UX Designer, chuẩn bị tài liệu thử thách và nội dung hệ thống.
- Lê Phương Linh (MSSV: 24010626) - Thành viên phụ trách xử lý logic Javascript, cơ sở dữ liệu Client-side và kiểm thử hệ thống.

Hãy viết một đoạn mã macro VBA PowerPoint hoàn chỉnh để tự động tạo ra 12 Slide thuyết trình về đề tài này.
Các slide cần có cấu trúc:
Slide 1: Tiêu đề, môn học, GVHD, thành viên nhóm.
Slide 2: Tính cấp thiết và lý do chọn đề tài (EduVerse).
Slide 3: Mục tiêu đề tài (Dashboard, Playground, Exams, Glossary).
Slide 4: Đối tượng và phạm vi nghiên cứu (HTML/CSS/JS, Client-side LocalStorage).
Slide 5: Kiến trúc hệ thống (Sơ đồ MVC Client-side).
Slide 6: Chức năng Dashboard & Học tập đa phương tiện.
Slide 7: Chức năng Mini-game ôn tập & Từ điển Glossary.
Slide 8: Chức năng Sân chơi thực hành (Code Playground với thuật toán Debounce).
Slide 9: Chướng ngại vật tự động chấm điểm (Exams với đếm ngược & giải thích chi tiết).
Slide 10: Thiết kế giao diện (UI/UX Glassmorphism, Dark/Light Mode) & Kiểm thử hộp đen.
Slide 11: Đánh giá hệ thống (Ưu điểm & Nhược điểm).
Slide 12: Kết luận và Hướng phát triển trong tương lai (Backend, Auto-grader).

Yêu cầu mã VBA:
- Thiết lập kích thước slide chuẩn 16:9.
- Sử dụng bảng màu hiện đại: Màu nền tối chủ đạo (Dark Blue/Navy) để làm nổi bật phong cách công nghệ, chữ màu trắng, các tiêu đề phụ có màu tím Violet hoặc xanh Indigo nổi bật.
- Căn chỉnh văn bản gọn gàng, chia cột hợp lý để không bị tràn màn hình.
- Viết code VBA sạch, không dùng các thư viện ngoài để tránh bị lỗi khi chạy.
```

---

## 📌 PHƯƠNG ÁN 4: DÙNG CHATGPT / CLAUDE TẠO SLIDE MARP (Dành cho Lập trình viên)
*Marp là một công cụ cực kỳ phổ biến đối với lập trình viên, cho phép viết slide trực tiếp bằng cú pháp Markdown và xuất ra PDF/PPTX chỉ bằng 1 click.*

### Hướng dẫn sử dụng:
1. Gửi prompt dưới đây vào **ChatGPT** hoặc **Claude** để nhận mã Markdown định dạng Marp.
2. Cài đặt tiện ích mở rộng **Marp for VS Code** (hoặc dùng phiên bản web [Marp Web](https://web.marp.app/)).
3. Dán mã nguồn vào file `.md` và xuất ra định dạng PowerPoint hoặc PDF.

### 📋 Copy Prompt cho ChatGPT / Claude:
```text
Hãy viết mã slide thuyết trình dạng Marp Markdown hoàn chỉnh cho đề tài đồ án EduVerse.
Sử dụng theme: 'gaia' hoặc 'default' với thiết lập dark mode (class: lead hoặc gaia dark).
Thông tin nhóm bao gồm:
- Môn học: Phát triển ứng dụng Web, apps trong Giáo dục
- Đề tài: EduVerse - Hệ thống Web Giáo dục tương tác lập trình CNTT
- Giảng viên hướng dẫn: TS. Nguyễn Văn A
- Nhóm 05: 
  1. Đinh Vũ Thị Phương Anh (MSSV: 24010243) - Trưởng nhóm, phụ trách Front-end & thiết kế chung.
  2. Hoàng Phương Thảo (MSSV: 24010893) - Phụ trách UI/UX Designer, nội dung.
  3. Lê Phương Linh (MSSV: 24010626) - Phụ trách logic JS, Client-side DB & kiểm thử.

Hãy chia nhỏ thông tin báo cáo thành 12 trang slide rõ ràng, có tiêu đề lớn, gạch đầu dòng ngắn gọn súc tích, định dạng code block cho phần lập trình, và sử dụng biểu tượng emoji phù hợp để slide thêm phần trực quan và sinh động.
```
