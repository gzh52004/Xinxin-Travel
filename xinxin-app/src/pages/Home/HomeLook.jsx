import React from "react";
import { Carousel } from "antd-mobile";

import kandian from "@/assets/img/icon_kandian.png";
import kandianbg from "@/assets/img/kandian_bg.png";

const HomeLook = () => {
  return (
    <div className="kandian">
      <img
        src={kandian}
        alt=""
        style={{ width: "35px", height: "42px", marginLeft: "15px" }}
      />
      <Carousel
        className="my-carousel"
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay
        infinite
      >
        <div>
          <div className="v-item">广东游记：广州中山纪念堂</div>
          <div className="v-item">广东游记：广州黄埔军校旧址纪念馆</div>
        </div>
        <div>
          <div className="v-item">广东游记：广州黄埔军校旧址纪念馆</div>
          <div className="v-item"> 广东游记：广州石室圣心大教堂</div>
        </div>
        <div>
          <div className="v-item">广州西汉南越王墓博物馆</div>
          <div className="v-item"> 广东游记：广州上下九路步行街</div>
        </div>
      </Carousel>
      <img src={kandianbg} alt="" style={{ height: "61px" }} />
    </div>
  );
};

export default HomeLook;
