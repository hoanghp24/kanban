import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();

  const handleSignIn = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <>
      <Card
        style={{
          width: "50%",
        }}
      >
        <div className="text-center">
          <img
            className="mb-3"
            src={
              "https://firebasestorage.googleapis.com/v0/b/kanban-a3404.appspot.com/o/kanban-logo.png?alt=media&token=3fa9daf1-4629-454c-a8e4-1d4970f903b1"
            }
            style={{ width: 48, height: 48 }}
            alt=""
          />
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">Start your 30-day free trial.</Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSignIn}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input
              placeholder="Enter your name"
              allowClear
              maxLength={100}
              type="name"
            />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              allowClear
              maxLength={100}
              type="email"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
              () => ({
                validator: (_, value) => {
                  if (value.length < 6) {
                    return Promise.reject(
                      new Error("Must be at least 6 characters.")
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Create a password"
              maxLength={100}
              type="password"
            />
          </Form.Item>
        </Form>

        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{
              width: "100%",
            }}
            size="large"
          >
            Get started
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text type="secondary">Already have an account? </Text>
            <Link to={"/"}>Sign in</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
