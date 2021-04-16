import React from 'react';
import {Button, Form, Input, message, Radio, Spin} from "antd";
import "./UserRegistration.css";
import {signup} from "../../../service/ApiService";


class UserRegistration extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            loading:false
        }
    }

    createUser=(value:any)=>
    {

        this.setState({loading:true})
            signup(value).then(response=>{
                this.setState({loading:false})
               message.success("Registration is Successful");
            }).catch(err=>{
                this.setState({loading:false})
                message.error(err.message);
           })
    }
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (

            <div className="signup-container">
                <Spin size="large" spinning={this.state.loading}>
                <h1>User Registration </h1>


                <Form onFinish={this.createUser} onFinishFailed={this.onFinishFailed} className="signup-form">
                    <Form.Item name="firstname" rules={[{required:true}]}>
                        <Input    size="large" name="firstname" placeholder="Firstname"/>
                    </Form.Item>
                    <Form.Item name="lastname" rules={[{required:true}]}  >
                        <Input size="large"  placeholder="lastname" name="lastname" />
                    </Form.Item>
                    <Form.Item name="username" rules={[{required:true}]}  >
                        <Input size="large"  placeholder="Username" name="username" />
                    </Form.Item>

                    <Form.Item name="m_no" rules={[{required:true,message:'mobile number is required.'}]}  >
                        <Input size="large"   placeholder="Mobile No" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{required:true}]}  >
                        <Input type="password"   size="large" placeholder="password" name="password"    />
                    </Form.Item>

                    <Form.Item name="gender" label="select Gender" rules={[{required:true}]}  >

                        <Radio.Group >
                            <Radio value={'male'}>Male</Radio>
                            <Radio value={'female'}>Female</Radio>
                        </Radio.Group>
                    </Form.Item>


                    <Form.Item name="email" rules={[{required:true}]}  >
                        <Input type="email"  size="large" placeholder="email" name="email"        />
                    </Form.Item>
                    <Form.Item>
                        <Button  size="large"  className="signup-form-button" type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>

                </Spin>

                  </div>
        );
    }
}
export default UserRegistration;
