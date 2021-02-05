import React from 'react';
import {Button} from "antd";

class Home extends React.Component{
    render(){
        return(

            <h1>Welcome to  Home</h1>,
                <Button onClick={()=>alert('nice click again')}>hi</Button>,
                <h1>Your are in home</h1>

        );
    }
}



export default Home;
