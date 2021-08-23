import { GET_LIST_CHAIR_TYPE } from "../../types/QuanLyDatVeType/QuanLyDatVeType";

const initialState = {
  listChair: [],
};

const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CHAIR_TYPE: {
      return { ...state, listChair: action.data.content };
    }

    default: {
      return state;
    }
  }
};

export default QuanLyDatVeReducer;
