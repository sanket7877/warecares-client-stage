import React from 'react';
import {Form, Input, Row, Col, Button,message} from "antd";
import "./DoctorRegistration.css"

class DoctorRegistration extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:''
        }
    }
     prop = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    render() {
        return (
            <div className="doctor-container">
                <div>
                    <h1 align="center">Doctor Registration</h1>
                </div>
                <Form onFinish={this.onFinish} classname="doctor-form">
                     <Row>
                        <Col span={12}>
                            <div style={{padding:"10px"}}>
                                <label>Firstname:</label>
                                <Form.Item name="firstname" rules={[{required:true,message:'firstname is required'}]}>
                                    <Input placeholder="enter firstname" size="large" />
                                </Form.Item>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div style={{padding:"10px"}}>
                                <label>Lastname:</label>
                                 <Form.Item name="lastname" rules={[{required:true,message:'lastname is required'}]}>
                                    <Input placeholder="enter lastname" size="large"/>
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                    <div>

                        <Form.Item name="email" style={{padding:"10px"}} rules={[{type:"email",required:true,message:'please enter your email'}]}>
                            <label>Email:</label>
                            <Input  placeholder="email" name="email" size="large"/>
                        </Form.Item>
                    </div>

                    <Form.Item name="username" style={{padding:"10px"}} rules={[{required:true,message:'Please enter username'}]}>
                            <label>Username</label>
                            <Input placeholder="username" size="large"/>
                    </Form.Item>

                    <Form.Item name="password" style={{padding:"10px"}} rules={[{required:true,message:'Please enter password'}]}>
                        <label>Password</label>
                        <Input placeholder="password" size="large"/>
                    </Form.Item>
                    <Form.Item style={{padding:"10px"}}>
                        <Button   size="large" type="primary" className="doctor-form-button" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
       );
    }
}
export default DoctorRegistration;
