import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";
import moment from "moment";
import { Tabs } from "antd";
import { Link } from "react-router-dom";

function TheaterTapPannel() {
  const { TabPane } = Tabs;
  const [tab] = useState({
    mode: "left",
  });
  const { mode } = tab;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_INFO_THEATER_SAGA_TYPE });
  }, [dispatch]);

  const theaterList = useSelector(
    (state) => state.QuanLyRapReducer.infoTheaterList
  );

  return (
    <div className="theaterTab_container">
      <Tabs defaultActiveKey="1" tabPosition={mode} className="tab_content ">
        {theaterList.map((company, index) => {
          return (
            <TabPane
              className="tabChild"
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
                      className="test"
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
                      {listTheater.danhSachPhim
                        ?.filter((isStart) => isStart.dangChieu === true)
                        .map((film, index) => {
                          return (
                            <div className="theaterTab_movieList " key={index}>
                              <div className="theaterTab_movieListItem">
                                <img
                                  src={film.hinhAnh}
                                  className=" h-40 w-32 filmImg"
                                  alt={""}
                                />
                              </div>
                              <div className="theaterTab_movieListItem ml-3">
                                <ul>
                                  <li className=" my-2 theaterTab_movieListItem_name">
                                    <Link
                                      to={`chi-tiet-phim/${film.maPhim}`}
                                      className="text-2xl text-blue-600 hover:text-red-800 filmName"
                                    >
                                      {film.tenPhim}
                                    </Link>
                                  </li>
                                  <li className="timeToStart row-span-3">
                                    {film.lstLichChieuTheoPhim
                                      ?.slice(0, 8)
                                      .map((item, index) => {
                                        return (
                                          <Link
                                            to={`/danh-sach-phong-ve/${company.maHeThongRap}/${item.maLichChieu}`}
                                            className="choose_Time"
                                            key={index}
                                          >
                                            {moment(
                                              item.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </Link>
                                        );
                                      })}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        })}
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

export default TheaterTapPannel;
