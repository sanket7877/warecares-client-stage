
import React from "react";
import {Button, DatePicker, Form, Input} from "antd";

class bookAppointment extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            date:''
        }
    }
    myChangeHandler = (event) => {
        this.setState({firstname: event.target.value});
        console.log(this.state.firstname);

    }

    mydChangeHandler = (event,b) => {
       // console.log(b);
        let da=b;
        this.setState({date:b});
        console.log(this.state.date);
    }


    render() {
        return (
            <div>
                <Form   wrapperCol={{ span: 3}}   name="control-ref" onFinish={this.onFinish}>
                    <Form.Item name="firstname" label="Firstname" rules={[{ required: true }]}>
                        <Input name="firstname" onChange={this.myChangeHandler}/>
                    </Form.Item>

                    <Form.Item name="lastname" label="lastname" rules={[{required:true}]}>
                        <input name="lastname"/>
                    </Form.Item>
                    <Form.Item name="date" label="Book Date" rules={[{required:true}]}>
                        <DatePicker onChange={this.mydChangeHandler}/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                <h1>{this.state.firstname}</h1>
                <h2>{this.state.date}</h2>

            </div>
        );
    }
}
export default bookAppointment;
