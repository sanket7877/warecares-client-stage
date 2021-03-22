import React from 'react';
import {Button, Form, Input, message, Radio} from "antd";
import "./UserRegistration.css";
import {signup} from "../../../service/ApiService";

class UserRegistration extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            username:'',
            gender:'',
            m_no:''

        }
    }

    createUser=(e)=>
    {
        e.preventDefault();
            let user={
                firstname: this.state.firstname,
                lastname:this.state.lastname,
                email:this.state.email,
                password:this.state.password,
                username:this.state.username,
                gender:this.state.gender,
                m_no:this.state.m_no
            }

            if(signup(user))
            message.success("registration is successful",5);

    }

    setFirstName=(event)=>{
        this.setState({firstname:event.target.value});
    }
    setLastName=(event)=>{
        this.setState({lastname:event.target.value});
    }
    setUsername=(event)=>{
        this.setState({username:event.target.value});
    }
    userMobile=(event)=>{
        this.setState({m_no:event.target.value});
    }
    setGender=(event)=>{
        this.setState({gender:event.target.value});
    }
    setEmail=(event)=>{
        this.setState({email:event.target.value});
    }

    setPassword=(event)=>{
        this.setState({password:event.target.value});
    }

    onFinish = (values: any) => {
        console.log('Success:', values);
    };
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="signup-container">
                <h1>User Registration </h1>
                <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} className="signup-form">
                    <Form.Item name="Firstname" rules={[{required:true}]}>
                        <Input   onChange={this.setFirstName} size="large" name="firstname" placeholder="Firstname"/>
                    </Form.Item>
                    <Form.Item name="lastname" rules={[{required:true}]}  >
                        <Input size="large" onChange={this.setLastName} placeholder="lastname" name="lastname" />
                    </Form.Item>
                    <Form.Item name="username" rules={[{required:true}]}  >
                        <Input size="large" onChange={this.setUsername} placeholder="Username" name="username" />
                    </Form.Item>

                    <Form.Item name="Mobile No" rules={[{required:true}]}  >
                        <Input size="large"  onChange={this.userMobile} placeholder="Mobile No"  />
                    </Form.Item>

                    <Form.Item name="Password" rules={[{required:true}]}  >
                        <Input type="password" onChange={this.setPassword}  size="large" placeholder="password" name="password"    />
                    </Form.Item>

                    <Form.Item name="Select Gender" label="select Gender" rules={[{required:true}]}  >

                        <Radio.Group onChange={this.setGender}>
                            <Radio value={'male'}>Male</Radio>
                            <Radio value={'female'}>Female</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <Form.Item name="email" rules={[{required:true}]}  >
                        <Input type="email" onChange={this.setEmail} size="large" placeholder="email" name="email"        />
                    </Form.Item>
                    <Form.Item>
                        <Button  size="large" onClick={this.createUser} className="signup-form-button" type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>

             </div>
        );
    }
}
export default UserRegistration;
