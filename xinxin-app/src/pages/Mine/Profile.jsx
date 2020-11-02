import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavBar, Icon, Button } from "antd-mobile";
import {
  UserOutlined,
  ManOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import ListItem from "antd-mobile/lib/list/ListItem";

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
class Profile extends React.Component {
  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };
  render() {
    const { currentUser, logout } = this.props;
    return (
      <div>
        <NavBar
          style={{ backgroundColor: "#00bf49", color: "#fff" }}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.goback}
          rightContent={[<Icon key="0" type="ellipsis" />]}
        >
          我的账号
        </NavBar>
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
              <UserOutlined
                style={{ fontSize: "22.08px", marginRight: "6px" }}
              />
              用户名
            </span>

            {currentUser.username}
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
              <ManOutlined
                style={{ fontSize: "22.08px", marginRight: "6px" }}
                twoToneColor="red"
              />
              性别
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
              <GlobalOutlined
                style={{ fontSize: "22.08px", marginRight: "6px" }}
                twoToneColor="red"
              />
              城市
            </span>

            <Icon type="right" size="sm" />
          </Link>
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
              <PhoneOutlined
                style={{ fontSize: "22.08px", marginRight: "6px" }}
              />
              手机号码
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
              <MailOutlined
                style={{ fontSize: "22.08px", marginRight: "6px" }}
                twoToneColor="red"
              />
              电子邮箱
            </span>

            {currentUser.username}
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
              <LockOutlined
                style={{ fontSize: "22.08px", marginRight: "6px" }}
                twoToneColor="red"
              />
              修改密码
            </span>

            <Icon type="right" size="sm" />
          </Link>
        </div>
        <ListItem>
          <Button
            style={{
              backgroundColor: "#f91",
              color: "#fff",
              height: "40px",
              lineHeight: "40px",
            }}
            onClick={() => {
              logout();
            }}
          >
            退出登录
          </Button>
        </ListItem>
      </div>
    );
  }
}

export default Profile;
