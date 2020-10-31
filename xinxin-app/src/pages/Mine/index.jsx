import React from "react";
import { withAuth } from "@/utils/hoc";

@withAuth
class Mine extends React.Component {
  render() {
    return <div>我的</div>;
  }
}

export default Mine;
