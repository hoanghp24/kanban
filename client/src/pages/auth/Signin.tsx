import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;

const SignIn = () => {
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
          <Title level={2}>Sign in to your account</Title>
          <Paragraph type="secondary">
            Welcome back! Please enter your details.
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSignIn}
          disabled={isLoading}
          size="large"
        >
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
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              maxLength={100}
              type="password"
            />
          </Form.Item>
        </Form>

        <div className="row">
          <div className="col">
            <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember me
            </Checkbox>
          </div>
          <div className="col text-right">
            <Link to={"/"}>Forgot password?</Link>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{
              width: "100%",
            }}
            size="large"
          >
            Sign in
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-3 text-center">
          <Space>
            <Text type="secondary">Don't have an acount? </Text>
            <Link to={"/signup"}>Sign up</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignIn;
