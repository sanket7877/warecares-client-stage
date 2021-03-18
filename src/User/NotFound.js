import React from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom";

class NotFound extends React.Component{
    render(){
        return(

            <div>
            <h1> 404 ! Page is not Found</h1>
                <Button  shape="round" type="primary"><Link to="/home" >Go Back </Link></Button>

            </div>
        );
    }
}



export default NotFound;
