# Portfolio — QA ngày 08/10/2026

Bản triển khai: https://kieumanh.github.io/Portfolio/

Commit sửa chức năng: `88140038dc2a86d5f32b9d513f68c5871a93830d`.

## Phạm vi và bảo toàn dữ liệu

Chỉ cập nhật `kieumanh/Portfolio`, nhánh `main`. Đối chiếu tự động xác nhận toàn bộ dữ liệu song ngữ Việt/Anh, timeline, dự án và tên chứng nhận trong `translations` không đổi. Giữ chân dung, thương hiệu và bố cục hiện có; chuyển cùng ảnh chân dung sang asset nội bộ để giảm phụ thuộc hosting ngoài.

## Những lỗi đã sửa

- Ba ảnh chứng nhận và ba PDF được tham chiếu nhưng chưa có trong repository. Đã bổ sung đúng PDF gốc, xuất WebP từ từng PDF và sửa khung preview để hiển thị đủ chữ ký/QR.
- Nhạc trỏ tới tên file không tồn tại và cố autoplay khi mở trang. Đã dùng file được cung cấp, tối ưu 128 kbps; chỉ tải/phát khi bấm nút nhạc, luôn tắt khi tải lại trang.
- Thanh tiến trình có hai handler; trạng thái cuộn cần cập nhật khi chiều cao trang thay đổi. Đã hợp nhất, dùng requestAnimationFrame, passive listeners và ResizeObserver.
- Nút nổi được chỉnh màu theo khu vực ngay dưới vị trí thực tế của từng nút, thu nhỏ trên tablet/mobile, giữ vùng bấm tối thiểu 44 px.
- Sáng hơn tông xanh nền bằng phối khoảng 12% trắng, giữ phong cách thiên nhiên. Chỉnh độ tương phản các chữ phụ khi làm nền sáng hơn.
- Bổ sung đóng menu bằng Escape, click ngoài menu hoặc chuyển sang desktop; dialog có tên truy cập gắn với tiêu đề; nút nhạc có thông báo trạng thái.

## Kết quả kiểm thử

| Kiểm tra | Môi trường | Kết quả |
|---|---|---|
| Responsive, không tràn ngang | Chromium: 1440, 1024, 768, 390, 320 px | Đạt |
| Việt/Anh; timeline 6/8 mốc; bộ lọc dự án | Năm kích thước trên, bản local cùng mã nguồn triển khai | Đạt |
| Menu tablet/mobile và Escape | 768, 390, 320 px | Đạt |
| Back to Top ẩn ở 19%, hiện ở 21%, trở về đầu trang | Năm kích thước trên | Đạt |
| Nhạc không tự phát khi tải trang hoặc đổi ngôn ngữ; bật/tắt bằng nút | Năm kích thước trên | Đạt |
| Ba ảnh, ba hộp xem chứng nhận, đóng bằng Escape | Năm kích thước trên | Đạt |
| JavaScript syntax, lỗi runtime, tài nguyên lỗi và ảnh hỏng | Bản local, năm kích thước | Không phát hiện lỗi |
| WCAG 2 A/AA và 2.1 AA bằng axe-core | Local: desktop 1440 và mobile 390 px | 0 vi phạm tự động được phát hiện |
| Bản 1.2.0; ảnh, dialog; phát/tắt nhạc; cuộn mượt về đầu trang | Trình duyệt Chrome trực tiếp trên GitHub Pages | Đạt |
| Ba WebP, ba PDF và MP3 | Tải trực tiếp từ GitHub Pages | HTTP 200, toàn bộ SHA-256 khớp file đã kiểm tra |
| HTML/CSS/JS, chân dung, favicon, sitemap, robots | GitHub Pages | HTTP 200, nội dung khớp bản triển khai |

Nút Back to Top dùng tỷ lệ `scrollY / (scrollHeight - innerHeight)` và xuất hiện khi vượt 20% khoảng cuộn khả dụng. `prefers-reduced-motion` bỏ cuộn/hiệu ứng động; keyboard focus trở về liên kết thương hiệu sau khi bấm nút.

## Tải trang

MP3 giảm từ 6.376.209 xuống 2.547.501 byte (khoảng 60%); ba WebP lần lượt 66.238, 88.424 và 87.394 byte. MP3 dùng `preload="none"`, PDF chỉ tải khi mở liên kết, WebP dùng lazy loading. Kiểm thử xác nhận chưa có request MP3/PDF khi mới mở trang. Website vẫn dùng HTML/CSS/JavaScript thuần, không thêm framework hay thư viện chạy trên trang.

Thời gian load ở máy kiểm thử local sau sửa: khoảng 129–328 ms trong lượt kiểm tra gần nhất. Đây là phép đo local, không phải thời gian thực tế của mọi người dùng hoặc điểm Lighthouse. Không công bố điểm Core Web Vitals khi chưa đo bằng dữ liệu người dùng.

## Giới hạn phép kiểm tra

Responsive và axe-core được chạy trên bản local có cùng cây mã nguồn đã triển khai; smoke test trực tiếp GitHub Pages thực hiện trên Chrome desktop. Chưa kiểm tra thiết bị iOS/Android vật lý hoặc Safari/Firefox. Kết quả axe tự động không thay thế đánh giá khả năng truy cập thủ công toàn diện. Liên kết tới các dự án/mạng xã hội bên ngoài được giữ nguyên; báo cáo đường dẫn HTTP ở trên áp dụng cho tài nguyên của Portfolio.
