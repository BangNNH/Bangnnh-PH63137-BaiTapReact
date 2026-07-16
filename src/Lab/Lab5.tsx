import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Checkbox, Form, Input, message, Select } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface Story {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
    createdAt: string;
}
const Lab5 = () => {
    const navigate = useNavigate();
    /////Story mutation///////
    const storyMutation = useMutation({
        mutationFn: async (data: Story) => {
            const res = await axios.post(`http://localhost:3000/stories`, data);
            return res.data;
        },
        onSuccess: () => {
            message.success("Thêm thành công ")
            navigate("/lesson4")
        },
        onError: () => {
            message.error("Thêm thất bại ")
        }
    })

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/categories");
            return res.data;
        }
    })

    const onFinish = (value: Story) => {
        storyMutation.mutate(value)
    }
    /////category mutation///////
    const categoryMutation = useMutation({
        mutationFn: async (data) => {
            const res = await axios.post(`http://localhost:3000/categories`, data)
            return res.data
        },
        onSuccess: () => {
            message.success("Thêm danh mục thành công");
        },
        onError: () => {
            message.error("Thêm danh mục thất bại");
        }

    })
    const addCategory = (value: any) => {
        categoryMutation.mutate(value);
    }
    return (
        <div>
            <h2>Thêm truyện</h2>
            <Form onFinish={onFinish} >
                <Form.Item label="title" name='title'>
                    <Input type="text" placeholder="title" />
                </Form.Item>
                <Form.Item label="author" name='author'>
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
                <Button htmlType='submit' type="primary">
                    Submit
                </Button>
            </Form>

            <h2>Thêm danh mục truyện</h2>
            <Form initialValues={{ active: false, }} onFinish={addCategory} >
                <Form.Item label="title" name='title'>
                    <Input type="text" placeholder="title" />
                </Form.Item>
                <Form.Item label="description" name='description'>
                    <Input.TextArea placeholder="description" />
                </Form.Item>
                <Form.Item
                    label="Active"
                    name="active"
                    valuePropName="checked"
                >
                    <Checkbox />
                </Form.Item>
                <Button htmlType='submit' type="primary" loading={categoryMutation.isPending}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Lab5