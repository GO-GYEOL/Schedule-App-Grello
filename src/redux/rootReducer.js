import { combineReducers } from "redux";
import { userReducer, postsReducer } from "./module";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["userReducer"],
};

const rootReducer = combineReducers({ userReducer, postsReducer });
export default persistReducer(persistConfig, rootReducer);

// export default rootReducer;
