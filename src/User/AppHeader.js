import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd';
import "./AppHeader.css"
import {Link} from "react-router-dom";



const AppHeader=({title})=>
{
    const { SubMenu } = Menu;
    return(

    <div>
        <Menu style={{height:"75px"}} mode="horizontal" className="app-menu" >
            <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
            <Menu.Item key="Login"><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key="SignUp"><Link to="/signup">Sign Up</Link></Menu.Item>
        </Menu>

    </div>

    );
}

AppHeader.defaultProps={
    title:'Warecares',
}

AppHeader.propTypes={
    title:PropTypes.string.isRequired,
}


 export default AppHeader



