import React from "react";
import { SearchBar } from "antd-mobile";

import "./style.scss";

const Home = () => {
  return (
    <div>
      <SearchBar className="search" placeholder="Search" maxLength={8} />
    </div>
  );
};

export default Home;
