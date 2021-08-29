import React from "react";
import { Redirect } from "react-router-dom";

function GuardLogin(props) {
  // let user = {};
  const user = JSON.parse(localStorage.getItem("user"));
  // if (localStorage.getItem("user")) {
  //   user.JSON?.parse(localStorage.getItem("user"));
  //   console.log(user.JSON?.parse(localStorage.getItem("user")));
  // }
  if (user?.accessToken) {
    return props.children;
  } else {
    return <Redirect to="/client/dang-nhap" />;
  }
}
export default GuardLogin;
