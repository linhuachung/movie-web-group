import React from "react";

function BookingCheckout(props) {
  const { listChair } = props;
  console.log(listChair);
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
              <pan>Ghế</pan>
            </div>
            <div className="_item_chairValue">
              <pan>0</pan>
            </div>
          </div>
          <div className="booking_itemTop_item3">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-coolGray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Nhập email..."
                className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="number" className="block dark:text-coolGray-400">
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
            <button className="btn_booking">Đặt Vé</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCheckout;
