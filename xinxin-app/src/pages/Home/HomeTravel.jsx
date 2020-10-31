import React from "react";

import { Tabs, Badge, Icon } from "antd-mobile";
import { Link } from "react-router-dom";
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
    // 国内游
    const { data: homelandList } = await request.get("/goods/guonei/list", {
      params: {
        page: 1,
        pagesize: 5,
      },
    });
    // 出境游
    const { data: abroadList } = await request.get("/goods/chujing/list", {
      params: {
        page: 1,
        pagesize: 5,
      },
    });
    this.setState({
      aroundList: aroundList.data,
      homelandList: homelandList.data,
      abroadList: abroadList.data,
    });
  }

  goto = (id) => {
    console.log(id);
  };

  render() {
    const { aroundList, homelandList, abroadList } = this.state;
    return (
      <div className="travel">
        <Tabs
          tabs={tabs}
          tabBarActiveTextColor="#00bf48"
          tabBarUnderlineStyle={{ border: "1px solid #00bf48" }}
          renderTab={(tab) => <Badge>{tab.title}</Badge>}
          initialPage={0}
        >
          <div
            style={{
              display: "block",
              height: "100%",
              backgroundColor: "#fff",
              paddingBottom: "50px",
            }}
          >
            {aroundList.map((item) => {
              return (
                <div className="tuwen" key={item._id}>
                  <div className="pic">
                    <span className="sub">跟团游</span>
                    <img src={item.url} alt="" />
                  </div>
                  <div className="text">
                    <div
                      className="title"
                      onClick={this.goto.bind(this, item._id)}
                    >
                      {item.title}
                    </div>
                    <div className="money">
                      <span style={{ color: "#999" }}>{item.newday}</span>
                      <span style={{ color: "#f60" }}>
                        ￥<b style={{ fontSize: "18px" }}>{item.price}</b>起
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="moreTravel">
              <Link to="/list" style={{ color: "#00bf48" }}>
                查看更多
              </Link>
              <Icon type="right" size="md" color="#00bf48" />
            </div>
          </div>
          <div
            style={{
              display: "block",
              height: "100%",
              backgroundColor: "#fff",
              paddingBottom: "50px",
            }}
          >
            {homelandList.map((item) => {
              return (
                <div className="tuwen" key={item._id}>
                  <div className="pic">
                    <span className="sub">跟团游</span>
                    <img src={item.url} alt="" />
                  </div>
                  <div className="text">
                    <div
                      className="title"
                      onClick={this.goto.bind(this, item._id)}
                    >
                      {item.title}
                    </div>
                    <div className="money">
                      <span style={{ color: "#999" }}>{item.newday}</span>
                      <span style={{ color: "#f60" }}>
                        ￥<b style={{ fontSize: "18px" }}>{item.price}</b>起
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="moreTravel">
              <Link to="/list" style={{ color: "#00bf48" }}>
                查看更多
              </Link>
              <Icon type="right" size="md" color="#00bf48" />
            </div>
          </div>
          <div
            style={{
              display: "block",
              height: "100%",
              backgroundColor: "#fff",
              paddingBottom: "50px",
            }}
          >
            {abroadList.map((item) => {
              return (
                <div className="tuwen" key={item._id}>
                  <div className="pic">
                    <span className="sub">跟团游</span>
                    <img src={item.url} alt="" />
                  </div>
                  <div className="text">
                    <div
                      className="title"
                      onClick={this.goto.bind(this, item._id)}
                    >
                      {item.title}
                    </div>
                    <div className="money">
                      <span style={{ color: "#999" }}>{item.newday}</span>
                      <span style={{ color: "#f60" }}>
                        ￥<b style={{ fontSize: "18px" }}>{item.price}</b>起
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="moreTravel">
              <Link to="/list" style={{ color: "#00bf48" }}>
                查看更多
              </Link>
              <Icon type="right" size="md" color="#00bf48" />
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default HomeTravel;
