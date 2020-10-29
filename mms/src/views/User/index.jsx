import React from "react";
import Title from "../../components/title/index";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const User = function () {
  return (
    <div>
      <Title></Title>
      <div>
        <Button
          type="primary"
          // icon={<ZoomInOutlined />}
          style={{ marginRight: "20px", marginLeft: "20px", marginTop: "20px" }}
        >
          查询
        </Button>
        <Button type="primary">
          新增
        </Button>
      </div>
      
    </div>
  );
};

export default User;
