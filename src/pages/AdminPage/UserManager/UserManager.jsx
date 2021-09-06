import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDataTable from "../../../components/AdminComponent/DataTable/UserDataTable";
import { GET_USER_LIST_ADMIN_SAGA_TYPE } from "../../../redux/types/QuanLyNguoiDungType/AuthUser";

function UserManager() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_USER_LIST_ADMIN_SAGA_TYPE });
  });

  const user = useSelector(
    (state) => state.AdminQuanLyNguoiDungReducer.adminUserList
  );

  return (
    <div className="main-content flex-1 from-gray-600 to-gray-800 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className=" pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-indigo-700 to-blue-600 p-4 shadow text-2xl text-white">
          Quản Lý Người Dùng
        </div>
        <div className="userManager_content  w-5/6 m-auto">
          <UserDataTable user={user} />
        </div>
      </div>
    </div>
  );
}

export default UserManager;
