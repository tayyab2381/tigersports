import React, { useState } from "react";
import { Typography, Button, Divider, Progress, Row, Col, Flex } from "antd";

const { Title, Text } = Typography;

const ObjectiveComponent = () => {
  const [toggle, setToggle] = useState("budget");
  const percentage = 25;
  const currentValue = 2300;
  const totalValue = 9200;

  return (
    <div className="objective-class">
      <Row>
        <Col span={24}>
          <Title level={4} style={{ color: "#f5222d" }}>
            Objectives
          </Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }}>
        <Button.Group>
          <Button
            type={toggle === "budget" ? "primary" : "default"}
            onClick={() => setToggle("budget")}
          >
            budget
          </Button>
          <Button
            type={toggle === "quantity" ? "primary" : "default"}
            onClick={() => setToggle("quantity")}
          >
            quantity
          </Button>
        </Button.Group>
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }}>
        <Progress type="circle" percent={percentage} strokeColor="#f5222d" />
      </Row>
      <Flex justify="center">
        <Title level={5}  style={{ color: "#f5222d" }}>
          ₹ {currentValue}
        </Title>
      </Flex>
      <Divider />
      <Flex justify="center">
        <Title level={5} type="secondary text-style">
          out of {totalValue}
        </Title>
      </Flex>
    </div>
  );
};

export default ObjectiveComponent;
