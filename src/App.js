

import './App.css';
import {Layout} from "antd";
import {Switch, Route, withRouter, NavLink} from "react-router-dom";
import userlogin from "./User/userlogin";
import Home from "./User/Home"
import NotFound from "./User/NotFound";
import DoctorRegistration from "./Doctor/DoctorRegistration"
import AppHeader from "./User/AppHeader";
import BookAppointment from "./Appointment/BookAppointment";

const { Header, Content } = Layout;


const App = () =>{
    return (
<>
    <Layout>
        <Header style={{backgroundColor: "#750ddd"}}><AppHeader/></Header>

          <Content>
            <NavLink to="/home" style={{color:"black"}}> Home</NavLink>
&nbsp;
             <NavLink to="/BookAppointment">Book Appointment</NavLink>
     <Switch>

         <Route exact path="/home"><Home/></Route>

         <Route exact path="/d_registration"><DoctorRegistration/></Route>
         <Route exact path="/login" ><userlogin/></Route>
         <Route exact path="/"> <Home/> </Route>
         <Route exact="/BookAppointment"><BookAppointment/></Route>

         <Route component={NotFound}/>

     </Switch>
        </Content>
    </Layout>
</>

  );
}



export default withRouter(App);
