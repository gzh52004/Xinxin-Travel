import React from "react";

import TopSearch from "@/components/TopSearch";
import HomeCarousel from "./HomeCarousel.jsx";
import HomeNav from "./HomeNav.jsx";
import HomeLook from "./HomeLook.jsx";
import HomeActivity from "./HomeActivity";
import HomeTravel from "./HomeTravel";
import "./style.scss";

class Home extends React.Component {
  render() {
    return (
      <div style={{ overflowY: "auto" }}>
        <TopSearch />
        <HomeCarousel />
        <HomeNav />
        <HomeLook />
        <HomeActivity />
        <HomeTravel />
      </div>
    );
  }
}

export default Home;
