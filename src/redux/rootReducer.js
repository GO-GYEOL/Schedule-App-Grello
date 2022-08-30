import { combineReducers } from "redux";
import { userReducer, postsReducer } from "./module";

const rootReducer = combineReducers({ userReducer, postsReducer });

export default rootReducer;