import {
  DesktopOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 64,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          BANGBANG
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <ShoppingCartOutlined />,
              label: "Products",
            },
            {
              key: "3",
              icon: <InfoCircleOutlined />,
              label: "About",
            },
            {
              key: "4",
              icon: <MailOutlined />,
              label: "Contact",
            },
            {
              key: "5",
              icon: <DesktopOutlined />,
              label: "Dashboard",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#fff",
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Admin Dashboard
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
          }}
        >
          Nội dung trang
        </Content>

        <Footer style={{ textAlign: "center" }}>
          ©2026 WEB2081
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Sidebar;