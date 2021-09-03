import BookingManager from "../pages/AdminPage/BookingManager/BookingManager";
import Dashboard from "../pages/AdminPage/Dashboard/Dashboard";
import LoginAdmin from "../pages/AdminPage/LoginAdmin/LoginAdmin";
import MovieManager from "../pages/AdminPage/MovieManager/MovieManager";
import TheaterManager from "../pages/AdminPage/TheaterManager/TheaterManager";
import UserManager from "../pages/AdminPage/UserManager/UserManager";
import Booking from "../pages/ClientPage/Booking/Booking";
import Contact from "../pages/ClientPage/Contact/Contact";
import DetailPage from "../pages/ClientPage/DetailPage/DetailPage";
import TheaterDetail from "../pages/ClientPage/DetailPage/TheaterDetail";
import Home from "../pages/ClientPage/Home/Home";
import InfoMovie from "../pages/ClientPage/InfoMovie/InfoMovie";
import Login from "../pages/ClientPage/Login/Login";
import MovieListPage from "../pages/ClientPage/MovieListPage/MovieListPage";
import ProfileUserPage from "../pages/ClientPage/ProfileUserPage/ProfileUserPage";
import Register from "../pages/ClientPage/Register/Register";

export const clientRouters = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/danh-sach-phim",
    exact: false,
    Component: MovieListPage,
  },
  {
    path: "/chi-tiet-phim/:maPhim",
    exact: false,
    Component: DetailPage,
  },
  {
    path: "/chi-tiet-rap/:maHeThongRap",
    exact: false,
    Component: TheaterDetail,
  },
  {
    path: "/thong-tin",
    exact: false,
    Component: InfoMovie,
  },

  {
    path: "/ho-tro",
    exact: false,
    Component: Contact,
  },

  {
    path: "/thong-tin-tai-khoan/:taiKhoan",
    exact: false,
    checkLogin: true,
    Component: ProfileUserPage,
  },
];
export const clientAuthorRouters = [
  {
    path: "/client/dang-nhap",
    exact: true,
    Component: Login,
  },
  {
    path: "/client/dang-ky",
    exact: true,
    Component: Register,
  },
];
export const bookingClientRouters = [
  {
    path: "/danh-sach-phong-ve/:maHeThongRap/:maLichChieu",
    exact: true,
    Component: Booking,
  },
];

export const adminRouters = [
  {
    path: "/admin/dashboard",
    exact: true,
    checkLogin: true,
    Component: Dashboard,
  },
  {
    path: "/admin/dashboard/booking-manager/:maPhim",
    exact: false,
    checkLogin: true,
    Component: BookingManager,
  },
  {
    path: "/admin/dashboard/user-manager",
    exact: false,
    checkLogin: true,
    Component: UserManager,
  },
  {
    path: "/admin/dashboard/movie-manager",
    exact: false,
    // checkLogin: true,
    Component: MovieManager,
  },
  {
    path: "/admin/dashboard/theater-manager",
    exact: false,
    checkLogin: true,
    Component: TheaterManager,
  },
  {
    path: "/admin/profile/profile-user",
    exact: false,
    checkLogin: true,
    // Component: TheaterManager,
  },
];
export const adminRoutersLogin = [
  {
    path: "/admin",
    exact: true,
    Component: LoginAdmin,
  },
];
