"use client";
import React, { useState } from "react";
import { Input, Badge, Avatar, Flex, Dropdown } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  MenuFoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import ContentComponent from "../content/content";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/profile">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/settings">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);
const { Header, Sider, Content } = Layout;
const { Search } = Input;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        className="sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical">
          {/* <img
            src={puma}
            alt="logo"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: "100px",
              height: "100px",
              cursor: "pointer",
            }}
          /> */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
        <Menu
          theme="dark"
          className="ant-menu-container"
          //   mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "HOME",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "ABOUT",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "CONTACT",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Flex justify="space-between">
            <div>
              <h2>Tiger Sports</h2>
            </div>
            <div>
              <Flex style={{ margin: "13px" }}>
                <div>
                  <Input
                    style={{
                      backgroundColor: "#ffe8e0",
                      marginRight: "10px",
                      border: "none",
                      borderRadius: "12px",
                    }}
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <Badge count={20} style={{ backgroundColor: "#ff4d4f" }}>
                    <BellOutlined style={{ fontSize: 24, color: "#000" }} />
                  </Badge>
                  <Avatar
                    style={{ marginRight: "10px", marginLeft: "20px" }}
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                  />
                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    style={{ marginLeft: 20 }}
                  >
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{
                        marginLeft: -10,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <DownOutlined style={{ marginLeft: 8 }} />
                    </a>
                  </Dropdown>
                </div>{" "}
              </Flex>{" "}
            </div>
          </Flex>
        </Header>
        <Content
          style={{
            margin: "3px 16px",
            minHeight: 280,
            paddingBottom: "30px",
          }}
        >
          <ContentComponent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
