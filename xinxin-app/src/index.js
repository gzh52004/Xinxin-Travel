import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import "antd-mobile/dist/antd-mobile.css";

import "./utils/rem";
import store from "./redux";

// 根据环境不同切换不同的路由模式
// process.env.NODE_ENV： development, production
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
