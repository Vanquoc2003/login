document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng việc gửi form mặc định

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra xem mật khẩu có trùng khớp không
    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    // Đăng ký thành công
    alert('Đăng ký thành công!\nTên người dùng: ' + username + '\nEmail: ' + email);
    
    // Chuyển hướng sang trang đăng nhập
    window.location.href = "login.html"; // Chuyển hướng đến trang login.html
});
