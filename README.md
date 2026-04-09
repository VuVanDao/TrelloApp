# React + Vite - Frontend Trello Clone

Một frontend hiện đại được xây dựng bằng React và Vite cho ứng dụng clone Trello, hỗ trợ quản lý công việc theo phương pháp trực quan với bảng, cột và thẻ.

## 🚀 Tổng Quan

Dự án là giao diện người dùng cho ứng dụng quản lý công việc kiểu Trello, được xây dựng với React và Vite. Giao diện hỗ trợ tương tác kéo thả (drag-and-drop) để quản lý công việc một cách linh hoạt và trực quan.

## ✨ Tính Năng Nổi Bật

- **Giao diện thân thiện**: Thiết kế hiện đại, dễ sử dụng với trải nghiệm người dùng tối ưu
- **Tương tác kéo thả**: Hỗ trợ kéo thả thẻ giữa các cột với thư viện DnD Kit
- **Xử lý trạng thái**: Quản lý trạng thái ứng dụng với Redux Toolkit
- **Xác thực người dùng**: Đăng nhập, đăng ký và xác thực tài khoản
- **Quản lý bảng**: Tạo, chỉnh sửa và quản lý các bảng công việc
- **Quản lý thẻ**: Thêm, cập nhật và di chuyển thẻ giữa các cột
- **Tùy chỉnh giao diện**: Hỗ trợ nhiều theme khác nhau
- **Tải dữ liệu mượt mà**: Hiệu ứng loading và xử lý dữ liệu hiệu quả

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: React 18+
- **Build Tool**: Vite
- **Quản Lý Trạng Thái**: Redux Toolkit
- **Router**: React Router DOM
- **Drag & Drop**: DnD Kit
- **CSS**: Tailwind CSS hoặc CSS Modules
- **API**: Axios với interceptor
- **UI Components**: Custom components
- **Theme**: Hệ thống theme động

## 📁 Cấu Trúc Thư Mục

```
src/
├── apis/                    # Các API calls
│   ├── boardApi.js
│   └── index.js
├── Components/              # Các component UI
│   ├── BoardCard/
│   ├── Boards/
│   ├── ButtonAddCol/
│   ├── Column/
│   ├── Header/
│   ├── ListColumns/
│   ├── ListTrelloCards/
│   ├── LoadingPage/
│   ├── TrelloCard/
│   ├── BoxIconCover.jsx
│   └── LoadingProvider.jsx
├── CustomLibraries/         # Thư viện tùy chỉnh
│   └── MyDndKitSensor.js
├── Routers/                 # Cấu hình router
│   └── Index.jsx
├── page/                    # Các trang chính
│   ├── Auth/
│   ├── Boards/
│   ├── Settings/
│   ├── HomePage.jsx
│   ├── LoadingProvider.jsx
│   ├── ModalWatchVideo.jsx
│   └── Settings/
├── utils/                   # Các tiện ích
│   ├── constant.js
│   ├── InterceptorAxios.js
│   ├── LoadingManager.js
│   ├── sort.js
│   └── Redux/
├── data/                    # Dữ liệu mẫu
│   └── mock-data.js
├── App.jsx                  # Component chính
├── main.jsx                 # Entry point
├── Theme.js                 # Quản lý theme
└── index.css                # CSS toàn cục
```

## 🔧 Cài Đặt

1. **Sao chép kho lưu trữ**

```bash
git clone <đường_dẫn_kho_của_bạn>
cd react-trello-frontend
```

2. **Cài đặt thư viện phụ thuộc**

```bash
npm install
```

3. **Chạy ứng dụng ở chế độ phát triển**

```bash
npm run dev
```

4. **Xây dựng bản sản phẩm**

```bash
npm run build
```

## 🌐 Các Trang Chính

- Trang chủ: Giao diện dashboard chính
- Trang đăng nhập: Xác thực người dùng
- Trang bảng: Quản lý các bảng công việc
- Trang cài đặt: Hồ sơ người dùng và tùy chỉnh
- Trang xác thực: Xác nhận tài khoản

## 🎯 Tính Năng Chi Tiết

- Quản Lý Bảng
- Tạo bảng mới với tên và màu sắc
- Xem danh sách bảng đang làm việc
- Truy cập nhanh vào các bảng gần đây
- Quản Lý Công Việc
- Tạo thẻ công việc trong từng cột
- Kéo thả thẻ giữa các cột
- Cập nhật nội dung thẻ linh hoạt
  -Tổ chức công việc theo luồng công việc
  -Tùy Chỉnh Giao Diện
  -Hỗ trợ nhiều theme khác nhau
  -Giao diện responsive cho mọi thiết bị
- Hiệu ứng chuyển đổi mượt mà
- Xử Lý Tải Dữ Liệu
- Hiển thị trạng thái loading khi tải dữ liệu
- Xử lý lỗi mạng hiệu quả
- Cache dữ liệu tạm thời

## 🧪 Kiểm Thử

Dự án sử dụng các công cụ phát triển hiện đại để đảm bảo chất lượng code và hiệu suất ứng dụng.

## 🚀 Triển Khai

Dự án được cấu hình sẵn để triển khai trên Vercel thông qua tệp vercel.json.

## 🤝 Đóng Góp

Nếu bạn muốn đóng góp cho dự án, vui lòng:

## Fork dự án

- Tạo branch tính năng (git checkout -b feature/TenTinhNang)
- Commit thay đổi (git commit -m 'Them tinh nang ABC')
- Push lên branch (git push origin feature/TenTinhNang)
- Tạo Pull Request

## 👨‍💻 Tác Giả

Dự án này được phát triển nhằm mục đích học tập và thực hành các kỹ thuật phát triển frontend hiện đại với React và các công nghệ liên quan.

📝 Giấy Phép
Dự án này được phân phối miễn phí và không có giấy phép cụ thể.
