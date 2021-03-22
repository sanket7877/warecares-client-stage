import React from "react";
import {Button, Form, Input,notification,message} from "antd";
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import "./login.css";
import {login} from "../../service/ApiService";
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const ACCESS_TOKEN = 'accessToken';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            usernameOrEmail:'',
            password:'',
            token:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    changeUsernameHandler= (event) => {
        this.setState({usernameOrEmail: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("called");


                let loginRequest={
                    usernameOrEmail:this.state.usernameOrEmail,
                    password:this.state.password

                }
                login(loginRequest)
                    .then(response => {

                            this.setState({token:response.accessToken})
                            localStorage.setItem(ACCESS_TOKEN, this.state.token);
                         console.log(localStorage.getItem(ACCESS_TOKEN));
                        message.success("successfully logged in ",10);
                        this.props.history.push("/user/dashboard");


                    }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'Polling App',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });
                    }
                });
            }





    render(){
        return (
    <div>
            <div>
                <h1 align="center" >Login Form</h1>
            </div>
                <div className="login-container">
                <Form   className="login-form">
                    <Form.Item name="usernameOrEmail" rules={[{required:true}]}  >
                        <Input size="large" placeholder="Username" onChange={this.changeUsernameHandler} name="usernameOrEmail" prefix={<UserOutlined />}  />
                    </Form.Item>
                    <Form.Item name="password"  rules={[{required:true}]}  >
                        <Input size="large" placeholder="Password"  onChange={this.changePasswordHandler} name="password" type="password"  prefix={<LockOutlined />}  />
                    </Form.Item>

                    <Form.Item >
                        <Button size="large"   onClick={this.handleSubmit}  htmlType="submit" type="primary"  className="login-form-button" >
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
