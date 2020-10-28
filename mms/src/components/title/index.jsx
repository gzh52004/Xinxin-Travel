import React from "react";
import { Breadcrumb } from "antd";
import "./title.scss";

const Title = function () {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item className="line">组件</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Title;
