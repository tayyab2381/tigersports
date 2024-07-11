import React from "react";
import {
  Typography,
  Input,
  Avatar,
  List,
  Button,
  Col,
  Row,
  Flex,
  Badge,
} from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { cardLargeList } from "@/constants/dashboard/dashboardConstants";
const { Title, Text } = Typography;

const CardContainerLarge = (props) => {
  return (
    <div>
      <Flex justify="space-between" align="top">
        <div className="main-head">
          <Title level={4} style={{ color: "#f5222d" }}>
            {props.title}
          </Title>
        </div>

        {props.for === "transactions" ? (
          <Text
            className="heading-style text-style"
            style={{
              marginTop: "8px",
            }}
          >
            {" "}
            {props.amount}
          </Text>
        ) : (
          <div className="main-head">
            <Title level={4} style={{ color: "#f5222d" }}>
              {props.amount}
            </Title>
          </div>
        )}
      </Flex>
      {props.for === "transactions" ? (
        <div className="main-head">
          <Title
            level={1}
            style={{
              color: "#f5222d",
              marginTop: "14px",
              marginBottom: "13px",
            }}
          >
            {props.head}
          </Title>
        </div>
      ) : (
        <Text
          className="heading-style"
          style={{ marginTop: 0, marginBottom: 0 }}
        >
          {props.head}
        </Text>
      )}
      {props.for === "transactions" ? (
        <div></div>
      ) : (
        <div style={{ marginTop: 5, marginBottom: 5 }}>
          <Input placeholder="Search" prefix={<SearchOutlined />} />
        </div>
      )}{" "}
      <Flex justify="space-between" style={{ marginBottom: 2 }}>
        <Text className="heading-style">Agent Name</Text>
        <Text className="heading-style">{props.subtitle}</Text>
      </Flex>
      <List
        itemLayout="horizontal"
        dataSource={props.itemList}
        renderItem={(item) => (
          <List.Item style={{ marginTop: -6, marginBottom: -6 }}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.name}
            />
            <div className="list-amount">
              {props.for === "revenues" ? (
                item.amount
              ) : props.for === "agents" ? (
                <Badge
                  className="site-badge-count-109"
                  count={item.leads}
                  style={{
                    backgroundColor: "#52c41a",
                  }}
                />
              ) : (
                item.transactions
              )}
            </div>
          </List.Item>
        )}
      />
      <Flex justify="center" className="view-more">
        <Button type="link">
          <span className="heading-style text-style">View more</span>
          <DownOutlined />
        </Button>
      </Flex>
    </div>
  );
};

export default CardContainerLarge;
