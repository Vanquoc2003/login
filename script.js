// Lắng nghe sự kiện click vào các nút chuyển đổi giữa form đăng nhập và đăng ký
document.getElementById("login-btn").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
});

document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
});

// Lắng nghe sự kiện gửi form đăng nhập
document.getElementById("login-form-element").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn không cho trang tải lại khi submit form

    // Lấy thông tin đăng nhập từ các input
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Thông tin đăng nhập mẫu (thực tế sẽ được kiểm tra qua backend)
    const validEmail = "user@example.com";
    const validPassword = "password123";

    // Kiểm tra thông tin đăng nhập
    if (email === validEmail && password === validPassword) {
        // Nếu đúng, chuyển hướng đến trang home.html
        alert("Đăng nhập thành công!");
        window.location.href = "https://www.facebook.com/"; // Thay thế "home.html" bằng trang bạn muốn chuyển đến
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
});
