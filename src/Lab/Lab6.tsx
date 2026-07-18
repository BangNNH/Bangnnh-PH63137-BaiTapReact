import React, { useEffect } from 'react'
import { Button, Form, Input, Layout, message, Select, Spin } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Story {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
    createdAt: string;
}

const Lab6 = () => {
    const [form] = Form.useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        }
    })

    const { data, isLoading } = useQuery({
        queryKey: ['story', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`)
            return res.data;
        }
    })

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data])

    const editMutation = useMutation({
        mutationFn: async (value: Story) => {
            return axios.put(`http://localhost:3000/stories/${id}`, value);
        },
        // Bài 6 dùng patch
        // mutationFn: async (value: Story) => {
        //     return axios.patch(`http://localhost:3000/stories/${id}`, {
        //         title: value.title
        //     });
        // },
        onSuccess: () => {
            // reload list
            queryClient.invalidateQueries({ queryKey: ["stories"] });
            message.success("Edit thành công")
            // quay lại list
            navigate("/lesson4");
        },
        onError: () => {
            message.error("Edit thất bại");
        },
    })
    const onFinish = (value: Story) => {
        editMutation.mutate(value)
    }
    if (isLoading) return <Spin />;
    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
            <h2>Edit truyện</h2>
            <Form form={form} layout='vertical' onFinish={onFinish} disabled={isLoading || editMutation.isPending}>
                <Form.Item
                    label="title"
                    name='title'
                    rules={[{ required: true, message: "Vui lòng nhập tên truyện" }]}>
                    <Input type="text" placeholder="title" />
                </Form.Item>
                <Form.Item
                    label="author"
                    name='author'
                    rules={[{ required: true, message: "Vui lòng nhập tên tác giả" }]}
                >
                    <Input type="text" placeholder="author" />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="categoryId"
                >
                    <Select
                        placeholder="Chọn danh mục"
                        options={categories
                            ?.filter((item: any) => item.active)
                            .map((item: any) => ({
                                value: item.id,
                                label: item.title,
                            }))}
                    />
                </Form.Item>
                <Form.Item label="description" name='description'>
                    <Input type="text" placeholder="description" />
                </Form.Item>
                <Form.Item label="image" name='image'>
                    <Input type="text" placeholder="image" />
                </Form.Item>
                <Button htmlType='submit' type="primary" loading={editMutation.isPending}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Lab6