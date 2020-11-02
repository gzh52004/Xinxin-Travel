import React from "react";
import { TabBar } from "antd-mobile";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  HomeFilled,
  AppstoreFilled,
  QuestionCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import Loadable from "@/utils/Loading";

import "@/assets/scss/TabBarFooter.scss";

const Home = Loadable(() => import("@/pages/Home"));
const Category = Loadable(() => import("@/pages/Category"));
const Help = Loadable(() => import("@/pages/Help"));
const Mine = Loadable(() => import("@/pages/Mine"));
const Reg = Loadable(() => import("@/pages/Reg"));
const Login = Loadable(() => import("@/pages/Login"));
const List = Loadable(() => import("@/pages/List"));
const ListDetail = Loadable(() => import("@/pages/ListDetail"));
const Profile = Loadable(() => import("@/pages/Mine/Profile"));

@withRouter
class TabBarFooter extends React.Component {
  state = {
    menu: [
      {
        text: "首页",
        path: "/home",
        name: "home",
        component: Home,
        icon: <HomeFilled />,
      },
      {
        text: "分类",
        path: "/category",
        name: "category",
        component: Category,
        icon: <AppstoreFilled />,
      },
      {
        text: "帮助中心",
        path: "/help",
        name: "help",
        component: Help,
        icon: <QuestionCircleFilled />,
      },
      {
        text: "我的",
        path: "/mine",
        name: "mine",
        component: Mine,
        icon: <UserOutlined />,
      },
    ],
    selectedTab: this.props.location.pathname,
  };

  componentWillReceiveProps(nextprops) {
    console.log("路由改变了");
  }

  render() {
    const { menu } = this.state;
    return (
      <div>
        <div className="TabBar">
          <TabBar
            tintColor="#00bf48"
            barTintColor="white"
            noRenderContent={true}
          >
            {menu.map((item) => (
              <TabBar.Item
                title={item.text}
                key={item.name}
                icon={
                  <div
                    style={{ width: "22px", height: "22px", fontSize: "18px" }}
                  >
                    {item.icon}
                  </div>
                }
                selectedIcon={
                  <div
                    style={{ width: "22px", height: "22px", fontSize: "18px" }}
                  >
                    {item.icon}
                  </div>
                }
                selected={this.state.selectedTab === item.path}
                onPress={() => {
                  this.props.history.push(item.path);
                  this.setState({
                    selectedTab: item.path,
                  });
                }}
                data-seed="logId"
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>

        <Switch>
          {menu.map((item) => {
            return (
              <Route
                key={item.name}
                path={item.path}
                component={item.component}
              />
            );
          })}
          <Route path="/reg" component={Reg} />
          <Route path="/login" component={Login} />
          <Route path="/list" component={List} />
          <Route path="/listdetail/:id" component={ListDetail} />
          <Route path="/profile" component={Profile} />
          <Route path="/notfound" render={() => <div>404 Not Found</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    );
  }
}

export default TabBarFooter;
