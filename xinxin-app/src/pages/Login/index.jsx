import React from "react";
import { List, InputItem, Toast, NavBar, Icon } from "antd-mobile";

import "./style.scss";

class Login extends React.Component {
  state = {
    hasError: false,
    value: "",
  };

  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("Please enter 11 digits");
    }
  };

  onChange = (value) => {
    if (value.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
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
            onChange={this.onChange}
            value={this.state.value}
          />
          <InputItem
            type="password"
            placeholder="登录密码"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          />
        </List>
      </div>
    );
  }
}

export default Login;
