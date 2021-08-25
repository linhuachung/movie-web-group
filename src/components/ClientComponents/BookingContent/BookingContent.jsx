import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

function BookingContent(props) {
  const { listChair, theater, setChairChoose } = props;
  const { chair } = props;
  const [choose, setChoose] = useState(false);

  const [minutes] = useState(5);
  const [seconds] = useState(60);

  const arr = [];
  const handleChoiceChair = (value) => {
    chair({ maGhe: value.maGhe, giaVe: value.giaVe });

    // setChoose((choose) => !choose);
    // setChairChoose(chair({ maGhe: value.maGhe, giaVe: value.giaVe }));
  };

  const choice = () => {
    return listChair.danhSachGhe?.slice(0, 130).map((chair, index) => {
      return (
        <div key={index}>
          {chair.taiKhoanNguoiDat === null ? (
            <FontAwesomeIcon
              onClick={() => handleChoiceChair(chair)}
              icon={faCouch}
              className={
                chair.dangChon === true
                  ? " text-green-800  icon "
                  : chair.loaiGhe === "Thuong"
                  ? " text-gray-300  icon "
                  : "text-yellow-600 icon"
              }
            />
          ) : (
            <FontAwesomeIcon
              icon={faCouch}
              key={index}
              className="text-gray-700 text-4xl cursor-not-allowed hover:none "
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="booking_container">
      <div className="booking_content">
        <div className="booking_item_title">
          <div className="item_info_logo">
            <div className="booking_logo">
              {theater.map((item, index) => {
                return (
                  <img
                    src={item.logo}
                    alt={`${item.tenHeThongRap}`}
                    className="w-16"
                    key={index}
                  />
                );
              })}
            </div>
            <div className="item_info ml-4">
              <p className="m-0 text-green-300 text-2xl item_info_theater">
                {listChair.thongTinPhim?.tenCumRap}
              </p>
              <p className="m-0 text-base text-gray-300 item_info_filmShowtime">
                <span className="text-blue-300">Ngày Chiếu:</span>{" "}
                {listChair.thongTinPhim?.ngayChieu} -{" "}
                <span className="text-blue-300">Tên Rạp:</span>{" "}
                {listChair.thongTinPhim?.tenRap}
              </p>
            </div>
          </div>

          <div className="item_info">
            <div>
              <p className="m-0 text-base text-gray-300 time_down">
                Thời gian giữ chỗ
              </p>
            </div>
            <div className="text-center text-4xl text-red-400 time_code">
              {minutes}:{seconds}
            </div>
          </div>
        </div>
        <div className="booking_item">
          <div className="item_img">
            <img src="/image/TheaterView.png" alt={"manHinh"} />
          </div>
          <div className="item_listChair">{choice()}</div>
          <div className="chair_description">
            <div className="chair_info text-center">
              <div className="chair_info_item">
                <FontAwesomeIcon
                  icon={faCouch}
                  className="text-green-500 text-lg"
                />
              </div>
              <p>Ghế Đang Chọn</p>
            </div>
            <div className="chair_info text-center">
              <div className="chair_info_item">
                <FontAwesomeIcon
                  icon={faCouch}
                  className="text-gray-700 text-lg"
                />
              </div>
              <p>Ghế Đã Có Người Chọn</p>
            </div>
            <div className="chair_info text-center">
              <div className="chair_info_item">
                <FontAwesomeIcon
                  icon={faCouch}
                  className="text-yellow-600 text-lg"
                />
              </div>
              <p>Ghế Vip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingContent;
