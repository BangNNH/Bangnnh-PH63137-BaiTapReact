import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];

const data = [
  {
    key: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  {
    key: 2,
    name: "Anna Smith",
    email: "anna@example.com",
    role: "User",
  },
  {
    key: 3,
    name: "David Lee",
    email: "david@example.com",
    role: "Manager",
  },
];

export default function DemoTable() {
  return <Table columns={columns} dataSource={data} />;
}