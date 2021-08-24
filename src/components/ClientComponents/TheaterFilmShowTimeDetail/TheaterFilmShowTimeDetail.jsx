import React, { useState } from "react";
import { Tabs } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function TheaterFilmShowTimeDetail(props) {
  const { company } = props;
  const [tab] = useState({
    mode: "left",
  });
  const { mode } = tab;
  return (
    <div className=" theaterTab_container showTime_film">
      <Tabs defaultActiveKey="1" className="tab_content ">
        {company?.map((company, index) => {
          return (
            <TabPane
              tab={
                <img
                  src={company.logo}
                  className="rounded-full h-16 w-16 logoTab_company"
                  alt={""}
                />
              }
              key={index}
            >
              <Tabs tabPosition={mode}>
                {company.lstCumRap?.map((listTheater, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="theaterTab_theaterList p-0">
                          <div className="theaterTab_theaterListItem">
                            <img
                              src={listTheater.hinhAnh}
                              className=" h-16 w-16 theaterImg_company"
                              alt={""}
                            />
                          </div>
                          <div className="theaterTab_theaterListItem">
                            <ul>
                              <li className="theaterTab_theaterName text-lg text-blue-600">
                                {listTheater.tenCumRap}
                              </li>
                              <li className="text-black w-2/3">
                                <p>{listTheater.diaChi}</p>
                              </li>
                              <li>
                                <Link
                                  to={`/chi-tiet-rap/${company.maHeThongRap}`}
                                  className="text-red-700 hover:text-blue-600 duration-300"
                                >
                                  [Chi Tiết]
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      <div className="theater_filmShowTime">
                        {listTheater.danhSachPhim
                          .filter((isStart) => isStart.dangChieu === true)
                          .map((film, index) => {
                            return (
                              <div className="movieListItem" key={index}>
                                <div className="movieListItem_img row-span-4">
                                  <img
                                    src={film.hinhAnh}
                                    alt={`${film.tenPhim}`}
                                    className="h-48 w-32"
                                  />
                                </div>
                                <div className="movieListItem_content col-span-2">
                                  <div>
                                    <Link
                                      to={`/chi-tiet-phim/${film.maPhim}`}
                                      className="text-2xl text-blue-600 hover:text-red-800 filmName"
                                    >
                                      {film.tenPhim}
                                    </Link>
                                  </div>
                                </div>
                                <div className="movieListItem_content row-start-2 col-start-2 row-span-2 col-span-4">
                                  <div className="choose_time ">
                                    {film.lstLichChieuTheoPhim
                                      .slice(0, 8)
                                      .map((time, index) => {
                                        return (
                                          <Link
                                            to={`/danh-sach-phong-ve/${company.maHeThongRap}/${time.maLichChieu}`}
                                            className="showTime_choose"
                                            key={index}
                                          >
                                            {moment(
                                              time.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </Link>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default TheaterFilmShowTimeDetail;
