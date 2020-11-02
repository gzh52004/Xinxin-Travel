import React from "react";
import CryptoJS from "crypto-js";
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
  username: [
    { required: true, message: "请输入您的用户名" },
    {
      async validator(rule, username) {
        if (!username) {
          return;
        }
        const { data } = await request.get("user/checkname", {
          params: {
            username: username,
          },
        });
        if (data.flag === true) {
          return Promise.resolve();
        }
        return Promise.reject("用户名已存在");
      },
    },
  ],
  password: [
    { required: true, message: "请输入您的密码" },
    { min: 6, max: 12, message: "密码格式不正确，必须为6-12位" },
  ],
};
const Reg = function (props) {
  const onFinish = async (values) => {
    values.password = CryptoJS.SHA256(values.password).toString();
    console.log("打印加密", values);
    const { data } = await request.post("user/register", values);
    if (data.flag === true) {
      message.success("注册成功");
    }
    props.history.push({
      pathname: "/login",
      state: { username: values.username },
    });
  };
  return (
    <div>
      <h1>权限注册</h1>
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Reg;
