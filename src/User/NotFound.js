import React from 'react';
import {Button} from "antd";

class NotFound extends React.Component{
    render(){
        return(

            <div>
            <h1> 404 ! Page is not Found</h1>
                <Button path="/">Go Back </Button>
            </div>
        );
    }
}



export default NotFound;
