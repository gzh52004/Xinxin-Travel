import React, { useState } from "react";
import Title from "../../components/title/index";
import {
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  TreeSelect,
  Table,
  Space,
} from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
import request from "../../utils/request";

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
  const [bottom] = useState("bottomCenter");
  const [visible, setVisible] = useState(false);
  const [userlist, setuserlist] = useState(0);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  React.useEffect(() => {
    request
      .get("/user/list", {
        params: {
          page: 1,
          pagesize: 10,
        },
      })
      .then((res) => {
        setuserlist(res.data.data);
      });
  }, []);
  const onSearch = (value) => {
    const dayscount = userlist.filter((num) => {
      return num.username === value;
    });
    setuserlist(dayscount);
  };
  const ondel = () => {
    console.log(564);
  };
  const columns = [
    {
      title: "用户名",
      dataIndex: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "密码",
      dataIndex: "password",
    },
    {
      title: "删除",
      // key: 'action',
      render: () => (
        <Space size="middle" onClick={ondel}>
          <a>删除数据</a>
        </Space>
      ),
    },
  ];
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
          maxLength={15}
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
      <div>
        <Table
          rowKey={(userlist) => userlist._id}
          columns={columns}
          pagination={{
            position: [bottom],
            defaultCurrent: 1,
            pageSize: 4,
          }}
          dataSource={userlist}
        />
      </div>
    </div>
  );
};

export default User;
