import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import request from "@/utils/request";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Reg = function () {
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
  const onFinish = (values) => {
    request.post(user)
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>7天免登录</Checkbox>
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
