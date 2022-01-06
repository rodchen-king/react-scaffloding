/*
 * @Description:
 * @Author: rodchen
 * @Date: 2022-01-05 17:33:25
 * @LastEditTime: 2022-01-06 16:13:03
 * @LastEditors: rodchen
 */
import React, { useState } from "react";
import logo from "../assets/static/logo.svg";
import "./index.less";

const menus = [
  {
    name: "Dashboard",
    key: "1",
    children: [
      {
        name: "分析页",
        key: "1-1",
      },
      {
        name: "监控页",
        key: "1-2",
      },
      {
        name: "工作台",
        key: "1-3",
      },
    ],
  },
  {
    name: "表单页",
    key: "2",
    children: [
      {
        name: "基础表单",
        key: "2-1",
      },
      {
        name: "分步表单",
        key: "2-2",
      },
      {
        name: "高级表单",
        key: "2-3",
      },
    ],
  },
  {
    name: "列表页",
    key: "3",
    children: [
      {
        name: "搜索列表",
        key: "3-1",
      },
      {
        name: "查询表格",
        key: "3-2",
      },
      {
        name: "标准列表",
        key: "3-3",
      },
      {
        name: "卡片列表",
        key: "3-4",
      },
    ],
  },
  {
    name: "详情页",
    key: "4",
    children: [
      {
        name: "基础详情页",
        key: "4-1",
      },
      {
        name: "高级详情页",
        key: "4-2",
      },
    ],
  },
  {
    name: "结果页",
    key: "5",
    children: [
      {
        name: "成功页",
        key: "5-1",
      },
      {
        name: "失败页",
        key: "5-2",
      },
    ],
  },
  {
    name: "结果页",
    key: "6",
    children: [
      {
        name: "403",
        key: "6-1",
      },
      {
        name: "404",
        key: "6-2",
      },
      {
        name: "500",
        key: "6-3",
      },
    ],
  },
  {
    name: "个人页",
    key: "7",
    children: [
      {
        name: "个人中心",
        key: "7-1",
      },
      {
        name: "个人设置",
        key: "7-2",
      },
    ],
  },
  {
    name: "图形编辑器",
    key: "8",
    children: [
      {
        name: "流程编辑器",
        key: "8-1",
      },
      {
        name: "脑图编辑器",
        key: "8-2",
      },
      {
        name: "拓扑编辑器",
        key: "8-3",
      },
    ],
  },
];

const Layout = () => {
  const [selectMenu, UpdateSelectMenu] = useState("1");
  const [selectSubMenu, UpdateSelectSubMenu] = useState("1-1");

  return (
    <div className="g-ant">
      <div className="g-ant__sider">
        <div className="g-ant-sider__wrap g-ant-sider__wrap--fixed">
          <div className="g-ant-sider__head">
            <a className="m-logo" href="#">
              <img src={logo} alt="" />
              <h1>Ant Design Pro</h1>
            </a>
          </div>
          <ul className="g-ant-sider__main">
            {menus.map((menu) => (
              <li
                key={menu.key}
                className={`m-menu ${
                  menu.key === selectMenu ? "m-menu--selected" : ""
                }`}
                onClick={() => {
                  UpdateSelectMenu(menu.key);
                }}
              >
                <div className="m-menu__title ">
                  <i className="iconfont icon-printer"></i>
                  <span>{menu.name}</span>
                  <i
                    className={`iconfont ${
                      menu.key === selectMenu
                        ? "icon-arrowup"
                        : "icon-arrowdown"
                    }`}
                  ></i>
                </div>
                <ul
                  className="m-menu__sub"
                  style={{
                    height:
                      menu.key === selectMenu
                        ? menu.children.length * 40 + "px"
                        : "0",
                  }}
                >
                  {menu.children.map((subItem) => (
                    <li
                      className={`${
                        selectSubMenu === subItem.key
                          ? "m-menu__sub--selected"
                          : ""
                      }`}
                      onClick={() => {
                        UpdateSelectSubMenu(subItem.key);
                      }}
                      key={subItem.key}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="g-ant-sider__foot">
            <i className="iconfont icon-outdent u-bar"></i>
          </div>
        </div>
      </div>
      <div className="g-ant__main"></div>
    </div>
  );
};

export default Layout;
