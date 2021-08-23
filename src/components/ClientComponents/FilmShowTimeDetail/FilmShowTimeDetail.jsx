import React, { useState } from "react";
import { Tabs } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function FilmShowTimeDetail(props) {
  const { filmShowtime } = props;
  const [tab] = useState({
    mode: "left",
  });
  const { mode } = tab;
  return (
    <div className=" theaterTab_container showTime_film">
      <Tabs defaultActiveKey="1" className="tab_content ">
        {filmShowtime?.map((company, index) => {
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
                {company.cumRapChieu?.map((listTheater, index) => {
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
                      <div className="theaterTab_movieListItem ">
                        {listTheater.lichChieuPhim
                          ?.slice(0, 8)
                          .map((time, index) => {
                            return (
                              <Link
                                to={`/danh-sach-phong-ve/${time.maLichChieu}`}
                                className="showTime_choose"
                                key={index}
                              >
                                {moment(time.ngayChieuGioChieu).format(
                                  "hh:mm A"
                                )}
                              </Link>
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

export default FilmShowTimeDetail;
