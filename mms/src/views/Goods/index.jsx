import React from "react";
// import Title from "../../components/title/index";
import requestlist from '../../utils/requestlist'
import { Table, Tag, Radio, Space } from 'antd';



class Goods extends React.Component {
  state = {
    // top: 'topCenter',
    bottom: 'bottomCenter',
    datalist:[],

  };

  componentDidMount(){
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
      console.log(res.data.data,888)
      })
  }
   

    render() {
      const {datalist} = this.state;
      console.log(datalist,555)
      
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
          render:(text)=><img src={text}/>
        },
        {
          title: '天数',
          dataIndex: 'newday',
        },
      ];

      
      return (
        <div>
          <Table
            rowKey={datalist => datalist._id}
            columns={columns}
            pagination={{ position: [this.state.bottom],defaultCurrent:1,total:50,pageSize:5 }}
            dataSource={datalist}
          />
        </div>
      );
    }
  }

  export default Goods;
