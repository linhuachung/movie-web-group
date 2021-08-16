import Contact from "../pages/ClientPage/Contact/Contact";
import DetailPage from "../pages/ClientPage/DetailPage/DetailPage";
import Home from "../pages/ClientPage/Home/Home";
import InfoMovie from "../pages/ClientPage/InfoMovie/InfoMovie";
import MovieListPage from "../pages/ClientPage/MovieListPage/MovieListPage";

export const clientRouters = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/danh-sach-phim",
    exact: true,
    Component: MovieListPage,
  },
  {
    path: "/chi-tiet-phim/:maPhim",
    Component: DetailPage,
  },
  {
    path: "/thong-tin",
    exact: true,
    Component: InfoMovie,
  },

  {
    path: "/ho-tro",
    exact: true,
    Component: Contact,
  },
];
export const adminRouters = [{}];
