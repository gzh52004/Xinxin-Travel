import React from "react";
import { NavBar, Icon, Menu, ActivityIndicator } from "antd-mobile";
import { withRouter } from "react-router-dom";
import request from "@/utils/request";

// const data = [
//   {
//     value: "1",
//     label: "热门",
//     children: [
//       {
//         label: "广州长隆欢乐世界",
//         value: "1",
//       },
//       {
//         label: "东部华侨城",
//         value: "2",
//       },
//       {
//         label: "白云山",
//         value: "3",
//       },
//       {
//         label: "锦绣中华民俗村",
//         value: "4",
//       },
//       {
//         label: "小梅沙度假村",
//         value: "5",
//       },
//     ],
//   },
// ];
@withRouter
class List extends React.Component {
  // 返回事件
  goback = () => {
    this.props.history.goBack();
  };

  //   // 二级下拉菜单
  //   constructor(...args) {
  //     super(...args);
  //   }
  //   onChange = (value) => {
  //     let label = "";
  //     data.forEach((dataItem) => {
  //       if (dataItem.value === value[0]) {
  //         label = dataItem.label;
  //         if (dataItem.children && value[1]) {
  //           dataItem.children.forEach((cItem) => {
  //             if (cItem.value === value[1]) {
  //               label += ` ${cItem.label}`;
  //             }
  //           });
  //         }
  //       }
  //     });
  //     console.log(label);
  //   };
  //   handleClick = (e) => {
  //     e.preventDefault(); // Fix event propagation on Android
  //     this.setState({
  //       show: !this.state.show,
  //     });
  //     // mock for async data loading
  //     if (!this.state.initData) {
  //       setTimeout(() => {
  //         this.setState({
  //           initData: data,
  //         });
  //       }, 500);
  //     }
  //   };

  //   onMaskClick = () => {
  //     this.setState({
  //       show: false,
  //     });
  //   };
  //   列表数据
  state = {
    aroundList: [],
  };
  async componentDidMount() {
    // 周边游
    const { data: aroundList } = await request.get("/goods/zhoubian/list", {
      params: {
        page: 1,
        pagesize: 15,
      },
    });
    this.setState({
      aroundList: aroundList.data,
    });
  }
  goto = (id) => {
    this.props.history.push("/listdetail/" + id);
  };
  render() {
    const { aroundList } = this.state;
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="foo-menu"
        data={initData}
        value={["1", "3"]}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div
        style={{
          width: "100%",
          height: document.documentElement.clientHeight * 0.6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div>
        {/* 1 */}
        <div>
          <NavBar
            mode="light"
            style={{ backgroundColor: "#00bf49", color: "#fff" }}
            icon={<Icon type="left" />}
            onLeftClick={this.goback}
            rightContent={[<Icon key="1" type="ellipsis" />]}
          >
            广州本地游
          </NavBar>
        </div>
        {/* 2 */}
        {/* <div className={show ? "menu-active" : ""}>
          <div>
            <NavBar
              leftContent="目的地"
              mode="light"
              style={{
                width: "125px",
                height: "46.5px",
                fontSize: "12px",
                color: "black",
              }}
              icon={<Icon type="down" />}
              onLeftClick={this.handleClick}
              className="top-nav-bar"
            ></NavBar>
          </div>
          {show ? (initData ? menuEl : loadingEl) : null}
          {show ? (
            <div className="menu-mask" onClick={this.onMaskClick} />
          ) : null}
        </div> */}
        {/* 3 */}
        <div className="travel">
          <div
            style={{
              display: "block",
              height: "100%",
              backgroundColor: "#fff",
              paddingBottom: "50px",
            }}
          >
            {aroundList.map((item) => {
              return (
                <div className="tuwen" key={item._id}>
                  <div className="pic">
                    <span className="sub">跟团游</span>
                    <img src={item.url} alt="" />
                  </div>
                  <div className="text">
                    <div
                      className="title"
                      onClick={this.goto.bind(this, item._id)}
                    >
                      {item.title}
                    </div>
                    <div className="money">
                      <span style={{ color: "#999" }}>{item.newday}</span>
                      <span style={{ color: "#f60" }}>
                        ￥<b style={{ fontSize: "18px" }}>{item.price}</b>起
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
