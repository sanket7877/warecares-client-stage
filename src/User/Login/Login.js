import React from "react";
import {Button, Form, Input} from "antd";
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import "./login.css"
class Login extends React.Component{

    render() {
        return (
    <div>
            <div>
                <h1 align="center" >Login Form</h1>
            </div>
                <div className="login-container">
                <Form onFinish={this.onFinish} className="login-form">
                    <Form.Item name="username" rules={[{required:true}]}  >
                        <Input size="large" placeholder="Username" name="username" prefix={<UserOutlined />}  />
                    </Form.Item>
                    <Form.Item name="password"  rules={[{required:true}]}  >
                        <Input size="large" placeholder="Password" name="password" type="password"  prefix={<LockOutlined />}  />
                    </Form.Item>

                    <Form.Item >
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button" >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                </div>
    </div>

        );
    }

}
export default Login;
