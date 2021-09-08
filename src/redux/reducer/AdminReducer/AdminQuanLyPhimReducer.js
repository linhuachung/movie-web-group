import { EDIT_MOVIE_TYPE } from "../../types/QuanLyPhimType/QuanLyPhimType";

const initialState = {
  movieEdit: [],
};

const AdminQuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MOVIE_TYPE: {
      return { ...state, movieEdit: action.movie };
    }

    default: {
      return state;
    }
  }
};

export default AdminQuanLyPhimReducer;
