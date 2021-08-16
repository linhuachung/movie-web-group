import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";

function Footer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_THEATER_SAGA_TYPE,
    });
  }, [dispatch]);
  const theater = useSelector((state) => state.QuanLyRapReducer.theaterList);
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_content">
          <div className="footerContent_left">
            <p className="mb-6">
              Movie Start là dịch vụ được cung cấp bởi Công ty Cổ phần Galaxy
              Play, thành viên của Công ty Cổ phần Galaxy M&E
            </p>
            <ul>
              <li>
                Địa chỉ: 59 Xa Lộ Hà Nội, Phường Thảo Điền, Quận 2, Thành Phố Hồ
                Chí Minh, Việt Nam.
              </li>
              <li>Mã số doanh nghiệp: 0106539659.</li>
              <li>Ngày cấp mã số doanh nghiệp: 15/5/2014.</li>
              <li>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội.</li>
            </ul>
          </div>
        </div>
        <div className="footer_content">
          <div className="footerContent_center">
            <p className="content_title">Đối Tác</p>
            <div className="logo_company">
              {theater.map((item, index) => {
                return (
                  <div key={index} className="logoCompany_item">
                    <img src={item.logo} alt={"logo"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer_content">
          <div className="footerContent_right">
            <ul>
              <li className="content_title">Tải Ứng Dụng</li>
              <li className="footer_appLogo">
                <a href="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Jul0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Jul0121-Text_Search_BKWS-BKWS|ONSEM_kwid_43700055535927342_creativeid_446323003325_device_c&gclid=CjwKCAjwmeiIBhA6EiwA-uaeFQM0rPLhQpS1QPqSDIRCl2APr-lu-u7ynGWPxWkfccEqqcMCpBuMKBoC2UEQAvD_BwE">
                  <img
                    src="/image/android-app-download-button.png"
                    alt={""}
                    className="w-48 mr-4"
                  />
                </a>
                <a href="https://www.apple.com/app-store/">
                  <img
                    src="/image/ios-app-download-button.png"
                    alt={""}
                    className="w-48"
                  />
                </a>
              </li>
              <li
                className="mt-5 flex justify-center flex-col"
                style={{ alignItems: "center" }}
              >
                <img src="/image/LogoMovie.png" alt={"logo"} className="w-12" />
                <p>Movie Start</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
