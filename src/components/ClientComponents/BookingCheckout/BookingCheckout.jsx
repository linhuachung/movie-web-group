import React from "react";
import { useDispatch } from "react-redux";
import { BOOKING_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function BookingCheckout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const history = useHistory();
  const { listChair } = props;
  const { arr } = props;
  console.log("Danh sách vé đặt: ", arr);
  const dispatch = useDispatch();
  const handleBooking = () => {
    if (arr.danhSachVe.length !== 0) {
      if (user) {
        if (user.maLoaiNguoiDung === "KhachHang") {
          dispatch({
            type: BOOKING_SAGA_TYPE,
            data: arr,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Đặt vé không thành công",
            text: "Vui lòng đăng nhập bằng tài khoản người dùng để tiếp tục đặt vé",
            footer:
              '<a href="/client/dang-ky">Đăng ký nếu bạn chưa có tài khoản</a>',
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Đăng nhập",
          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(() => {
                history.push("/client/dang-nhap");
              }, 1000);
            }
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Đặt vé không thành công",
          text: "Vui lòng đăng nhập để tiếp tục đặt vé",
          footer:
            '<a href="/client/dang-ky">Đăng ký nếu bạn chưa có tài khoản</a>',
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Đăng nhập",
        }).then((result) => {
          if (result.isConfirmed) {
            setTimeout(() => {
              history.push("/client/dang-nhap");
            }, 1000);
          }
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Đặt vé không thành công",
        text: "Vui lòng chọn ghế ",
      });
    }
  };
  return (
    <div className="booking_checkoutContainer">
      <div className="booking_checkoutContent">
        <div className="booking_itemTop">
          <div className="booking_itemTop_item1">
            <p className="film_itemName">{listChair.thongTinPhim?.tenPhim}</p>
            <div className="contentcinema">
              <div className="address">
                <span className="pcinema_binding">
                  {listChair.thongTinPhim?.diaChi}
                </span>
              </div>
              <div className="hour_binding">
                {listChair.thongTinPhim?.ngayChieu}-
                {listChair.thongTinPhim?.gioChieu}-
                {listChair.thongTinPhim?.tenRap}
              </div>
            </div>
          </div>
          <div className="booking_itemTop_item3">
            <div className="text-sm item3_input">
              <label htmlFor="email" className=" item3_label">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Nhập email..."
                className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div className="text-sm item3_input">
              <label htmlFor="number" className=" item3_label">
                Số điện thoại
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Nhập Số điện thoại"
                className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                required
              />
            </div>
          </div>
          <div className="booking_itemTop_item2">
            <div className="item_chair">
              <span>Ghế</span>
            </div>
            <div className="_item_chairValue">
              <span>Giá Vé</span>
            </div>
          </div>
          {arr.danhSachVe.map((item, index) => {
            return (
              <div className="booking_itemTop_item2" key={index}>
                <div className="item_chair">
                  <span className="item2_chairCheckout">{item.tenGhe}</span>
                </div>
                <div className="_item_chairValue">
                  <span className="item2_Cost">
                    {item.giaVe.toLocaleString()} VNĐ
                  </span>
                </div>
              </div>
            );
          })}
          <div className=" item4_discount flex justify-between">
            <div>
              <p>Tổng Tiền</p>
            </div>
            <div className="item4_discount_cost">
              <span>
                {arr.danhSachVe
                  ?.reduce((cost, chair) => {
                    return (cost += chair.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
              </span>
              <span>VNĐ</span>
            </div>
          </div>
        </div>
        <div className="booking_itemBottom">
          <div className="item_warning">
            <p>
              Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
              nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
            </p>
          </div>
          <div className="item_booking">
            <button
              className="btn_booking booking_active"
              onClick={handleBooking}
            >
              Đặt Vé
            </button>
          </div>
          {/* <div className="item_booking">
            <p className=" booking_noneActive">Đặt Vé</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BookingCheckout;
