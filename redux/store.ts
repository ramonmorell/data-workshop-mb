import { createStore } from "redux";
import reducers from "./combineReducers";

const store = createStore(reducers);

export default store;
