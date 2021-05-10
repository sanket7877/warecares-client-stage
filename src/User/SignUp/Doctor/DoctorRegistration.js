import React from 'react';
import {Form, Input, Row, Col, Button, message, Select} from "antd";
import "./DoctorRegistration.css"
import {Option} from "antd/lib/mentions";

class DoctorRegistration extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            name:'',
            status:''
        }
        this.handle=this.handle.bind(this);

    }

     prop = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };

     }
    handle(){
        this.setState({status:'validating'});
    }
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
                        <label style={{padding:'10px'}}>Email:</label>
                        <Form.Item name="email" style={{padding:"10px"}} hasFeedback validateStatus={this.state.status} rules={[{type:"email",required:true,message:'please enter your email'}]}>

                            <Input  placeholder="email" name="email" size="large" onChange={this.handle}/>
                        </Form.Item>
                    </div>
                    <label style={{padding:'10px'}}>Select Gender</label>
                    <Form.Item name="gender" style={{padding:"10px"}} rules={[{ required: true }]}>

                        <Select
                           size={"large"}
                            placeholder="Select your Gender"
                            allowClear>
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <label style={{padding:'10px'}}>Username</label>
                    <Form.Item name="username" hasFeedback validateStatus="success" style={{padding:"10px"}} rules={[{required:true,message:'Please enter username'}]}>

                            <Input placeholder="username" size={"large"} id="success"/>
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
