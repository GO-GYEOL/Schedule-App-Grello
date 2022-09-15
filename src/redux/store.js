import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from "redux-thunk";
import { setPosts } from "../api/apis";

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// 데이터 서버에 업데이트
// store.subscribe(() => {
//   if (store.getState().postsReducer.posts.data == null) return;
//   setPosts(store.getState().postsReducer.posts.data);
// });
