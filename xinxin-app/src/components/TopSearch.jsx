import React from "react";
import { SearchBar, Icon } from "antd-mobile";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "@/assets/scss/TopSearch.scss";

const TopSearch = () => {
  return (
    <div className="TopBar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "80px",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "30px", height: "30px" }}
          src="https://m.cncnimg.cn/static/img/icon_cncn.png"
        />
        <span style={{ marginLeft: "4px" }}>
          <a href="###" style={{ color: "#00bf48", textAlign: "center" }}>
            广州
          </a>
        </span>
        <Icon type="down" size="xxs" color="#00bf48" />
      </div>

      <SearchBar
        placeholder="Search"
        placeholder="线路/景点/门票/旅行社"
        maxLength={8}
      />
      <Link to="/mine">
        <UserOutlined className="userIcon" />
      </Link>
    </div>
  );
};

export default TopSearch;
