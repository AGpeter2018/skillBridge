import { combineReducers } from "redux";

import useReducers from "./userReducer";

const rootReducer = combineReducers({
  user: useReducers,
});

export default rootReducer;
