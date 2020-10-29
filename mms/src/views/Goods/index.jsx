import React, { useState } from "react";
import { Button, Modal, Form, Input, DatePicker, TreeSelect } from "antd";
import Title from "../../components/title/index";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);
// 新增用户
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="新增商品"
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
        <Form.Item label="请输入商品名称">
          <Input />
        </Form.Item>

        <Form.Item label="请选择加入日期">
          <DatePicker />
        </Form.Item>

        <Form.Item label="请输入数量">
          <Input />
        </Form.Item>

        <Form.Item name={["user", "introduction"]} label="请输入商品描述">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Goods = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  return (
    <div>
      <Title></Title>
      <Search
        placeholder="请输入ID"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
        style={{ width: "200px", marginTop: "20px" }}
        maxLength={15}
      />
      <Search
        placeholder="请输入商品名称"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
        style={{ width: "200px", marginTop: "20px", marginLeft: "20px" }}
        maxLength={15}
      />
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => {
          setVisible(true);
        }}
        style={{
          backgroundColor: "#3CB371",
          marginLeft: "20px",
          marginTop: "20px",
          height: "40px",
        }}
        icon={<PlusOutlined />}
      >
        新增商品
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
          backgroundColor: "#FF6347",
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
  );
};

export default Goods;
