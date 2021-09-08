import { useFormik } from "formik";
import React, { memo } from "react";
import { Form, Input, Radio } from "antd";
import { useSelector } from "react-redux";

function FormEditUser(props) {
  const { handleGetUserEdit } = props;
  const user = useSelector(
    (state) => state.AdminQuanLyNguoiDungReducer.userEdit
  );
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      email: user.email,
      soDt: user.soDt,
      maNhom: "GP11",
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      hoTen: user.hoTen,
    },
  });
  handleGetUserEdit(formik.values);
  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item label="Tài Khoản">
          <Input
            placeholder="Nhập tài khoản người dùng..."
            name="taiKhoan"
            onChange={formik.handleChange}
            value={formik.values.taiKhoan}
            disabled
          />
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input
            placeholder="Nhập họ tên người dùng..."
            name="hoTen"
            onChange={formik.handleChange}
            value={formik.values.hoTen}
          />
        </Form.Item>
        <Form.Item label="Mật Khẩu">
          <Input.Password
            placeholder="Nhập mật khẩu người dùng..."
            name="matKhau"
            onChange={formik.handleChange}
            value={formik.values.matKhau}
          />
        </Form.Item>
        <Form.Item label="E-mail">
          <Input
            name="email"
            placeholder="Nhập email người dùng..."
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Item>

        <Form.Item label="Số Điện Thoại">
          <Input
            name="soDt"
            placeholder="Nhập số điện thoại người dùng..."
            onChange={formik.handleChange}
            value={formik.values.soDt}
          />
        </Form.Item>
        <Form.Item label="Mã Loại Người Dùng">
          <Radio.Group
            name="maLoaiNguoiDung"
            defaultValue={formik.values.maLoaiNguoiDung}
          >
            <Radio
              value="KhachHang"
              name="maLoaiNguoiDung"
              onChange={formik.handleChange}
            >
              Khách Hàng
            </Radio>
            <Radio
              value="QuanTri"
              name="maLoaiNguoiDung"
              onChange={formik.handleChange}
            >
              Quản Trị
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
}

export default memo(FormEditUser);
