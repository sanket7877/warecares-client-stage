import React from "react";
import {Button, Form, Input, notification, message, Spin} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./login.css";
import {login} from "../../service/ApiService";

export const ACCESS_TOKEN = 'accessToken';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            loading: false,
            role: ''
        }
    }

    handleSubmit(value: any) {
        this.setState({loading: true})
        login(value)
            .then(response => {

                this.setState({token: response.accessToken, loading: false, role: response.role[0].name})

                localStorage.setItem(ACCESS_TOKEN, this.state.token);
                message.success("successfully logged in ", 10);

                this.props.onLogin();


            }).catch(error => {
                this.setState({loading: false})

                if (error.status === 401) {
                    this.props.history.push("/login");

                    notification.error({
                        message: 'Sorry',
                        description: 'Your Username or Password is incorrect. Please try again!'
                    });
                }
            }
        );
    }

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div>
                <div>
                    <h1 className="login-title">Please Login</h1>
                </div>

                <Spin spinning={this.state.loading}>
                    <div className="login-container">
                        <Form onFinish={this.handleSubmit} onFinishFailed={this.onFinishFailed} className="login-form">
                                <Form.Item name="usernameOrEmail"
                                           rules={[{required: true, message: 'please input your username or email '}]}>
                                    <Input size="large" placeholder="use username of email" name="usernameOrEmail"
                                           prefix={<UserOutlined/>}/>
                                </Form.Item>

                            <Form.Item name="password"
                                       rules={[{required: true, message: 'please input your password '}]}>
                                <Input.Password size="large" placeholder="Password" name="password" type="password"
                                       prefix={<LockOutlined/>}/>
                            </Form.Item>

                            <Form.Item>
                                <Button size="large" htmlType="submit" type="primary" className="login-form-button">
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default Login;
