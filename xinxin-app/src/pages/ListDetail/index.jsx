import React from "react";
import { NavBar, Icon } from "antd-mobile";
import request from "@/utils/request";
import "./index.scss";

class ListDetail extends React.Component {
  state = {
    arounddata: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    // 周边游查询
    const { data: arounddata } = await request.get(
      "/goods/zhoubian/single/" + id
    );

    this.setState({
      arounddata: arounddata.data,
    });
  }

  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };
  render() {
    const { arounddata } = this.state;
    console.log(arounddata);
    return (
      <div>
        <NavBar
          style={{ backgroundColor: "#00bf49", color: "#fff" }}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.goback}
          rightContent={[<Icon key="0" type="ellipsis" />]}
        >
          产品详情
        </NavBar>
        {arounddata.map((item) => {
          return (
            <div className="content" key={item._id}>
              <div className="ld_banner">
                <a href="">
                  <img src={item.url} alt="" style={{ width: "100%" }} />
                </a>
                <p>
                  <em className="fr">产品编号</em>
                  <span>跟团游</span>
                </p>
              </div>
              <div className="ld_top">
                <h1 className="ld_title">{item.title}</h1>
                <div className="bq">
                  <i>{item.newday}</i>
                </div>
                <div className="pricenum">
                  <span className="money">
                    <em>￥{item.downprice}</em>
                  </span>
                  <font className="not">￥{item.price}</font>
                </div>
              </div>
              <div className="ld_type">
                预订类型：
                <span>{item.title}</span>
                <font className="fr cor999">更多类型</font>
              </div>
              <div className="go_time">
                <div className="tit">出游日期</div>
                <ul className="time_li">
                  <li>
                    <div>
                      <a href="">
                        <p>11-01 周日</p>
                        <span>￥268</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <p>11-01 周日</p>
                        <span>￥268</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <p>11-01 周日</p>
                        <span>￥268</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <p>11-01 周日</p>
                        <span>￥268</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <p>11-01 周日</p>
                        <span>￥268</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <a href="">
                        <p>11-01 周日</p>
                        <span>￥268</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="jifen">
                本行程无购物，无自费，以您与旅行社签订的旅游合同为准
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListDetail;
