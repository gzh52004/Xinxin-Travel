import React from "react";
import Title from "../../components/title/index";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const User = function () {
  return (
    <div>
      <Title></Title>
      <Button type="primary" icon={<SearchOutlined />}>
        新增
      </Button>
    </div>
  );
};

export default User;
