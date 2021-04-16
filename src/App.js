import './App.css';
import {Layout, notification} from "antd";
import {Switch, Route, withRouter} from "react-router-dom";
import React from 'react';
import Home from "./User/Home"
import NotFound from "./User/NotFound";
import AppHeader from "./User/AppHeader";
import BookAppointment from "./Appointment/BookAppointment";
import Login from "./User/Login/Login"
import SignUp from "./User/SignUp/SignUp";
import UserRegistration from "./User/SignUp/User/UserRegistration";
import Dashboard from "./User/Dashboard";
import DoctorRegistration from "./User/SignUp/Doctor/DoctorRegistration";
import {getCurrentUser} from "./service/ApiService";
import DoctorDashboard from "./User/DoctorDashboard/DoctorDashboard";
import Appointments from "./User/DoctorDashboard/ListAppointments/Appointments";

export const ACCESS_TOKEN = 'accessToken';
const { Content } = Layout;


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false,
            rname:'',
            collapsed: false,

        }

       this.loadCurrentUser=this.loadCurrentUser.bind(this);
        this.handleLogout=this.handleLogout.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
        this.onLogin=this.onLogin.bind(this);
    }
    loadCurrentUser() {

        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
                this.setState({rname:response.roles[0].name})


                console.log(this.state.rname)
                if(this.state.rname==='ROLE_DOCTOR'){
                    this.props.history.push("/doctor");
                }
                else{
                this.props.history.push("/user/dashboard");
                }

            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    onLogin() {
            getCurrentUser().then(res => {
                this.setState({
                    currentUser: res,
                    isAuthenticated: true,
                    isLoading: false
                })
            })
        console.log("done on login done")
}

    handleLogout( notificationType="success", description="You're successfully logged out.") {

        this.setState({
            currentUser:null,
            isAuthenticated:false,


        })
        localStorage.removeItem(ACCESS_TOKEN);
        notification[notificationType]({
            message: 'Successfully logged out',
            description: description,
        });
          this.props.history.push("/");

    }
    handleLogin(){
        this.loadCurrentUser();
        console.log("running");
    }


    render() {
        return (

                    <Layout>

                        <AppHeader {...this.props} isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />
                        <Content className="app-content">

                            <Switch>
                                <Route exact path='/' > <Home/></Route>
                                <Route exact path="/home"><Home/></Route>
                                <Route exact path="/bookAppointment"><BookAppointment/></Route>

                                <Route exact path="/user/dashboard"  render={(props) =>   <Dashboard  onLogin={this.handleLogin} {...props}/>}/>
                                <Route exact path="/login" render={(props) => <Login onLogin={this.handleLogin}   {...props} />}/>
                                <Route exact path="/signup"><SignUp/></Route>

                                <Route path='/doctor' render={(props)=><DoctorDashboard   onDone={this.onLogin}  />}/>
                                                     <Route exact path="/userRegistration"><UserRegistration/></Route>
                                                     <Route exact path="/doctorRegistration"><DoctorRegistration/></Route>

                                <Route exact path="/all" component={Appointments}/>

                                <Route path="*" component={NotFound}/>
                            </Switch>
                        </Content>
                    </Layout>

            // <Layout>
            //         <AppHeader {...this.props} isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />
            //
            //             <Content className="app-content">
            //
            //                 <Switch>
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //                 </Switch>
            //
            //         </Content>
            //     </Layout>

        );
    }
}

export default withRouter(App);
