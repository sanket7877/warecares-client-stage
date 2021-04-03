import './App.css';
import {Layout,notification} from "antd";
import {Switch,Route, withRouter} from "react-router-dom";
import React from 'react';
import Home from "./User/Home"
import NotFound from "./User/NotFound";
import AppHeader from "./User/AppHeader";
import BookAppointment from "./Appointment/BookAppointment";
import Login from "./User/Login/Login"
import SignUp from "./User/SignUp/SignUp";
import UserRegistration from "./User/SignUp/User/UserRegistration";
import {  CopyrightOutlined } from '@ant-design/icons';
import Dashboard from "./User/Dashboard";
import DoctorRegistration from "./User/SignUp/Doctor/DoctorRegistration";
import {getCurrentUser} from "./service/ApiService";
export const ACCESS_TOKEN = 'accessToken';
const { Content } = Layout;


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }

        this.loadCurrentUser=this.loadCurrentUser.bind(this);
        this.handleLogout=this.handleLogout.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

   loadCurrentUser() {

        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
                this.props.history.push("/user/dashboard");

            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });

    }

    handleLogout( notificationType="success", description="You're successfully logged out.") {

        this.setState({
            currentUser:null,
            isAuthenticated:false
        })

        localStorage.removeItem(ACCESS_TOKEN);
        notification[notificationType]({
            message: 'Polling App',
            description: description,
        });
          this.props.history.push("/");

    }


    componentDidMount() {
        this.loadCurrentUser();
    }

    handleLogin(){
        this.loadCurrentUser();
    }


    render() {

        return (
            <>
                <Layout>
                    <AppHeader {...this.props} isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />
                    <Content className="app-content">
                        <Switch>
                            <Route exact path="/home"><Home/></Route>
                            <Route exact path="/bookAppointment"><BookAppointment/></Route>
                            <Route exact path="/login" render={(props) => <Login onLogin={this.handleLogin}   {...props} />}/>
                            <Route exact path="/signup"><SignUp/></Route>

                            <Route exact path="/user/dashboard" render={(props) => <Dashboard isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}/>}/>
                            <Route exact path="/userRegistration"><UserRegistration/></Route>
                            <Route exact path="/doctorRegistration"><DoctorRegistration/></Route>

                            <Route exact path="/" render={(props) =>  <Home isAuthenticated={this.state.isAuthenticated}
                                        currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}/>  }/>

                            <Route component={NotFound}/>
                        </Switch>
                    </Content>
                    <footer className="app-footer">
                        <h1><CopyrightOutlined/> Warecares 2021</h1>

                    </footer>
                </Layout>
            </>

        );
    }
}

export default withRouter(App);
