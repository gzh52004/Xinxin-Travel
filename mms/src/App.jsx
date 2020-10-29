import React from "react";

import {
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
  withRouter,
} from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Row, Col, Button } from "antd";
const { Header, Sider, Content } = Layout;
import User from "./views/User";
import Login from "./views/Login";
import Reg from "./views/Reg";
import Goods from "./views/goods";

import "antd/dist/antd.css";
import "./App.scss";

@withRouter
class App extends React.Component {
  state = {
    menu: [
      {
        text: "用户列表",
        path: "/user",
        name: "user",
        component: User,
      },

      {
        text: "商品列表",
        path: "/goods",
        name: "goods",
        component: Goods,
      },
    ],

    current: "/user",
    collapsed: false,
  };
  changeMenu = ({ key }) => {
    this.props.history.push(key);
    this.setState({
      current: key,
    });
  };
  goto = (path) => {
    this.props.history.push(path);
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  UNSAFE_componentWillMount() {
    // history,location,match
    const { pathname } = this.props.location;
    this.setState({
      current: pathname,
    });
  }
  render() {
    const { menu, current } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"></div>
          <Menu
            style={{ textAlign: "center" }}
            mode="vertical"
            theme="dark"
            onClick={this.changeMenu}
            selectedKeys={[current]}
          >
            {menu.map((item) => (
              <Menu.Item key={item.path} icon={item.icon} title={item.text}>
                {item.text}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            <div className="btns">
              <Button type="link" onClick={this.goto.bind(this, "/reg")}>
                注册
              </Button>
              <Button type="link" onClick={this.goto.bind(this, "/login")}>
                登录
              </Button>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              height: 1000,
            }}
          >
            <Layout.Content>
              <Switch>
                {menu.map((item) => (
                  <Route
                    key={item.name}
                    path={item.path}
                    component={item.component}
                  />
                ))}

                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/notfound" render={() => <div>404</div>} />
                <Redirect from="/" to="/user" exact />
                <Redirect to="/notfound" />
              </Switch>
            </Layout.Content>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
