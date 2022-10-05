import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from "redux-thunk";
import { setPosts } from "../api/apis";
import { persistStore } from 'redux-persist';

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export const persistor = persistStore(store);

// 데이터 서버에 업데이트
// store.subscribe(() => {
//   if (store.getState().postsReducer.posts.data == null) return;
//   setPosts(store.getState().postsReducer.posts.data);
// });
