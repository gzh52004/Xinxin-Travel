import React from "react";
import {
  List,
  InputItem,
  Toast,
  NavBar,
  Icon,
  Button,
  WhiteSpace,
} from "antd-mobile";
import ListItem from "antd-mobile/lib/list/ListItem";
import { Link } from "react-router-dom";
import SHA256 from "crypto-js/sha256";
import { connect } from "react-redux";

import "./style.scss";
import request from "@/utils/request";

@connect()
class Login extends React.Component {
  state = {
    username: "", //账号
    pwd: "", // 密码
    hasError: false,
    buttonStatus: false,
  };

  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("账号密码不能为空");
    }
  };

  // 绑定表单值
  handleChange = (key, val) => {
    if (val == "" && val.length < 6) {
      this.setState({
        hasError: true,
        buttonStatus: true,
      });
    } else {
      this.setState({
        hasError: false,
        buttonStatus: false,
      });
    }
    this.setState({
      [key]: val,
    });
  };

  // 发送ajax登录
  handleSubmit = async () => {
    let { username, pwd } = this.state;
    pwd = SHA256(pwd).toString();
    const { data } = await request.get("/user/login", {
      params: {
        username,
        pwd,
      },
    });
    console.log(data);

    if (data.flag == true && data.code === 1) {
      // 把数据存入redux中
      this.props.dispatch({
        type: "login",
        user: data.data,
        token: data.token,
      });

      Toast.success("登录成功！", 2);
      // 跳转至首页
      this.props.history.push({
        pathname: "/home",
      });
    } else {
      Toast.fail("用户名或密码错误", 2);
    }
  };
  render() {
    return (
      <div>
        <NavBar
          style={{ backgroundColor: "#00bf49", color: "#fff" }}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={this.goback}
          rightContent={[<Icon key="0" type="ellipsis" />]}
        >
          欣欣账号登录
        </NavBar>
        <List style={{ padding: "10px", marginTop: "10px" }}>
          <InputItem
            type="text"
            placeholder="账号"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={(value) => this.handleChange("username", value)}
          />
          <InputItem
            type="password"
            placeholder="登录密码"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={(value) => this.handleChange("pwd", value)}
          />
          <WhiteSpace />
          <ListItem>
            <Button
              disabled={this.state.buttonStatus}
              style={{ backgroundColor: "#f91", color: "#fff" }}
              onClick={this.handleSubmit.bind(this)}
            >
              登录
            </Button>
            <p style={{ textAlign: "center" }}>
              <Link to="/reg" style={{ color: "#555", fontSize: "14px" }}>
                立即注册
              </Link>
              &emsp;|&emsp;
              <Link to="" style={{ color: "#555", fontSize: "14px" }}>
                忘记密码
              </Link>
            </p>
          </ListItem>
          <p style={{ textAlign: "center", fontSize: "12px" }}>
            登录即代表您同意我们的&nbsp;
            <a href="" style={{ color: "#2186DB" }}>
              服务协议
            </a>
            &nbsp;和&nbsp;
            <a href="" style={{ color: "#2186DB" }}>
              隐私政策
            </a>
          </p>
        </List>
      </div>
    );
  }
}

export default Login;
