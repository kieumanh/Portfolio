# Kiều Xuân Mạnh — Portfolio v1.0

Website portfolio tĩnh, song ngữ Việt–Anh, responsive. Dùng HTML, CSS, JavaScript thuần: không yêu cầu build, không có backend, không cần Lovable credits.

## Xem thử

Mở `index.html` trong trình duyệt để duyệt nội dung. Để kiểm tra mọi tính năng (nhất là PDF và font), nên chạy HTTP server:

```bash
cd kieu-manh-portfolio
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

Upload toàn bộ thư mục này lên Cloudflare Pages (Direct Upload) hoặc deploy bằng GitHub + Pages. Đảm bảo giữ thư mục `assets/` và `documents/` nguyên cấu trúc. Chưa liên kết tên miền / chưa deploy production.

## Việc cần xác minh trước khi công khai

1. Ảnh đại diện đang tham chiếu đến đường dẫn công khai từ website đề xuất Bidicomed; nếu hosting cũ bị gỡ ảnh sẽ tự động chuyển sang monogram KM. Nên thay bằng ảnh Mạnh tự cấp quyền sử dụng và lưu nội bộ trong assets.
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