import React from 'react';
import {Button, DatePicker} from "antd";
import {NavLink} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(

            <div>
            <h1>Welcome to  Home</h1>
                <Button onClick={()=>alert('nice click again')}>hi</Button>
                <DatePicker/>
                <Button > <NavLink to="/d_registration" style={{color:"black"}}>Doctor Registration </NavLink></Button>
                <h1>Your are in home</h1>
            </div>

        );
    }
}



export default Home;
