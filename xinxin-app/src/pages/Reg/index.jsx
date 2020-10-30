import React from "react";
import { Form, Input, Button, message } from "antd";
import { NavBar, Icon } from "antd-mobile";
import request from "@/utils/request";
import SHA256 from "crypto-js/sha256";

import "./style.scss";

const Reg = (props) => {
  const rules = {
    username: [
      { required: true, message: "用户名不能为空!" },
      {
        async validator(rule, value) {
          if (!value) {
            return;
          }
          // 根据输入的用户名进行校验(是否已存在)
          const { data } = await request.get("/user/checkname", {
            params: {
              username: value,
            },
          });
          if (data.status === 200) {
            return Promise.resolve("用户名可以使用!");
          }
          return Promise.reject("用户名已存在!");
        },
      },
    ],
    password: [
      { required: true, message: "请输入密码!" },
      {
        min: 6,
        max: 12,
        message: "密码长度必须为6至12位字符",
      },
    ],
  };

  const onFinish = async (values) => {
    // 发送ajax注册
    values.password = SHA256(values.password).toString();
    console.log(values);
    const { data } = await request.post("/user/reg", values);
    if (data.status === 200) {
      message.success("恭喜！注册成功！");
    }
    // 跳转至登录页
    props.history.push({
      pathname: "/login",
      state: { username: values.username },
    });
  };

  return (
    <div>
      <NavBar
        style={{ backgroundColor: "#00bf49", color: "#fff" }}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => {
          props.history.goBack();
        }}
        rightContent={[<Icon key="0" type="ellipsis" />]}
      >
        注册
      </NavBar>

      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          hasFeedback
          rules={rules.username}
        >
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={rules.password}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Reg;
