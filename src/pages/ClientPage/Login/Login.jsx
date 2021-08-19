import React from "react";

function Login() {
  return (
    <div className="login_container">
      <form method="post">
        <div className="title_form text-center text-3xl">Đăng Nhập</div>
        <div className="form_content">
          <div className="form_item">
            <label>Tài Khoản</label>
            <input type="text" placeholder="Nhập tài khoản..." required />
          </div>
          <div className="form_item">
            <label>Mật Khẩu</label>
            <input type="password" placeholder="Nhập mật khẩu..." required />
          </div>
          <input type="submit" value="Đăng Nhập" />
        </div>
      </form>
    </div>
  );
}

export default Login;
