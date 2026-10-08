# Kiều Xuân Mạnh — Portfolio v1.3

Website portfolio tĩnh, song ngữ Việt–Anh, responsive. Dùng HTML, CSS, JavaScript thuần: không yêu cầu build, không có backend, không cần Lovable credits.

## Xem thử

Mở `index.html` trong trình duyệt để duyệt nội dung. Để kiểm tra mọi tính năng (nhất là PDF và font), nên chạy HTTP server:

```bash
cd Portfolio
python -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Tính năng

- Bố cục desktop/tablet/mobile; menu mobile, điều hướng anchor, thanh tiến trình cuộn.
- Chuyển đổi Việt–Anh không reload; tất cả nội dung chính, timeline, dự án và chứng nhận đều có bản dịch.
- Timeline có thể mở rộng đầy đủ; lọc dự án theo tình trạng thực hiện; xem chứng nhận bằng cửa sổ nổi và PDF gốc.
- Contact qua mailto, nút sao chép email có xử lý dự phòng.
- Không có analytics, cookie theo dõi, biểu mẫu thu thập dữ liệu hay tự động bật âm thanh.

## Triển khai

**GitHub Pages:** hướng dẫn cụ thể cho `kieumanh/Portfolio` nằm trong [`GITHUB_PAGES.md`](GITHUB_PAGES.md).

Upload toàn bộ thư mục này lên Cloudflare Pages (Direct Upload) hoặc deploy bằng GitHub + Pages. Đảm bảo giữ thư mục `assets/` và `documents/` nguyên cấu trúc. Website hiện được xuất bản trên GitHub Pages.

## Việc cần xác minh trước khi công khai

1. Ảnh đại diện được giữ nguyên từ portfolio tham chiếu và lưu nội bộ tại `assets/kieu-manh-portrait.jpg`; monogram KM vẫn là dự phòng khi ảnh lỗi.
2. Các mốc 2012, 2017, 2021, 2021–2022, 2023–2024, 01/2025 dựa trên portfolio tham chiếu do chính Mạnh cung cấp, chưa đối chiếu toàn bộ bằng giấy tờ độc lập. Mạnh nên đọc và xác nhận.
3. Chứng nhận AI for Impact: nguồn portfolio tham chiếu ghi tháng 06/2026, nhưng PDF không in ngày cấp. Bản hiển thị chỉ dùng năm 2026.
4. Học phần FPT Polytechnic là 'hoàn tất học phần', KHÔNG ghi 'tốt nghiệp cao đẳng'.
5. Bidicomed × Nẫu Ecovalley là đề xuất truyền thông, KHÔNG ghi nhận thành công việc thực hiện hay hợp đồng đã ký.
6. Hương Thiền Nature là dự án đang phát triển; các dịch vụ Eco-Retreat, Academy, Membership là định hướng chứ chưa xác nhận được mở bán/vận hành.
7. Các dự án cộng đồng chưa có số liệu người tham gia, kinh phí, tác động hoặc đánh giá bên thứ ba nên không dùng con số KPI.
8. Vì là website cá nhân công khai, chỉ hiển thị email và liên kết xã hội đã được công bố trong website tham chiếu; không tự đăng số điện thoại.

## Tài liệu nguồn

Xem `SOURCES.md`.

## GitHub Pages — repository thực tế

- Repository: https://github.com/kieumanh/Portfolio
- GitHub Pages URL (sau khi bật): https://kieumanh.github.io/Portfolio/
- Source: `Deploy from a branch`, `main`, `/(root)`.
- Dùng asset path tương đối để hỗ trợ deployment vào `/Portfolio/`.

## 1.2 — Nhạc nền và QA

- Nhạc `assets/hiro-background.mp3`: Hiro – Sight of Wonders từ file được cung cấp, MP3 128 kbps. Chỉ tải và phát sau khi bấm nút nhạc; luôn tắt khi tải lại trang.
- Nút về đầu trang xuất hiện khi vượt 20% khoảng cuộn khả dụng, hỗ trợ cuộn mượt và reduced motion.
- Nút nổi đổi màu theo khu vực tại vị trí nút; thu nhỏ trên tablet/mobile, vùng bấm ít nhất 44 px.
- Ba ảnh WebP được xuất từ đúng PDF gốc; đầy đủ PDF trong `documents/`.
- Bảng màu thiên nhiên sáng hơn, tăng độ tương phản chữ phụ; nội dung và timeline được giữ nguyên.
- Kết quả kiểm thử: xem `QA.md`.

## 1.3 — Kết nối và âm lượng

- Làm sáng lớp phủ và họa tiết nền hero; giữ nguyên SVG và chân dung.
- Thanh âm lượng 0–100%, ghi nhớ mức âm lượng trên thiết bị; thay đổi âm lượng không tự phát hoặc tải nhạc.
- Bổ sung dự án đã hoàn thiện Sổ nợ An Tâm với link ứng dụng, bằng tiếng Việt và tiếng Anh.
- Contact Form qua FormSubmit, gửi tới `kieumanh2211@gmail.com`. Có kiểm tra dữ liệu, honeypot, chống bấm/gửi lặp, timeout 20 giây và sao chép nội dung dự phòng.
- Khi FormSubmit yêu cầu kích hoạt, chủ hộp thư cần nhấn Activate Form trong email. Không coi việc dịch vụ tiếp nhận là bằng chứng thư đã vào inbox.
- Thông tin liên lạc được đối chiếu từ trang Bidicomed: 0388.000.680, Zalo, Facebook Zenblog và email.
