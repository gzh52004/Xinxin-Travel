import requestlist from '../../utils/requestlist'
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, TreeSelect } from "antd";
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



class Goods extends React.Component {
  state = {
    // top: 'topCenter',
    bottom: 'bottomCenter',
    datalist: [],

  };

  componentDidMount() {
    requestlist.get("/goods/zhoubian/list", {
      params: {
        page: 1,
        pagesize: 50,
      },
    })
      .then(res => {
        this.setState({
          datalist: res.data.data
        })
        console.log(res.data.data, 888)
      })
  }


  render() {
    const { datalist } = this.state;
    console.log(datalist, 555)
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
      console.log("Received values of form: ", values);
      setVisible(false);
    };
    const columns = [

      {
        title: '商品描述',
        dataIndex: 'title',
        render: text => <a>{text}</a>,
      },
      {
        title: '价格',
        dataIndex: 'price',
      },
      {
        title: '优惠',
        dataIndex: 'downprice',
      },
      {
        title: '展示图',
        dataIndex: 'url',
        render: (text) => <img src={text} />
      },
      {
        title: '天数',
        dataIndex: 'newday',
      },
    ];


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
        <Table
          rowKey={datalist => datalist._id}
          columns={columns}
          pagination={{ position: [this.state.bottom], defaultCurrent: 1, total: 50, pageSize: 5 }}
          dataSource={datalist}
        />
      </div>
    );
  }
}

export default Goods;
