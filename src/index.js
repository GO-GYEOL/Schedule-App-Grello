import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
