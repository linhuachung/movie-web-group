import "./App.css";
import {
  adminRouters,
  bookingClientRouters,
  clientAuthorRouters,
  clientRouters,
} from "./config/router.config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TemplateClient from "./templates/TemplateClient";
import GuardLogin from "./HOC/GuardLogin";
import GuardAdmin from "./HOC/GuardAdmin";
import TemplateAdmin from "./templates/TemplateAdmin";
import ScrollToTop from "./utils/ScrollToTop";
import TemplateAuthorClient from "./templates/TemplateAuthorClient";
import TemplateBooking from "./templates/TemplateBooking";
function App() {
  const renderRouterClientList = () => {
    return clientRouters.map((router, index) => {
      const { Component, path, exact, checkLogin } = router;
      if (checkLogin) {
        return (
          <Route path={path} exact={exact} key={index}>
            <GuardLogin>
              <TemplateClient Component={Component} />
            </GuardLogin>
          </Route>
        );
      }
      return (
        <Route path={path} exact={exact} key={index}>
          <TemplateClient Component={Component} />
        </Route>
      );
    });
  };

  const renderRouterAuthorClientList = () => {
    return clientAuthorRouters.map((router, index) => {
      const { Component, path, exact } = router;
      return (
        <Route path={path} exact={exact} key={index}>
          <TemplateAuthorClient Component={Component} />
        </Route>
      );
    });
  };

  const renderRouterBookingMovie = () => {
    return bookingClientRouters.map((router, index) => {
      const { Component, path, exact } = router;
      return (
        <Route path={path} exact={exact} key={index}>
          <TemplateBooking Component={Component} />
        </Route>
      );
    });
  };

  const renderRouterAdminList = () => {
    return adminRouters.map((router, index) => {
      const { Component, path, exact, checkLogin } = router;
      if (checkLogin) {
        return (
          <Route path={path} exact={exact} key={index}>
            <GuardAdmin>
              <TemplateAdmin Component={Component} />
            </GuardAdmin>
          </Route>
        );
      }
      return (
        <Route path={path} exact={exact} key={index}>
          <TemplateAdmin Component={Component} />
        </Route>
      );
    });
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {renderRouterClientList()}
        {renderRouterAdminList()}
        {renderRouterAuthorClientList()}
        {renderRouterBookingMovie()}
        <Route path="">
          <div>PageNotFound</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
