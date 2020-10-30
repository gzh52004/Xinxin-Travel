import React from "react";

import { Tabs, Badge } from "antd-mobile";
import request from "@/utils/request";

const tabs = [
  { title: "周边游", sub: "1" },
  { title: "国内游", sub: "2" },
  { title: "境外游", sub: "3" },
];

class HomeTravel extends React.Component {
  state = {
    aroundList: [],
    homelandList: [],
    abroadList: [],
  };

  async componentDidMount() {
    // 周边游
    const { data: aroundList } = await request.get("/goods/zhoubian/list", {
      params: {
        page: 1,
        pagesize: 5,
      },
    });
    this.setState({
      aroundList: aroundList.data,
    });
  }

  render() {
    const { aroundList } = this.state;
    console.log(aroundList);
    return (
      <div className="travel">
        <Tabs
          tabs={tabs}
          tabBarActiveTextColor="#00bf48"
          tabBarUnderlineStyle={{ border: "1px solid #00bf48" }}
          renderTab={(tab) => <Badge>{tab.title}</Badge>}
          initialPage={0}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >
          <div
            style={{
              display: "flex",
              height: "500px",
              backgroundColor: "#fff",
            }}
          >
            <a href="" className="tuwen">
              <div className="pic">
                <span className="sub">跟团游</span>
                <img src="https://c.cncnimg.cn/041/042/6c36_m.jpg" alt="" />
              </div>
              <div className="text">
                <div className="title">
                  广州去惠州巽寮湾二天游价格、广州到惠东巽寮湾两日自由行
                </div>
                <div className="money">
                  <span style={{ color: "#999" }}>2日游</span>
                  <span style={{ color: "#f60" }}>
                    ￥<b style={{ fontSize: "18px" }}>88</b>起
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of third tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }
}

export default HomeTravel;
