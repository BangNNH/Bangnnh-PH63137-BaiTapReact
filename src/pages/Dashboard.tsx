import { Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
import DemoTable from "../components/DemoTable";
import DemoModal from "../components/DemoModal";

const { Header, Sider, Content } = Layout;

export function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          theme="dark"
          items={[
            {
              key: "dashboard",
              label: <Link to="/admin">Dashboard</Link>,
            },
            {
              key: "products",
              label: <Link to="/admin/products">Products</Link>,
            },
            {
              key: "users",
              label: <Link to="/admin/users">Users</Link>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ background: "#fff" }}>
          Admin Dashboard
        </Header>

        <Content style={{ padding: 24 }}>
          <DemoModal />
          <DemoTable />

        </Content>
      </Layout>
    </Layout>
  );
}