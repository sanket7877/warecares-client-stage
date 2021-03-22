import React from 'react';
import {Button, Form, Input} from "antd";
import "./UserRegistration.css";
import {DatePicker} from "antd/es";

class UserRegistration extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            dob:''
        }
    }

    onChangeDateOfBirth=(m,date)=>{
        let a=date;
        this.setState(
            {dob:a});
    }

    render() {
        return (
            <div className="signup-container">
                <h1>User Registration </h1>
                <Form onFinish={this.onFinish} className="signup-form">
                    <Form.Item name="Firstname" rules={[{required:true}]}>
                        <Input size="large" name="firstname" placeholder="Firstname"/>
                    </Form.Item>
                    <Form.Item name="username" rules={[{required:true}]}  >
                        <Input size="large" placeholder="Username" name="username" />
                    </Form.Item>
                    <Form.Item name="Date of Birth" rules={[{required:true}]}>
                        <DatePicker size="large" placeholder="YYYY-MM-DD"
                            onChange={this.onChangeDateOfBirth}/>
                    </Form.Item>
                    <Form.Item name="Password" rules={[{required:true}]}  >
                        <Input type="password" size="large" placeholder="password" name="password"    />
                    </Form.Item>

                    <Form.Item name="email" rules={[{required:true}]}  >
                        <Input type="email" size="large" placeholder="email" name="email"        />
                    </Form.Item>
                    <Form.Item>
                        <Button  size="large" className="signup-form-button" type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
             </div>
        );
    }
}
export default UserRegistration;
