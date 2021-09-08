import {
  FIND_USER_ADMIN_TYPE,
  GET_USER_LIST_ADMIN_TYPE,
} from "../../types/QuanLyNguoiDungType/AuthUser";

const initialState = {
  adminUserList: [],
  userEdit: [],
};

const AdminQuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_ADMIN_TYPE: {
      return { ...state, adminUserList: action.data.content };
    }
    case FIND_USER_ADMIN_TYPE: {
      return { ...state, userEdit: action.data };
    }
    default: {
      return state;
    }
  }
};

export default AdminQuanLyNguoiDungReducer;
