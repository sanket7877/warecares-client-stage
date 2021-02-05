import React from 'react';
import {Button} from "antd";
import { DownloadOutlined } from '@ant-design/icons';

class NotFound extends React.Component{
    render(){
        return(

            <div>
            <h1> 404 ! Page is not Found</h1>
                <Button  shape="round" type="primary"  icon={<DownloadOutlined />}>Go Back </Button>
            </div>
        );
    }
}



export default NotFound;
