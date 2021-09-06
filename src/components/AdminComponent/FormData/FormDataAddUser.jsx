import React from "react";
import { Form, Input, Radio } from "antd";
import { useFormik } from "formik";
function FormDataAddUser(props) {
  const { handleGetUser } = props;
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP11",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
  });

  handleGetUser(formik.values);
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
        <Form.Item
          label="Tài Khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Tài khoản người dùng không được bỏ trống!",
              whitespace: true,
            },
          ]}
          place
        >
          <Input
            placeholder="Nhập tài khoản người dùng..."
            name="taiKhoan"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Họ Tên"
          name="hoTen"
          rules={[
            {
              required: true,
              message: "Họ tên người dùng không được bỏ trống!",
              whitespace: true,
            },
          ]}
        >
          <Input
            placeholder="Nhập họ tên người dùng..."
            name="hoTen"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          name="matKhau"
          label="Mật Khẩu"
          rules={[
            {
              required: true,
              message: "Mật Khẩu người dùng không được bỏ trống!",
              whitespace: true,
            },
          ]}
        >
          <Input.Password
            placeholder="Nhập mật khẩu người dùng..."
            name="matKhau"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "E-mail! không dúng định dạng",
            },
            {
              required: true,
              message: "E-mail! không được bỏ trống!",
            },
          ]}
        >
          <Input
            name="email"
            placeholder="Nhập email người dùng..."
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item
          name="soDt"
          label="Số Điện Thoại"
          rules={[
            {
              required: true,
              message: "Số Điện thoại không được bỏ trống!",
              whitespace: true,
            },
          ]}
        >
          <Input
            name="soDt"
            placeholder="Nhập số điện thoại người dùng..."
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          name="maLoaiNguoiDung"
          label="Mã Loại Người Dùng"
          rules={[
            {
              required: true,
              message: "Please pick an item!",
            },
          ]}
        >
          <Radio.Group name="maLoaiNguoiDung">
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

export default FormDataAddUser;
