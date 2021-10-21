import React from "react";
import {Form, Input} from "antd";

class SearchDoctor extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{margin:'50px'}}>
                Search Doctor
                <Form style={{width:'200px'}}>
                        <Input type={"text"} />
                </Form>
            </div>
        );
    }
}

export default SearchDoctor;
