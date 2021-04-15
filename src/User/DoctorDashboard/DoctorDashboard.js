import React, {useState} from 'react';

import { Link, Route, Switch,useRouteMatch,useHistory} from "react-router-dom";
import Appointments from "./ListAppointments/Appointments";



function DoctorDashboard(){
    let { path, url } = useRouteMatch();

    let history=useHistory();

    if(localStorage.getItem('accessToken')!==null){

        console.log("called");
     //   myprops.onLogin();
        console.log("here");
         return(
        <div>
            <h2>Topics</h2>
            <ul>
                <h1>Hello</h1>
                <li>
                    <Link to={`${url}/appointment`}>See Appointments</Link>
                </li>
            </ul>
                <h1>Welcome to Doctor Dashboard</h1>
            <Switch>
                {/*<Route exact path={path}>*/}
                {/*    <h3>Please select a topic.</h3>*/}
                {/*</Route>*/}
                {/*/!*<Route path={`${path}/:topicId`}>*!/*/}
                {/*    <Topic />*/}
                {/*</Route>*/}

                <Route path={`${path}/appointment`} ><Appointments/></Route>
            </Switch>
        </div>
        );
    }
    else
    {

        history.push("/");
        return(
            <div>
                <h1>Nothing is here</h1>
            </div>
        );
    }

}















//
// function DoctorDashboard(){
//
//     let {path,url}=useRouteMatch();
//
//     const [collapsed,setCollapsed]=useState(null);
//
// const    onCollapse = collapsed => {
//         console.log(collapsed);
//         setCollapsed({ collapsed });
//     };
//     return(
//         <Layout style={{marginTop:5}}>
//             <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}   style={{
//                 overflow: 'auto',
//                 height: '100vh',
//                 position: 'fixed',
//                 left: 0,
//             }}>
//                 <div className="logo" />
//                 <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//                     <Menu.Item key="1" >
//                         <Link to={`${url}/appointment`}>Appointment</Link>
//                     </Menu.Item>
//                     <Menu.Item key="2" >
//                         Option 2
//                     </Menu.Item>
//                     <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//                         <Menu.Item key="3">Tom</Menu.Item>
//                         <Menu.Item key="4">Bill</Menu.Item>
//                         <Menu.Item key="5">Alex</Menu.Item>
//                     </SubMenu>
//                     <Menu.Item key="9">
//                         Files
//                     </Menu.Item>
//                 </Menu>
//             </Sider>
//             <Layout>
//                 <Content style={{margin: '24px 16px 0', overflow: 'initial', backgroundColor:"white"}} >
//                     <div >
//                         ...
//                         <br />
//                         Really
//                     </div>
//                     <Switch>
//                         <Route  path={`${path}/appointment`}><Appointments/></Route>
//                     </Switch>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>Warecares 2021</Footer>
//             </Layout>
//         </Layout>
//     );
//
// }
//














//
// class DoctorDashboard extends React.Component{
//     state = {
//         collapsed: false,
//
//     };
//
//     onCollapse = collapsed => {
//         console.log(collapsed);
//         this.setState({ collapsed });
//     };
//
//
//     componentDidMount() {
//         console.log(this.props.match);
//     }
//
//     render() {
//         const { collapsed } = this.state;
//
//         const {path}=this.props.match;
//
//         return (
//
//         );
//     }
//
// }

export  default DoctorDashboard;
