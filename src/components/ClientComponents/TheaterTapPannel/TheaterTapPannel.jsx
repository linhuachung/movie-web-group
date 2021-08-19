import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_INFO_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";
import moment from "moment";
import { Tabs } from "antd";

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
                  className="rounded-full h-16 w-16"
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
                              className=" h-16 w-16"
                              alt={""}
                            />
                          </div>
                          <div className="theaterTab_theaterListItem">
                            <ul>
                              <li className="theaterTab_theaterName text-lg text-blue-600">
                                {listTheater.tenCumRap}
                              </li>
                              <li className="text-black">
                                {listTheater.diaChi}
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="text-red-700 hover:text-blue-600 duration-300"
                                >
                                  [Chi Tiết]
                                </a>
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
                                  className=" h-40 w-32"
                                  alt={""}
                                />
                              </div>
                              <div className="theaterTab_movieListItem ml-3">
                                <ul>
                                  <li className=" my-2">
                                    <a
                                      href={`chi-tiet-phim/${film}`}
                                      className="text-2xl text-blue-600 hover:text-red-800 "
                                    >
                                      {film.tenPhim}
                                    </a>
                                  </li>
                                  <li className="timeToStart row-span-3">
                                    {film.lstLichChieuTheoPhim
                                      ?.slice(0, 8)
                                      .map((item, index) => {
                                        return (
                                          <a
                                            href="/"
                                            className="choose_Time"
                                            key={index}
                                          >
                                            {moment(
                                              item.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </a>
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
