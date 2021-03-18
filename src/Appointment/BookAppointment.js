
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
                <Form
                    {...formItemLayout}
                    onFinish={this.onFinish}>


                    <Form.Item   name="Firstname" label="Firstname" rules={[{required:true}]} >
                        <input  name="Firstname"/>
                    </Form.Item>

                    <Form.Item   name="lastname" label="lastname" rules={[{required:true}]} >
                        <input  name="lastname"/>
                    </Form.Item>

                    <Form.Item name="Book date" label="Book Date" rules={[{required:true}]}>
                        <DatePicker onChange={this.mydChangeHandler}/>
                    </Form.Item>
                    <Form.Item >
                        <Button {...formItemLayout}  shape="round" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>


            </div>
        );
    }
}
const formItemLayout = {
    labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 8 },
        sm: { span: 8 },
    },
};
export default bookAppointment;
