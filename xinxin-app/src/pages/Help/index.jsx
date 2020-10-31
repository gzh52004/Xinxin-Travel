import React from "react";
import { NavBar, Icon, Menu, ActivityIndicator } from "antd-mobile";
import { RightOutlined } from "@ant-design/icons";
import "./Help.scss";

class Help extends React.Component {
  goback = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <div>
          <NavBar
            mode="light"
            style={{ backgroundColor: "#00bf49", color: "#fff" }}
            icon={<Icon type="left" />}
            onLeftClick={this.goback}
            rightContent={[<Icon key="1" type="ellipsis" />]}
          >
            帮助中心
          </NavBar>
        </div>
        <div className="panel_con_mt20">
          <div className="hd">游客中心</div>
          <div className="bd">
            <a href="">
              旅游产品名称解释
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>

            <a href="">
              特色服务
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>

            <a href="">
              常见问题
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>
            <a href="">
              争议解决规则
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>
          </div>
        </div>
        <div className="panel_con_mt21">
          <div className="hd">预订中心</div>
          <div className="bd_1">
            <a href="">
              如何预订旅游产品
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>

            <a href="">
              支付方式与发票
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>

            <a href="">
              旅游合同
              <span>
                {" "}
                <RightOutlined />
              </span>
            </a>
          </div>
        </div>
        <div className="foot">
          <p>欣欣旅游网手机版-m.cncn.com</p>
        </div>
      </div>
    );
  }
}

export default Help;
