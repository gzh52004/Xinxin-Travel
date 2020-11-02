import React from "react";
import SHA256 from "crypto-js/sha256";
import { Form, Input, Button, Checkbox, message } from "antd";

import request from "@/utils/request";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 11, span: 11 },
};

const rules = {
  username: [{ required: true, message: "请输入您的用户名" }],
  password: [{ required: true, message: "请输入您的密码" }],
};

const Login = function (props) {
  const onFinish = async (values) => {
    console.log("打印：", values);
    let { username, password, remember } = values;
    password = SHA256(values.password).toString();
    const { data } = await request.get("user/login", {
      params: {
        username,
        password,
      },
    });
    console.log("打印：", data);
    if (data.flag === true) {
      message.success("登录成功");
      props.history.push({
        pathname: "/user",
      });
    } else {
      message.error("登录失败，请检查用户名或密码是否正确");
    }

    if (values.remember) {
      localStorage.setItem("currentUser", JSON.stringify(data.data));
    } else {
      sessionStorage.setItem("currentUser", JSON.stringify(data.data));
    }
  };
  return (
    <div>
      <h1>用户登录</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={rules.username}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={rules.password}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>7天免登录</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
