import { Button, Card, Form, Input, InputNumber, Select } from "antd";
const { TextArea } = Input;
import { useState } from "react";

///////////////////////////// BÀI 1 /////////////////////////////
const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div style={{ width: 400, margin: "30px auto" }}>
            <h2>Đăng nhập</h2>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Email không được để trống",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Password không được để trống",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Login
                </Button>
            </Form>
        </div>
    );
};

///////////////////////////// BÀI 2 /////////////////////////////
const RegisterForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div style={{ width: 500, margin: "30px auto" }}>
            <h2>Đăng ký</h2>

            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Nhập tên",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Nhập email",
                        },
                        {
                            type: "email",
                            message: "Email không đúng định dạng",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: "Nhập số điện thoại",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Nhập password",
                        },
                        {
                            min: 6,
                            message: "Password tối thiểu 6 ký tự",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        {
                            required: true,
                            message: "Xác nhận password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error("Password không khớp")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" block>
                    Register
                </Button>
            </Form>
        </div>
    );
};

///////////////////////////// BÀI 3 /////////////////////////////
const ProductForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div style={{ width: 600, margin: "30px auto" }}>
            <h2>Thêm sản phẩm</h2>

            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Nhập tên sản phẩm",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Nhập giá",
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: "100%" }}
                        min={0}
                    />
                </Form.Item>

                <Form.Item
                    label="Số lượng"
                    name="quantity"
                    rules={[
                        {
                            required: true,
                            message: "Nhập số lượng",
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: "100%" }}
                        min={1}
                    />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

///////////////////////////// BÀI 4 /////////////////////////////
interface Post {
    id: number;
    title: string;
    category: string;
    slug: string;
    content: string;
    image: string;
}

const categories = [
    {
        value: "Technology",
        label: "Technology",
    },
    {
        value: "Education",
        label: "Education",
    },
    {
        value: "Fashion",
        label: "Fashion",
    },
    {
        value: "Sport",
        label: "Sport",
    },
];

const PostForm = () => {
    const [form] = Form.useForm();
    const [post, setPost] = useState<Post | null>(null);

    const onFinish = (values: Post) => {
        setPost(values);
        form.resetFields();
    };

    return (
        <div style={{ width: 700, margin: "30px auto" }}>
            <h2>Thêm bài viết</h2>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập title!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng chọn category!",
                        },
                    ]}
                >
                    <Select
                        placeholder="Chọn category"
                        options={categories}
                    />
                </Form.Item>

                <Form.Item
                    label="Slug"
                    name="slug"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập slug!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập content!",
                        },
                    ]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Image URL"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập Image URL!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>

            {post && (
                <Card title="Thông tin bài viết" style={{ marginTop: 30 }}>
                    <p>
                        <strong>Title:</strong> {post.title}
                    </p>

                    <p>
                        <strong>Category:</strong> {post.category}
                    </p>

                    <p>
                        <strong>Slug:</strong> {post.slug}
                    </p>

                    <p>
                        <strong>Content:</strong> {post.content}
                    </p>

                    <img
                        src={post.image}
                        alt={post.title}
                        width={200}
                    />
                </Card>
            )}
        </div>
    );
};

export const Lab3 = () => {
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-6">ĐĂNG NHẬP</h1>
            <LoginForm />
            <h1 className="text-center text-3xl font-bold my-6">ĐĂNG KÝ</h1>
            <RegisterForm />
            <h1 className="text-center text-3xl font-bold my-6">sẢN PHẨM</h1>
            <ProductForm />
            <h1 className="text-center text-3xl font-bold my-6">BÀI VIẾT</h1>
            <PostForm />
        </>
    )
}