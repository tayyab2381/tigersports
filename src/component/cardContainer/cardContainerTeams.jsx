import React from "react";
import { Typography, Avatar, List, Button, Row, Col, Badge, Flex } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const { Title } = Typography;

const CardContainerTeam = (props) => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Title level={4} style={{ color: "#f5222d" }}>
            Teams
          </Title>
        </Col>
      </Row>

      {props.teamsList.map((details) => {
        return (
          <div className="team-container">
            <Flex justify="space-between">
              <div className="agent-style">{details.team}</div>
              <div>
                <Badge
                  count={details.tasks}
                  style={{ backgroundColor: "#f5222d" }}
                />
              </div>
            </Flex>

            <Flex justify="space-between" style={{ marginTop: "8px" }}>
              <div className="avatar-container">
                {<Avatar src={details.avatar} />} <span>{details.leader}</span>
              </div>
              <div>
                <UserOutlined />{" "}
                <span className="agent-style">{details.agents} Agents</span>
              </div>
            </Flex>
          </div>
        );
      })}

      <Flex justify="center" className="view-more">
        <Button type="link">
          <span className="heading-style text-style">View more</span>
          <DownOutlined />
        </Button>
      </Flex>
    </div>
  );
};

export default CardContainerTeam;
