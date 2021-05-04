import React, {useState} from 'react';

import {Link, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import Appointments from "./ListAppointments/Appointments";
import Layout, {Content, Footer} from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import {Menu} from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
} from '@ant-design/icons';
import Settings from "./Settings/Settings";
import BookAppointment from "../../Appointment/BookAppointment";



function DoctorDashboard(myp) {
    let {path, url} = useRouteMatch();

    const [count, setCount] = useState(true);
    let history = useHistory();
    const [collapsed, setCollapsed] = useState(false)


    if (localStorage.getItem('accessToken') !== null) {

        console.log("called");
        if (count !== false) {

            myp.onDone();
            setCount(false);
        }


        const onCollapse = collapsed => {
            console.log(collapsed);
            setCollapsed(true);
        };
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="1" icon={<DesktopOutlined/>}>
                            <Link to={`${url}/dashboard`}>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined/>}>
                            <Link to={`${url}/appointment`}>Appointments</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DesktopOutlined/>}>
                            <Link to={`${url}/settings`}>Settings</Link>
                        </Menu.Item>

                        <Menu.Item key="9" icon={<FileOutlined/>}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{margin: '0 16px'}}>

                        <div style={{padding: 24, textAlign: 'center', backgroundColor: 'white'}}>

                            <Switch>

                                <Route path={`${path}/dashboard`}><BookAppointment/></Route>

                                <Route path={`${path}/appointment`}><Appointments/></Route>
                                <Route path={`${path}/settings`}><Settings/></Route>
                                <Route path={`${path}/`}><BookAppointment/></Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}> Warecares ©2021 </Footer>
                </Layout>
            </Layout>
        );

    } else {

        history.push("/");
        return (
            <div>
                <h1>Nothing is here</h1>
            </div>
        );
    }

}

export default DoctorDashboard;
