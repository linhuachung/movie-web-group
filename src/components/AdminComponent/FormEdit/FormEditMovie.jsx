import React, { useState, memo } from "react";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useSelector } from "react-redux";

function FormEditMovie(props) {
  const { DataMovieEdit } = props;
  const [image, setImage] = useState("");
  const movie = useSelector((state) => state.AdminQuanLyPhimReducer.movieEdit);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: movie.maPhim,
      tenPhim: movie.tenPhim,
      biDanh: movie.biDanh,
      trailer: movie.trailer,
      hinhAnh: {},
      moTa: movie.moTa,
      maNhom: "GP11",
      ngayKhoiChieu: movie.ngayKhoiChieu,
      danhGia: movie.danhGia,
      hot: movie.hot,
      dangChieu: movie.dangChieu,
      sapChieu: movie.sapChieu,
    },
  });

  const handleDateChange = (value) => {
    let ngayKhoiChieu = moment(value);
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

  DataMovieEdit(formik.values);
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
        <Form.Item label="Mã Phim">
          <Input
            name="maPhim"
            placeholder="Nhập mã phim..."
            onChange={formik.handleChange}
            value={formik.values.maPhim}
            disabled
          />
        </Form.Item>
        <Form.Item label="Tên Phim">
          <Input
            name="tenPhim"
            placeholder="Nhập tên phim..."
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Bí Danh">
          <Input
            name="biDanh"
            placeholder="Nhập bí danh phim..."
            onChange={formik.handleChange}
            value={formik.values.biDanh}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            placeholder="Đường dẫn trailer phim..."
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô Tả">
          <Input
            name="moTa"
            placeholder="Nhập mô tả phim..."
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>

        <Form.Item label="Ngày Khởi Chiếu">
          <DatePicker
            // name="ngayKhoiChieu"
            placeholder="Chọn ngày khởi chiếu"
            style={{ width: 200 }}
            format={"DD/MM/YYYY"}
            onChange={handleDateChange}
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đánh Giá">
          <InputNumber
            name="danhGia"
            onChange={handleGetValue("danhGia")}
            min={1}
            max={10}
            defaultValue={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            name="hot"
            onChange={handleGetValue("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Đang Chiếu" valuePropName="checked">
          <Switch
            name="dangChieu"
            onChange={handleGetValue("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp Chiếu" valuePropName="checked">
          <Switch
            name="sapChieu"
            onChange={handleGetValue("sapChieu")}
            checked={formik.values.sapChieu}
          />
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
          <img
            src={image === "" ? movie.hinhAnh : image}
            alt={"sadas"}
            className="w-20"
          />
        </div>
      </Form>
    </div>
  );
}

export default memo(FormEditMovie);
