import {
  GET_FILM_SHOWTIME_INFOMATION_THEATER_TYPE,
  GET_FILM_SHOWTIME_INFOMATION_TYPE,
  GET_INFO_THEATER_TYPE,
  GET_THEATER_TYPE,
} from "../../types/QuanLyRapType/QuanLyRapType";

const initialState = {
  theaterList: [],
  infoTheaterList: [],
  filmShowtime: [],
  infoMovieInTheater: [],
};

const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATER_TYPE: {
      return { ...state, theaterList: action.data.content };
    }
    case GET_INFO_THEATER_TYPE: {
      return { ...state, infoTheaterList: action.data.content };
    }
    case GET_FILM_SHOWTIME_INFOMATION_TYPE: {
      return { ...state, filmShowtime: action.data.content };
    }
    case GET_FILM_SHOWTIME_INFOMATION_THEATER_TYPE: {
      return { ...state, infoMovieInTheater: action.data.content };
    }
    default: {
      return state;
    }
  }
};

export default QuanLyRapReducer;
