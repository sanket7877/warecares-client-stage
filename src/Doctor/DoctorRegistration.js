import React from "react";

import {Form, Input, Button, Select, Spin} from 'antd';
import {Option} from "antd/es/mentions";


class Demo extends React.Component {


    render() {
        return (

            <div>
                <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                    <Form.Item name="firstname" label="firstname" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    </Form.Item>
                    <Form.Item name="lastname" label="lastname" rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) => {
                        return getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={this.onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }

}

export default Demo;

