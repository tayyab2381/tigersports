import { Input, Badge, Avatar } from "antd";
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const HeaderComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "10px 20px",
      }}
    >
      <Search
        placeholder="Search"
        enterButton={<SearchOutlined />}
        style={{ maxWidth: 300, backgroundColor: "#ffe8e0", borderRadius: 20 }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Badge count={20} style={{ backgroundColor: "#ff4d4f" }}>
          <BellOutlined style={{ fontSize: 24, color: "#000" }} />
        </Badge>
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{ marginLeft: 20 }}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
