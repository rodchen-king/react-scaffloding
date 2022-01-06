/*
 * @Description:
 * @Author: rodchen
 * @Date: 2022-01-06 11:17:01
 * @LastEditTime: 2022-01-06 16:11:08
 * @LastEditors: rodchen
 */
import React from "react";
import ReactDOM from "react-dom";
import "./normalize.less";
import Layout from "./layouts";
import "./assets/iconfont/iconfont.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
