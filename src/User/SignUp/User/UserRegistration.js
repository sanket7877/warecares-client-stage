import React from 'react';
import {Button, Form, Input,message} from "antd";
import {  LoadingOutlined } from '@ant-design/icons';
import "./UserRegistration.css";

class UserRegistration extends React.Component{

    render() {
        return (
            <div className="signup-container">
                <h1>User Registration</h1>
                <Form onFinish={this.onFinish} className="signup-form">
                    <Form.Item name="Firstname" rules={[{required:true}]}>
                        <Input size="large" name="firstname" placeholder="Firstname"/>
                    </Form.Item>
                    <Form.Item name="username" rules={[{required:true}]}  >
                        <Input size="large" placeholder="Username" name="username"   />
                    </Form.Item>
                    <Form.Item>
                        <Button   size="large" className="signup-form-button" type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>

                <div className="header">
                    <h1>Chania</h1>
                </div>

                <div className="row">
                    <div className="col-3 col-s-3 menu">
                        <ul>
                            <li>The Flight</li>
                            <li>The City</li>
                            <li>The Island</li>
                            <li>The Food</li>
                        </ul>
                    </div>

                    <div className="col-6 col-s-9">
                        <h1>The City</h1>
                        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in
                            two parts, the old town and the modern city.</p>
                    </div>

                    <div className="col-3 col-s-12">
                        <div className="aside">
                            <h2>What?</h2>
                            <p>Chania is a city on the island of Crete.</p>
                            <h2>Where?</h2>
                            <p>Crete is a Greek island in the Mediterranean Sea.</p>
                            <h2>How?</h2>
                            <p>You can reach Chania airport from all over Europe.</p>
                        </div>
                    </div>
                    <div className="col-3 col-s-12">
                        <div className="aside">
                            <h2>What?</h2>
                            <p>Chania is a city on the island of Crete.</p>
                            <h2>Where?</h2>
                            <p>Crete is a Greek island in the Mediterranean Sea.</p>
                            <h2>How?</h2>
                            <p>You can reach Chania airport from all over Europe.</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default UserRegistration;
