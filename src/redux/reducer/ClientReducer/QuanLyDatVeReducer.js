import {
  GET_LIST_CHAIR_TYPE,
  IS_BOOKING,
} from "../../types/QuanLyDatVeType/QuanLyDatVeType";

const initialState = {
  listChair: [],
  isChooseChair: [],
};

const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CHAIR_TYPE: {
      return { ...state, listChair: action.data.content };
    }
    case IS_BOOKING: {
      let listChair = [...state.isChooseChair];

      let index = listChair.findIndex(
        (item) => item.maGhe === action.data.maGhe
      );
      if (index !== -1) {
        listChair.splice(index, 1);
      } else {
        listChair.push(action.data);
      }
      return {
        ...state,

        isChooseChair: listChair,
      };
    }
    default: {
      return state;
    }
  }
};

export default QuanLyDatVeReducer;
