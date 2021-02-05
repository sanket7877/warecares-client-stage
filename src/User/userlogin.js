import React from 'react';
import {Button} from "antd";

class login extends React.Component{
    render(){
        return(

                <h1>Welcome to user login</h1>,
                <Button onClick={()=>alert('nice click again')}>hi</Button>,
                <h1>Ant d version</h1>

        );
    }
}



export default login;
