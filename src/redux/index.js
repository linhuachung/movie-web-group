import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import QuanLyPhimReducer from "./reducer/ClientReducer/QuanLyPhimReducer";
import QuanLyRapReducer from "./reducer/ClientReducer/QuanLyRapReducer";
import QuanLyDatVeReducer from "./reducer/ClientReducer/QuanLyDatVeReducer";

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyDatVeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);
middleWareSaga.run(rootSaga);

export default store;
