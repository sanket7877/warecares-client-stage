import React from "react";
import {Button, Form, Input} from "antd";
import "./SignUp.css"

class SignUp extends React.Component{

    render() {
        return (
            <div>
                <div>
                    <h1 align="center" >Register Yourself.</h1>
                </div>
                <div className="signup-container">
                    <Form onFinish={this.onFinish} className="signup-form">
                            <Form.Item name="Firstname" rules={[{required:true}]}>
                                <Input size="large" name="firstname" placeholder="Firstname"/>
                            </Form.Item>
                        <Form.Item name="username" rules={[{required:true}]}  >
                            <Input size="large" placeholder="Username" name="username"   />
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" className="signup-form-button" type="primary" htmlType="submit">Register</Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        );
    }

}
export default SignUp;
