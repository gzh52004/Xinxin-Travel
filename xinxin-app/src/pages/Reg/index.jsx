import React from "react";
import {
  NavBar,
  Icon,
  List,
  InputItem,
  Button,
  WhiteSpace,
  Toast,
} from "antd-mobile";
import SHA256 from "crypto-js/sha256";

import "./style.scss";
import ListItem from "antd-mobile/lib/list/ListItem";
import request from "../../utils/request";

class Reg extends React.Component {
  state = {
    userError: false,
    pwdError: false,
    buttonStatus: false,
    username: "", //账号
    pwd: "", // 密码
  };
  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };

  onErrorClick = () => {
    if (this.state.userError) {
      Toast.info("用户名不能为空，请输入至少6个字符");
    } else if (this.state.pwdError) {
      Toast.info("密码不能为空，请输入至少6个字符");
    }
  };

  // 用户名验证
  handleUser = (key, val) => {
    if (val.replace(/\s/g, "").length < 6) {
      this.setState({
        userError: true,
        buttonStatus: true,
      });
    } else {
      if (!val && val.length < 6) {
        return;
      }
      request
        .get("/user/checkname", {
          params: {
            username: val,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.flag == false) {
            Toast.fail("用户名已存在", 2);
            this.setState({
              userError: true,
              buttonStatus: true,
            });
            return;
          } else {
            Toast.success("用户名可以使用", 2);
            this.setState({
              userError: false,
              buttonStatus: false,
            });
          }
        });
    }
    this.setState({
      [key]: val,
    });
  };

  // 密码验证
  handlePwd = (key, val) => {
    if (val.replace(/\s/g, "").length < 6) {
      this.setState({
        pwdError: true,
        buttonStatus: true,
      });
    } else {
      this.setState({
        pwdError: false,
        buttonStatus: false,
      });
    }
    this.setState({
      [key]: val,
    });
  };

  handleSubmit = async () => {
    let { username, pwd } = this.state;
    pwd = SHA256(pwd).toString();
    const { data } = await request.post("/user/register", {
      params: {
        username,
        pwd,
      },
    });
    console.log(data);
    if (data.flag == true && data.code === 1) {
      Toast.success("注册成功！", 2);
      // 跳转至登录页
      this.props.history.push({
        pathname: "/login",
        state: { username: username },
      });
    } else {
      Toast.fail("出错了！请重试", 2);
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
          注册
        </NavBar>
        <List style={{ padding: "10px", marginTop: "10px" }}>
          <InputItem
            type="text"
            clear
            placeholder="账号"
            error={this.state.userError}
            onErrorClick={this.onErrorClick}
            onBlur={(value) => this.handleUser("username", value)}
          ></InputItem>
          <InputItem
            type="password"
            clear
            placeholder="密码"
            error={this.state.pwdError}
            onErrorClick={this.onErrorClick}
            onChange={(value) => this.handlePwd("pwd", value)}
          />
          <WhiteSpace />
          <ListItem>
            <Button
              disabled={this.state.buttonStatus}
              style={{ backgroundColor: "#f91", color: "#fff" }}
              onClick={this.handleSubmit.bind(this)}
            >
              确认注册
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Reg;
