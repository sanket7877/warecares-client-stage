

import './App.css';
import {Layout} from "antd";
import {Switch, Route, withRouter} from "react-router-dom";
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

const { Content } = Layout;


const App = () =>{

    function handleLogin(){
            this.props.history.push("/user/dashboard");
    }

    return (
<>
    <Layout>
        <AppHeader/>
          <Content className="app-content">

              <Switch>

                  <Route exact path="/home"><Home/></Route>
                  <Route exact path="/bookAppointment"><BookAppointment/></Route>
                  <Route exact path="/login" render={(props) =><Login  onLogin={handleLogin} {...props} />}/>

                  <Route exact path="/signup"><SignUp/></Route>
                  <Route exact path="/user/dashboard"><Dashboard/></Route>
                  <Route exact path="/userRegistration"><UserRegistration/></Route>
                  <Route exact path="/doctorRegistration"><DoctorRegistration/></Route>
                  <Route exact path="/"> <Home/> </Route>
                  <Route component={NotFound}/>


              </Switch>
        </Content>
        <footer className="app-footer">
            <h1><CopyrightOutlined /> Warecares 2021</h1>

        </footer>
    </Layout>
</>

  );
}



export default withRouter(App);
