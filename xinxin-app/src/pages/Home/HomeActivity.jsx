import React from "react";

import { Flex } from "antd-mobile";

import activity1 from "@/assets/img/activity_1.png";
import activity2 from "@/assets/img/activity_2.png";
import activity3 from "@/assets/img/activity_3.png";
import activity4 from "@/assets/img/activity_4.png";

const HomeActivity = () => {
  return (
    <div className="activity">
      <Flex justify="around">
        <Flex.Item>
          <img src={activity1} style={{ width: "81.25px", height: "109.83" }} />
        </Flex.Item>
        <Flex.Item>
          <img src={activity2} style={{ width: "81.25px", height: "109.83" }} />
        </Flex.Item>
        <Flex.Item>
          <img src={activity3} style={{ width: "81.25px", height: "109.83" }} />
        </Flex.Item>
        <Flex.Item>
          <img src={activity4} style={{ width: "81.25px", height: "109.83" }} />
        </Flex.Item>
      </Flex>
    </div>
  );
};

export default HomeActivity;
