import React from "react";
import { Col, Flex, Divider, Typography } from "antd";
const { Title } = Typography;

const CardContainerSmall = (props) => {
  return (
    <Col
      className="gutter-row"
      span={12}
      // style={marginStyle}
    >
      <div className="small-container">
        <h2>{props.heading}</h2>
        <Flex align="start" justify="space-between" >
          <div  className="text-style">
            <Title level={1}>{props.number}</Title>
          </div>
          <div className="icon-style">{props.icon}</div>
        </Flex>
        <Divider />
        <h5 className="text-style">for today</h5>
      </div>{" "}
    </Col>
  );
};
export default CardContainerSmall;
