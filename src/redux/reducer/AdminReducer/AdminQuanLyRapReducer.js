import { GET_INFO_THEATER_BY_SYSTEM_TYPE } from "../../types/QuanLyRapType/QuanLyRapType";

const initialState = {
  theaterBySystem: [],
};

const AdminQuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_THEATER_BY_SYSTEM_TYPE: {
      return { ...state, theaterBySystem: action.data.content };
    }

    default: {
      return state;
    }
  }
};

export default AdminQuanLyRapReducer;
