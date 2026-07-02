import { Button, Table } from "antd";
import { Image } from "antd";

///////////////////////////// BÀI 1 /////////////////////////////
const StudentColumns = [
    {
        title: "ID",
        dataIndex: "id"
    },
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Age",
        dataIndex: "age"
    },
    {
        title: "Major",
        dataIndex: "major"
    },
];

const StudentData = [
    {
        key: "1",
        id: 1,
        name: "Nam",
        age: 20,
        major: "IT",
    },
    {
        key: "2",
        id: 2,
        name: "Linh",
        age: 21,
        major: "Business",
    },
    {
        key: "3",
        id: 3,
        name: "Hà",
        age: 19,
        major: "Design",
    },
];


///////////////////////////// BÀI 2 /////////////////////////////
const ProductsColumns = [
    {
        title: "ID",
        dataIndex: "id"
    },
    {
        title: "ProductName",
        dataIndex: "productName"
    },
    {
        title: "Price",
        dataIndex: "price"
    },
    {
        title: "Category",
        dataIndex: "category"
    },
];

const ProductsData = [
    {
        key: "1",
        id: 1,
        productName: "Iphone 12 pro",
        price: 20000000,
        category: "phone",
    },
    {
        key: "2",
        id: 2,
        productName: "Laptop dell",
        price: 30000000,
        category: "laptop",
    },
    {
        key: "3",
        id: 3,
        productName: "Iphone 15 pro",
        price: 220000000,
        category: "phone",
    },
    {
        key: "4",
        id: 4,
        productName: "Laptop asus",
        price: 32000000,
        category: "laptop",
    },
    {
        key: "5",
        id: 5,
        productName: "Iphone 16",
        price: 220000000,
        category: "phone",
    },

];

///////////////////////////// BÀI 3 /////////////////////////////
const UsersColumns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Avatar",
        dataIndex: "avatar",
        render: (avatar: string) => <Image width={50} src={avatar} />
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (value: string) => (
            <span className={value === "Active" ? "text-green-500" : "text-red-500"}>
                {value}
            </span>
        )
    },
    {
        title: "Action",
        dataIndex: "action",
        render: () => (
            <>
                <Button color="primary" variant="solid">
                    Edit
                </Button>
                <Button color="danger" variant="solid">
                    Delete
                </Button>
            </>
        ),
    },
];

const usersData = [
    {
        key: "1",
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "https://i.pravatar.cc/100?img=1",
        email: "nguyenvana@example.com",
        status: "Active",
    },
    {
        key: "2",
        id: 2,
        name: "Trần Thị B",
        avatar: "https://i.pravatar.cc/100?img=2",
        email: "tranthib@example.com",
        status: "Inactive",
    },
    {
        key: "3",
        id: 3,
        name: "Lê Văn C",
        avatar: "https://i.pravatar.cc/100?img=3",
        email: "levanc@example.com",
        status: "Active",
    },
    {
        key: "4",
        id: 4,
        name: "Phạm Thị D",
        avatar: "https://i.pravatar.cc/100?img=4",
        email: "phamthid@example.com",
        status: "Inactive",
    },
];

const Lab2 = () => {
    return (
        <>
            <h1 >DANH SÁCH SINH VIÊN</h1>
            <Table columns={StudentColumns} dataSource={StudentData} />
            <h1 >DANH SÁCH SẢN PHẨM</h1>
            <Table columns={ProductsColumns} dataSource={ProductsData} pagination={{ pageSize: 3 }} />
            <h1 >DANH SÁCH NGƯỜI DÙNG</h1>
            <Table columns={UsersColumns} dataSource={usersData} pagination={{ pageSize: 3 }} />
        </>
    );
}

export default Lab2