
import React from "react";
import {Button, DatePicker, Form, Input,Spin} from "antd";
import "./BookAppointment.css";

class bookAppointment extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            mdate:'',
            loading:false
        }
        this.mydChangeHandler=this.mydChangeHandler.bind(this);
        this.myChangeHandler=this.myChangeHandler.bind(this);


    }
    myChangeHandler = (event) => {
        this.setState({firstname: event.target.value});
        console.log(this.state.firstname);

    }

    mydChangeHandler = (event,b) => {
        this.setState({mdate:b})
        console.log(this.state.mdate)
    }


    handleSubmit=()=>{

        this.setState({loading:true});
    }
    render() {
        const container=(
            <Form
                className="appointment-form"
                onFinish={this.onFinish}>


                <Form.Item name="Firstname" rules={[{required:true}]}>
                    <Input size="large" name="firstname" placeholder="Firstname"/>
                </Form.Item>

                <Form.Item   name="lastname"  rules={[{required:true}]} >
                    <Input    size="large"  name="lastname" placeholder="enter lastname"/>
                </Form.Item>

                <Form.Item  name="Select date" rules={[{required:true}]}>
                    <DatePicker size="large" name="Book Date" placeholder="Select date" onChange={this.mydChangeHandler}/>
                </Form.Item>
                <Form.Item >
                    <Button size="large" className="appointment-form-button"  onClick={this.handleSubmit} shape="round" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )

        return (
            <div className="appointment-container">
                <Spin spinning={this.state.loading} delay={500}>
                    {container}
                </Spin>
            </div>
        );
    }
}

export default bookAppointment;
