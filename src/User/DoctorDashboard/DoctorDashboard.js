import React, {useEffect, useState} from 'react';

import {Link, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import Layout, {Content, Footer} from "antd/lib/layout/layout";
import Appointments from "./ListAppointments/Appointments";
import Settings from "./Settings/Settings";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Sider from "antd/es/layout/Sider";
import {Menu} from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import {getCurrentUser} from "../../service/ApiService";



function DoctorDashboard(myp) {
    let {path, url} = useRouteMatch();

    const[collapsed,setCollapsed]=useState(true);
    const [count, setCount] = useState(true);
    const [doctorName,setDoctorName]=useState("");
    let history = useHistory();
    // const [collapsed, setCollapsed] = useState(false)


    useEffect(()=>{
        getCurrentUser().then(res=>{
            setDoctorName(res.name)
        })
    })

    if (localStorage.getItem('accessToken') !== null) {
              console.log("called");
        if (count !== false) {

            myp.onDone();
            // console.log(myp);
            setCount(false);
        }

       function onCollapse (collapsed) {
            console.log(collapsed);
            setCollapsed( collapsed );
        };
        return (
            <Layout  style={{ minHeight: '100vh' }}>
                <Sider  style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }} collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<TeamOutlined />}>
                            <Link to={`${url}/appointments`}>Appointments</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <Link to={`${url}/settings`}>settings</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item icon={<UserOutlined />} key="3">{doctorName}</Menu.Item>
                            <Menu.Item icon={<UserOutlined />} key="4">Bill</Menu.Item>
                            <Menu.Item icon={<UserOutlined />} key="5">Alex</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>


                <Layout className="site-layout">
                    <Content style={{margin: '0 16px'}}>

                        <div style={{padding: 24, textAlign: 'center', backgroundColor: 'white'}}>

                            <Switch>

                                <Route path={`${path}/appointments`}><Appointments/></Route>
                                <Route path={`${path}/settings`}><Settings/></Route>

                                <Route path={`${path}/`}><Appointments  /></Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}> Warecares ©2021 </Footer>
                </Layout>
            </Layout>
        );

    } else
    {
        history.push("/");
        return (
            <div>
                <h1>Nothing is here</h1>
            </div>
        );
    }
}

export default DoctorDashboard;
