

import './App.css';
import {Layout} from "antd";
import {Switch, Route, withRouter, NavLink} from "react-router-dom";
import userlogin from "./User/userlogin";
import Home from "./User/Home"
import NotFound from "./User/NotFound";
import DoctorRegistration from "./Doctor/DoctorRegistration"
import AppHeader from "./User/AppHeader";
import BookAppointment from "./Appointment/BookAppointment";
import Login from "./User/Login/Login"
import SignUp from "./User/SignUp/SignUp";
import UserRegistration from "./User/SignUp/User/UserRegistration";
const { Header, Content } = Layout;


const App = () =>{
    return (
<>
    <Layout>
        <AppHeader/>
          <Content className="app-content">

              <Switch>

                  <Route exact path="/home"><Home/></Route>
                  <Route exact path="/bookAppointment"><BookAppointment/></Route>
                  <Route exact path="/login"><Login/></Route>

                  <Route exact path="/d_registration"><DoctorRegistration/></Route>
                  <Route exact path="/login" ><userlogin/></Route>
                  <Route exact path="/signup"><SignUp/></Route>
                  <Route exact path="/userRegistration"><UserRegistration/></Route>
                  <Route exact path="/"> <Home/> </Route>
                  <Route component={NotFound}/>


              </Switch>
        </Content>
    </Layout>
</>

  );
}



export default withRouter(App);
