import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BOOKING_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";

function BookingCheckout(props) {
  const { listChair, chairChoose } = props;
  const { chair } = props;
  console.log("chairChoose ", chairChoose);

  const dispatch = useDispatch();
  const handleBooking = () => {
    dispatch({
      type: BOOKING_SAGA_TYPE,
      data: chairChoose,
    });
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
          <div className="booking_itemTop_item2">
            <div className="item_chair">
              <span>Ghế</span>
            </div>
            <div className="_item_chairValue">
              <span>
                {/* {chairChoose.danhSachVe.map((item, index) => {
                  return <span key={index}>{item.maGhe}</span>;
                })} */}
              </span>
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
