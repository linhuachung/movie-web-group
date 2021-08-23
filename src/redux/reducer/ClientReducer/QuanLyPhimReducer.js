import {
  GET_DETAIL_MOVIE_TYPE,
  GET_MOVIE_LIST_TYPE,
} from "../../types/QuanLyPhimType/QuanLyPhimType";

const initialState = {
  movieList: [],
  detailMovie: [],
};

const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST_TYPE: {
      return { ...state, movieList: action.data.content };
    }
    case GET_DETAIL_MOVIE_TYPE: {
      return { ...state, detailMovie: action.data.content };
    }

    default: {
      return state;
    }
  }
};

export default QuanLyPhimReducer;
