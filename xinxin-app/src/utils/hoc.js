import React from "react";
import { Redirect } from "react-router-dom";

export function withUser(MyComponent) {
  return function OuterComponent(props) {
    // 获取本地存储信息
    let currentUser = localStorage.getItem("currentUser");
    let Authorization = localStorage.getItem("Authorization");
    try {
      currentUser = JSON.parse(currentUser);
      Authorization = JSON.parse(Authorization);
    } catch (err) {
      currentUser = {};
      Authorization = {};
    }
    return (
      <MyComponent
        {...props}
        currentUser={currentUser}
        Authorization={Authorization}
      />
    );
  };
}
// 用户访问高阶组件 反向继承(只适用于类组件)
export function withAuth(InnerComponent) {
  @withUser
  class OuterComponent extends InnerComponent {
    render() {
      console.log(this.props);
      const {
        currentUser,
        Authorization,
        location: { pathname },
      } = this.props;
      if (currentUser && Authorization) {
        return super.render();
      } else {
        return <Redirect to={"/login?targetUrl=" + pathname} />;
      }
    }
  }
  return OuterComponent;
}
