import React from 'react'
import { Menu} from 'antd';
import "./ApHeader.css"
import {Link,withRouter} from "react-router-dom";
import {Header} from "antd/es/layout/layout";
import "./ap.css";
import logo from "./cover.png";

class AppHeader extends React.Component{

    constructor(props) {
        super(props);
        this.handleMenuClick=this.handleMenuClick.bind(this);
    }


    handleMenuClick({ key }) {
        if(key === "logout") {
            this.props.onLogout();
        }}
    render() {

            let  menuItems;
              if(this.props.currentUser){
                  menuItems=[
                      <Menu.Item size="large" key="profile"  className="menu-item"><Link to="/profile" >profile</Link></Menu.Item>,
                      <Menu.Item size="large" key="logout"  className="menu-item" >Logout</Menu.Item>
                ];

            }
         else{
             menuItems=[
                <Menu.Item  key="home"  className="menu-item"><Link to="/home">Home</Link></Menu.Item>,
                <Menu.Item  key="Login" className="menu-item"> <Link to="/login">Login</Link></Menu.Item>,
                <Menu.Item  key="SignUp" className="menu-item"><Link to="/signup">Sign Up</Link></Menu.Item>,

             ];
        }

        return (
           <Header className="app-mheader">

               <div>
                   <div>
                             <img className="logo-image"  src={logo} alt="logo" />
                   </div>
                   <Menu mode="horizontal" onClick={this.handleMenuClick} selectedKeys={[this.props.location.pathname]}  style={{ lineHeight: '64px' }} >
                        {menuItems}
                   </Menu>
                </div>
            </Header>

        );
    }
}


export default withRouter(AppHeader);



