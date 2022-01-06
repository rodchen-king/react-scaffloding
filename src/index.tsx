/*
 * @Description:
 * @Author: rodchen
 * @Date: 2022-01-06 11:17:01
 * @LastEditTime: 2022-01-06 15:42:37
 * @LastEditors: rodchen
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
