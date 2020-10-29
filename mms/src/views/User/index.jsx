import React, { useState } from "react";
import Title from "../../components/title/index";
import { Button, Modal, Form, Input, DatePicker, TreeSelect } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);
// 新增用户
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="新增用户"
      okText="提交"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item label="请输入姓名">
          <Input />
        </Form.Item>

        <Form.Item label="请选择性别">
          <TreeSelect
            treeData={[
              {
                title: "男",
                value: "man",
              },
              {
                title: "女",
                value: "woman",
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="请选择出生日期">
          <DatePicker />
        </Form.Item>

        <Form.Item label="请输入手机号">
          <Input />
        </Form.Item>

        <Form.Item name={["user", "introduction"]} label="请输入地址">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const User = function () {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  return (
    <div>
      <Title></Title>
      {/* 按钮组 */}
      <div>
        <Search
          placeholder="请输入姓名"
          allowClear
          enterButton
          size="large"
          onSearch={onSearch}
          style={{ width: "200px", marginTop: "20px" }}
          maxLength={4}
        />
        <Search
          placeholder="请输入性别"
          allowClear
          enterButton
          size="large"
          onSearch={onSearch}
          style={{ width: "200px", marginTop: "20px", marginLeft: "20px" }}
          maxLength={4}
        />
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            setVisible(true);
          }}
          style={{
            backgroundColor: "#32CD32",
            marginLeft: "20px",
            marginTop: "20px",
            height: "40px",
          }}
          icon={<PlusOutlined />}
        >
          新增用户
        </Button>
        <CollectionCreateForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
        <Button
          style={{
            backgroundColor: "#DAA520",
            marginLeft: "20px",
            marginTop: "20px",
            height: "40px",
            width: "110px",
            color: "white",
          }}
          icon={<RedoOutlined />}
        >
          重置
        </Button>
      </div>
    </div>
  );
};

export default User;
