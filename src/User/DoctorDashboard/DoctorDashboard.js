import React, {useState} from 'react';

import {Link, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import Layout, {Content, Footer} from "antd/lib/layout/layout";

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



function DoctorDashboard(myp) {
    let {path, url} = useRouteMatch();

    const[collapsed,setCollapsed]=useState(false);
    const [count, setCount] = useState(true);
    let history = useHistory();
    // const [collapsed, setCollapsed] = useState(false)


    if (localStorage.getItem('accessToken') !== null) {

        console.log("called");
        if (count !== false) {

            myp.onDone();
            setCount(false);
        }

       function onCollapse (collapsed) {
            console.log(collapsed);
            setCollapsed( collapsed );
        };
        return (
            <Layout  style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>


                {/*<Layout className="site-layout">*/}
                {/*    <Content style={{margin: '0 16px'}}>*/}

                {/*        <div style={{padding: 24, textAlign: 'center', backgroundColor: 'white'}}>*/}

                {/*            <Switch>*/}
                {/*                <Route path={`${path}/dashboard`}><BookAppointment/></Route>*/}
                {/*                <Route path={`${path}/appointment`}><Appointments/></Route>*/}
                {/*                <Route path={`${path}/settings`}><Settings/></Route>*/}
                {/*                <Route path={`${path}/`}><BookAppointment/></Route>*/}
                {/*            </Switch>*/}
                {/*        </div>*/}
                {/*    </Content>*/}
                {/*    <Footer style={{textAlign: 'center'}}> Warecares ©2021 </Footer>*/}
                {/*</Layout>*/}
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
