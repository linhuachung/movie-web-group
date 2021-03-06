import React from "react";
import { Redirect } from "react-router-dom";

function GuardAdmin(props) {
  // let user = {};
  // if (localStorage.getItem("user")) {
  //   user.JSON.parse(localStorage.getItem("user"));
  // }
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.maLoaiNguoiDung === "QuanTri") {
    return props.children;
  } else {
    return <Redirect to="/admin" />;
  }
}

export default GuardAdmin;
