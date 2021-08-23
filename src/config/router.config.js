import Dasboard from "../pages/AdminPage/Dashboard/Dasboard";
import LoginAdmin from "../pages/AdminPage/LoginAdmin/LoginAdmin";
import Contact from "../pages/ClientPage/Contact/Contact";
import DetailPage from "../pages/ClientPage/DetailPage/DetailPage";
import TheaterDetail from "../pages/ClientPage/DetailPage/TheaterDetail";
import Home from "../pages/ClientPage/Home/Home";
import InfoMovie from "../pages/ClientPage/InfoMovie/InfoMovie";
import Login from "../pages/ClientPage/Login/Login";
import MovieListPage from "../pages/ClientPage/MovieListPage/MovieListPage";
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
export const adminRouters = [
  {
    path: "/admin",
    exact: true,
    Component: LoginAdmin,
  },
  {
    path: "/admin/dashboard",
    exact: false,
    checkLogin: true,
    Component: Dasboard,
  },
];
