import React, { useState } from "react";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";

function FormDataAddMovie(props) {
  const { movieData } = props;
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: "GP11",
      ngayKhoiChieu: "",
      danhGia: 0,
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
  });

  const handleDateChange = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleGetValue = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeImage = (e) => {
    let img = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    formik.setFieldValue("hinhAnh", img);
  };

  movieData(formik.values);
  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        onScrollCapture={formik.handleSubmit}
      >
        <Form.Item
          label="Mã Phim"
          name="maPhim"
          rules={[
            {
              required: true,
              message: "Mã phim không được bỏ trống",
              whitespace: true,
            },
          ]}
        >
          <Input
            name="maPhim"
            placeholder="Nhập mã phim..."
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Tên Phim"
          name="tenPhim"
          rules={[
            {
              required: true,
              message: "Tên phim không được bỏ trống",
              whitespace: true,
            },
          ]}
        >
          <Input
            name="tenPhim"
            placeholder="Nhập tên phim..."
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Bí Danh"
          name="biDanh"
          rules={[
            {
              required: true,
              message: "Bí danh phim không được bỏ trống",
              whitespace: true,
            },
          ]}
        >
          <Input
            name="biDanh"
            placeholder="Nhập bí danh phim..."
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Trailer"
          name="trailer"
          rules={[
            {
              required: true,
              message: "Trailer phim không được bỏ trống",
              whitespace: true,
            },
          ]}
        >
          <Input
            name="trailer"
            placeholder="Đường dẫn trailer phim..."
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Mô Tả"
          name="moTa"
          rules={[
            {
              required: true,
              message: "Mô tả phim không được bỏ trống",
              whitespace: true,
            },
          ]}
        >
          <Input
            name="moTa"
            placeholder="Nhập mô tả phim..."
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Ngày Khởi Chiếu"
          name="ngayKhoiChieu"
          rules={[
            {
              required: true,
              message: "Ngày khởi chiếu không được bỏ trống",
            },
          ]}
        >
          <DatePicker
            // name="ngayKhoiChieu"
            placeholder="Chọn ngày khởi chiếu"
            style={{ width: 200 }}
            format={"DD/MM/YYYY"}
            onChange={handleDateChange}
          />
        </Form.Item>
        <Form.Item
          label="Đánh Giá"
          name="danhGia"
          rules={[
            {
              required: true,
              message: "Đánh giá không được bỏ trống",
            },
          ]}
        >
          <InputNumber
            name="danhGia"
            onChange={handleGetValue("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="hot" onChange={handleGetValue("hot")} />
        </Form.Item>
        <Form.Item label="Đang Chiếu" valuePropName="checked">
          <Switch name="dangChieu" onChange={handleGetValue("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch name="sapChieu" onChange={handleGetValue("sapChieu")} />
        </Form.Item>
        <div className="input_addImage ">
          <Form.Item
            label="Hình Ảnh"
            name="hinhAnh"
            rules={[
              {
                required: true,
                message: "Hình Ảnh phim không được bỏ trống",
                whitespace: true,
              },
            ]}
          >
            <input
              type="file"
              name="hinhAnh"
              onChange={handleChangeImage}
              accept="image/png , image/jpeg, image/gif"
            />
          </Form.Item>
          <img src={image} alt={"sadas"} className="w-20" />
        </div>
      </Form>
    </div>
  );
}

export default FormDataAddMovie;
