import React, { useState } from "react";
import { Card, Button, Form, Input, Drawer } from "antd";

// npm install antd

const DrawerForm = () => {
  const [visible, setVisible] = useState(false);
  const [login, setIsLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const showDrawer = (type) => {
    if (type === "login") {
      setIsLogin(true);
    } else if (type === "signUp") {
      setSignUp(true);
    }
    setVisible(true);
  };

  const closeDrawer = () => {
    setSignUp(false);
    setIsLogin(false);
    setVisible(false);
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  return (
    <div className="container ml-5">
      <div className="row">
        <div style={{ padding: "30px", background: "#ececec" }}>
          <Card title="Welcome Back" bordered={false} style={{ width: 500 }}>
            <p>
              If you are member then{" "}
              <Button type="primary" onClick={() => showDrawer("login")}>
                Login
              </Button>{" "}
            </p>
            <p>
              Not Member?{" "}
              <Button
                type="primary"
                danger
                onClick={() => showDrawer("signUp")}
              >
                Sign Up
              </Button>{" "}
            </p>
          </Card>
        </div>
      </div>
      <Drawer
        title={login ? "User Login" : "Create a new Account"}
        width={500}
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button onClick={closeDrawer} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={closeDrawer} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form hideRequiredMark {...formItemLayout}>
          {login && (
            <>
              <Form.Item name="username" label="Username">
                <Input
                  placeholder="Please enter user name"
                  style={{ width: "70%" }}
                />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password
                  style={{ width: "70%" }}
                  placeholder="Please enter password"
                />
              </Form.Item>{" "}
            </>
          )}
          {signUp && (
            <>
              <Form.Item name="name" label="Name">
                <Input
                  placeholder="Please enter name"
                  style={{ width: "70%" }}
                />
              </Form.Item>
              <Form.Item name="username" label="Username">
                <Input
                  placeholder="Please enter user name"
                  style={{ width: "70%" }}
                />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password
                  style={{ width: "70%" }}
                  placeholder="Please enter password"
                />
              </Form.Item>{" "}
              <Form.Item name="confirm" label="Confirm Password">
                <Input.Password
                  style={{ width: "70%" }}
                  placeholder="Please confirm password"
                />
              </Form.Item>{" "}
            </>
          )}
        </Form>
      </Drawer>
    </div>
  );
};

export default DrawerForm;
