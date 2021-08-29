import { GET_PROFILE_USER_TYPE } from "../../types/QuanLyNguoiDungType/AuthUser";

const initialState = {
  userProfile: [],
};

const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_USER_TYPE: {
      return { ...state, userProfile: action.data.content };
    }

    default: {
      return state;
    }
  }
};

export default QuanLyNguoiDungReducer;
