# GitHub Pages — Hướng dẫn xuất bản Portfolio

## Repository và URL chính xác

- Repository: https://github.com/kieumanh/Portfolio
- Branch triển khai: `main`
- URL khi GitHub Pages được bật: https://kieumanh.github.io/Portfolio/
- **Lưu ý:** Repository `Portfolio` là project site (nằm dưới `/Portfolio/`), không phải user site tại gốc `kieumanh.github.io/`.

## Tạo repository và đăng mã nguồn

1. Repository đã được tạo tại https://github.com/kieumanh/Portfolio và sẽ được cập nhật bằng GitHub Plugin.
2. Mã nguồn nằm trực tiếp ở thư mục gốc nhánh `main`, không lồng thêm thư mục `Portfolio`.
3. Vào **Settings → Pages**, mục **Build and deployment**, chọn **Deploy from a branch**, branch `main`, folder `/(root)` và **Save**.
4. Đợi GitHub Pages triển khai, sau đó thử mở `https://kieumanh.github.io/Portfolio/`. Lần đầu xuất bản có thể mất vài phút.

## Các bước kiểm tra sau triển khai

- Trang chủ tải bình thường ở desktop/tablet/mobile.
- Chuyển Việt–Anh; menu mobile; lọc dự án; mở modal chứng nhận; mở 3 PDF gốc.
- Đường dẫn chuẩn và sitemap: `https://kieumanh.github.io/Portfolio/sitemap.xml`.
- Chân dung được lưu nội bộ tại `assets/kieu-manh-portrait.jpg`; chữ KM làm dự phòng khi ảnh lỗi.

## Lưu ý quyền riêng tư

Đây là repository và website **công khai**. Bất kỳ ai cũng có thể xem/tải 3 file PDF chứng nhận nằm trong `documents/`. Nếu không muốn công khai bản PDF gốc, xóa chúng khỏi repository trước khi tải và sửa các liên kết trên website.

## Cập nhật sau này

Chỉ cần thay file, commit lên nhánh `main`; GitHub Pages sẽ tự cập nhật. Website không yêu cầu backend, database, npm hoặc gói trả phí của Lovable.