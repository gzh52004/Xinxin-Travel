import React from "react";
import { NavBar, Icon, List, InputItem, Button, WhiteSpace } from "antd-mobile";
import SHA256 from "crypto-js/sha256";

import "./style.scss";
import ListItem from "antd-mobile/lib/list/ListItem";

class Reg extends React.Component {
  state = {
    username: "", //账号
    pwd: "", // 密码
  };
  // 返回上一页
  goback = () => {
    this.props.history.goBack();
  };
  // 绑定表单值
  handleChange(key, val) {
    this.setState({
      [key]: val,
    });
  }

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
        <List>
          <InputItem onChange={(value) => this.handleChange("username", value)}>
            用户名：
          </InputItem>
          <InputItem onChange={(value) => this.handleChange("pwd", value)}>
            密码：
          </InputItem>
          <WhiteSpace />
          <ListItem>
            <Button style={{ backgroundColor: "#f91", color: "#fff" }}>
              注册
            </Button>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Reg;
