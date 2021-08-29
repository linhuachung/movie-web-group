import { GET_USER_LIST_ADMIN_TYPE } from "../../types/QuanLyNguoiDungType/AuthUser";

const initialState = {
  adminUserList: [],
};

const AdminQuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_ADMIN_TYPE: {
      return { ...state, adminUserList: action.data.content };
    }

    default: {
      return state;
    }
  }
};

export default AdminQuanLyNguoiDungReducer;
