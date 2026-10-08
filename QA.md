# Cập nhật Portfolio v1.3 — 08/10/2026

## Thay đổi

Làm sáng nền đầu trang; âm lượng 0–100% có ghi nhớ; bổ sung Sổ nợ An Tâm trong nhóm dự án đã thực hiện; Contact Form cùng điện thoại/Zalo/Facebook/email lấy từ trang tham chiếu Bidicomed. Toàn bộ timeline và các dự án/chứng nhận trước đó được giữ nguyên.

## Kiểm tra trước triển khai

- Responsive 1440, 1024, 768, 390 và 320 px: không tràn ngang, không lỗi JavaScript, toàn bộ ảnh tải đúng.
- Âm lượng thay đổi đúng, ghi nhớ sau reload; mở bảng âm lượng không tải/phát nhạc; Escape đóng bảng và trả focus về nút.
- Dự án tất cả có 7 thẻ; nhóm đang phát triển vẫn có 1 thẻ; Sổ nợ An Tâm có link đúng ứng dụng và bản dịch Việt/Anh.
- Nút cuộn 19%/21%, bật/tắt nhạc, timeline, bộ lọc, menu và hộp chứng nhận: đạt.
- axe-core WCAG A/AA trên desktop 1440 và mobile 390 px: 0 vi phạm tự động phát hiện.
- Contact Form: bắt buộc họ tên/email/lời nhắn/đồng ý xử lý; Reply-To đúng email người gửi; xử lý thành công, phản hồi thiếu success, lỗi dịch vụ, lỗi mạng và yêu cầu kích hoạt; giữ bản nháp khi chưa xác nhận gửi; chặn bản gửi trùng trong 60 giây; trạng thái song ngữ. Các phản hồi email được mô phỏng trong kiểm thử, không gửi thư thử thật.

## Gửi email thực tế

Contact Form dùng `https://formsubmit.co/ajax/kieumanh2211@gmail.com`, cùng cơ chế với trang tham chiếu. FormSubmit có thể yêu cầu chủ hộp thư nhấn Activate Form trong email khi sử dụng lần đầu trên Portfolio. Báo cáo này không xác nhận đã nhận email thực tế. Website chỉ báo dịch vụ đã tiếp nhận khi phản hồi có success=true; không có auto retry khi kết quả gửi chưa rõ.

Điện thoại/Zalo 0388.000.680, Facebook `https://www.facebook.com/kieumanh.zenblog/` và email `kieumanh2211@gmail.com` được trích trực tiếp từ trang nguồn. Không tạo hoặc thay đổi backend, DNS hay repository khác.

---

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
