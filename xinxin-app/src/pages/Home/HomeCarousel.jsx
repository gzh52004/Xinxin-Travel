import React from "react";
import { Carousel } from "antd-mobile";

class HomeCarousel extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 187.5,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "https://s.cncnimg.cn/images/a/2020/jingquyuyue750x375.jpg",
          "https://s.cncnimg.cn/images/a/2020/jingquchonxinkaifang_750x375_20200410.png.png",
          "https://s.cncnimg.cn/images/a/2018/msysy_750x375_2019.01.24.jpg",
        ],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Carousel autoplay infinite>
          {this.state.data.map((val) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight,
              }}
            >
              <img
                src={val}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
