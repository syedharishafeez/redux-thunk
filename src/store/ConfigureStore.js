import { createStore, combineReducers } from "redux";
import { CounterReducer } from "../reducers/CounterReducer";

export default createStore(
  combineReducers({
    counter: CounterReducer
  })
);
