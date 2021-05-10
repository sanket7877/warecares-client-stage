import React, {useState} from 'react';

import {Link, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import Appointments from "./ListAppointments/Appointments";
import Layout, {Content, Footer} from "antd/lib/layout/layout";

import Settings from "./Settings/Settings";
import BookAppointment from "../../Appointment/BookAppointment";



function DoctorDashboard(myp) {
    let {path, url} = useRouteMatch();

    const [count, setCount] = useState(true);
    let history = useHistory();
    // const [collapsed, setCollapsed] = useState(false)


    if (localStorage.getItem('accessToken') !== null) {

        console.log("called");
        if (count !== false) {

            myp.onDone();
            setCount(false);
        }




        return (
            <div>
                <div className="nav">
                    <nav className="nav__container">
                        <div>
                            <Link  className="nav__link nav__logo">
                                <i className='bx bxs-disc nav__icon' />
                                <span className="nav__logo-name">Bedimcode</span>
                            </Link>

                            <div className="nav__list">
                                <div className="nav__items">
                                    <h3 className="nav__subtitle">Profile</h3>

                                    <Link href="#" className="nav__link active">
                                        <i className='bx bx-home nav__icon' />
                                        <span className="nav__name">Home</span>
                                    </Link>

                                    <div className="nav__dropdown">
                                        <Link href="#" className="nav__link">
                                            <i className='bx bx-user nav__icon' />
                                            <span className="nav__name">Profile</span>
                                            <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'/>
                                        </Link>

                                        <div className="nav__dropdown-collapse">
                                            <div className="nav__dropdown-content">
                                                <Link href="#" className="nav__dropdown-item">Passwords</Link>

                                            </div>
                                        </div>
                                    </div>

                                    <Link href="#" className="nav__link">
                                        <i className='bx bx-message-rounded nav__icon' />
                                        <span className="nav__name">Messages</span>
                                    </Link>
                                </div>

                                <div className="nav__items">
                                    <h3 className="nav__subtitle">Menu</h3>

                                    <div className="nav__dropdown">
                                        <Link href="#" className="nav__link">
                                            <i className='bx bx-bell nav__icon' />
                                            <span className="nav__name">Notifications</span>
                                            <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'/>
                                        </Link>

                                        <div className="nav__dropdown-collapse">
                                            <div className="nav__dropdown-content">
                                                <Link href="#" class="nav__dropdown-item">Blocked</Link>

                                            </div>
                                        </div>

                                    </div>


                                    <Link href="#" className="nav__link">
                                        <i className='bx bx-bookmark nav__icon' />
                                        <span className="nav__name">Saved</span>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </nav>
                </div>


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
            </div>
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
