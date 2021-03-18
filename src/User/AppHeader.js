import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd';
import "./AppHeader.css"
import {Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";



const AppHeader=({title})=>
{
    const { SubMenu } = Menu;
    return(

        <Header className="app-header">
    <div >
        <Menu mode="horizontal">

            <Menu.Item key="home" style={{float:"right",color:"white"}}><Link to="/home">Home</Link></Menu.Item>
            <Menu.Item key="Login"style={{float:"right",color:"white"}}> <Link to="/login">Login</Link></Menu.Item>
            <h2 key="home" style={{float:"left"}}>Warecares</h2>

            <Menu.Item key="SignUp" style={{float:"right",color:"white"}}><Link to="/signup">Sign Up</Link></Menu.Item>
        </Menu>

            </div>
        </Header>

    );
}

AppHeader.defaultProps={
    title:'Warecares',
}

AppHeader.propTypes={
    title:PropTypes.string.isRequired,
}


 export default AppHeader



