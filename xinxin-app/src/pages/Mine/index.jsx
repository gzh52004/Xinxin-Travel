import React from "react";
import { NavBar, Icon } from "antd-mobile";
import {
  MessageOutlined,
  BranchesOutlined,
  GlobalOutlined,
  SwitcherOutlined,
  DingdingOutlined,
  BankOutlined,
  StarTwoTone,
  EditTwoTone,
  SettingTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { withAuth } from "@/utils/hoc";
import "./style.scss";
import AVATAR from "../../assets/img/member_tx.png";

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatch,
    logout() {
      dispatch({ type: "logout" });
    },
  };
};
@connect(mapStateToProps, mapDispatchToProps)
@withAuth
class Mine extends React.Component {
  state = {
    list: [
      {
        text: "线路",
        name: "route",
        path: "/route",
        icon: <BranchesOutlined />,
      },
      {
        text: "定制游",
        name: "dingzhi",
        path: "/route",
        icon: <GlobalOutlined />,
      },
      {
        text: "门票",
        name: "ticket",
        path: "/route",
        icon: <SwitcherOutlined />,
      },
      {
        text: "机票",
        name: "plane",
        path: "/route",
        icon: <DingdingOutlined />,
      },
      {
        text: "酒店",
        name: "hotel",
        path: "/route",
        icon: <BankOutlined />,
      },
    ],
  };

  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };

  render() {
    const { list } = this.state;
    const { currentUser } = this.props;
    return (
      <div>
        <NavBar
          style={{ backgroundColor: "#00bf49", color: "#fff" }}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.goback}
          rightContent={[<Icon key="0" type="ellipsis" />]}
        >
          我的账户
        </NavBar>

        <div className="myAboutTop">
          <Link
            to=""
            style={{
              position: "absolute",
              zIndex: 5,
              right: "10px",
              top: "10px",
              width: "22px",
              height: "22px",
              color: "#fff",
              fontSize: "18px",
            }}
          >
            <MessageOutlined />
          </Link>
          <div className="avatar">
            <div className="img">
              <img src={AVATAR} alt="" />
            </div>
            <p style={{ fontSize: "12px" }}>Hi, {currentUser.username}</p>
          </div>
        </div>
        <div className="myOrder">
          <div className="tit">
            <span>我的订单</span>
            <Link
              to=""
              style={{
                display: "flex",
                alignItems: "center",
                color: "#666",
                fontSize: "14px",
                lineHeight: "16px",
                height: "16px",
              }}
            >
              全部订单
              <Icon type="right" size="sm" />
            </Link>
          </div>
          <div className="list">
            {list.map((item) => {
              return (
                <Link
                  to=""
                  key={item.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "72.69px",
                    height: "71.86px",
                    fontSize: "13.44px",
                    color: "#666",
                    padding: "13.48px 0px 9.6px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="myWallet">
          <div className="tit">
            <span>我的钱包</span>
          </div>
          <div className="list">
            <Link
              to=""
              style={{
                display: "block",
                flex: 1,
                fontSize: "13.44px",
                padding: "6px 0 6px",
                color: "#666",
              }}
            >
              <p>0</p>
              账户余额
            </Link>
            <Link
              to=""
              style={{
                display: "block",
                flex: 1,
                fontSize: "13.44px",
                padding: "6px 0 6px",
                color: "#666",
              }}
            >
              <p>500</p>
              积分
            </Link>
          </div>
        </div>
        <div className="IconList">
          <Link
            to=""
            style={{
              display: "flex",
              lineHeight: "42.23px",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#666",
            }}
          >
            <span>
              <StarTwoTone
                style={{ fontSize: "22.08px", marginRight: "3px" }}
                twoToneColor="orange"
              />
              收藏
            </span>

            <Icon type="right" size="sm" />
          </Link>
          <Link
            to=""
            style={{
              display: "flex",
              lineHeight: "42.23px",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#666",
              borderTop: "1px solid #ddd",
            }}
          >
            <span>
              <EditTwoTone
                style={{ fontSize: "22.08px", marginRight: "3px" }}
                twoToneColor="red"
              />
              我的评价
            </span>

            <Icon type="right" size="sm" />
          </Link>
        </div>
        <div className="mySet">
          <Link
            to="/profile"
            style={{
              display: "flex",
              lineHeight: "42.23px",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#666",
              borderTop: "1px solid #ddd",
            }}
          >
            <span>
              <SettingTwoTone
                style={{ fontSize: "22.08px", marginRight: "3px" }}
              />
              设置
            </span>

            <Icon type="right" size="sm" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Mine;
