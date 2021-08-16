import { GET_THEATER_TYPE } from "../../types/QuanLyRapType/QuanLyRapType";

const initialState = {
  theaterList: [],
};

const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATER_TYPE: {
      return { ...state, theaterList: action.data.content };
    }

    default: {
      return state;
    }
  }
};

export default QuanLyRapReducer;
