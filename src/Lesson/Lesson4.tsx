import { Table, Image, Spin, Button, message, Space, Input } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Story {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
    createdAt: string;
}


const StoryList = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { data, isLoading, isError } = useQuery<Story[]>({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        },
    });

    const deleteStory = async (id: number) => {
        return axios.delete(`http://localhost:3000/stories/${id}`);
    };

    const deleteMutation = useMutation({
        mutationFn: deleteStory,
        onSuccess: () => {
            message.success("Xóa thành công");
            queryClient.invalidateQueries({
                queryKey: ["stories"],
            })
        },

        onError: () => {
            message.error("Xóa thất bại")
        }
    })

    const handleDelete = async (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa ?")) {
            deleteMutation.mutate(id);
        }
    }
    const handleEdit = async (id: number) => {
        navigate(`/lab6/${id}`);
    }

    const [searchText, setSearchText] = useState('');
    const filteredData = data?.filter((story) => story.title.toLowerCase().includes(searchText.toLowerCase()))

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (url: string) => <Image src={url} width={60} />,
        },
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Danh mục",
            dataIndex: "categoryId",
            render: (categoryId: number) => {
                return categories?.find(
                    (item: any) => item.id === categoryId
                )?.title;
            },
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_: any, record: Story) => (
                <>
                    <Button color="primary" variant="solid" onClick={() => handleEdit(record.id)}>
                        Edit
                    </Button>
                    <Link to={"/lab6/:id"}>
                        <Button color="danger" variant="solid" >
                            Delete
                        </Button>
                    </Link>
                </>
            )
        }
    ];

    if (isLoading) return <Spin />;

    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return <>
        <Space style={{ marginBottom: 16 }}>
            <Input
                placeholder="Tìm kiếm truyện..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 250 }}
            />
        </Space>

        <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{ pageSize: 5 }}
        />
    </>;
};

export default StoryList;