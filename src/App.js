

import './App.css';
import {Layout} from "antd";
import {Switch,Route,withRouter} from "react-router-dom";
import userlogin from "./User/userlogin";
import Home from "./User/Home"
import NotFound from "./User/NotFound";
import AppHeader from "./User/AppHeader";
const { Header, Content } = Layout;


const App = () =>{

    return (
<>
    <Layout>
        <Header><AppHeader/></Header>

        <Content>
     <Switch>
         <Route exact path="/" component={userlogin}/>
         <Route exact path="/home"> <Home/> </Route>

         <Route path="*"><NotFound/></Route>

     </Switch>
        </Content>
    </Layout>
</>

  );
}



export default withRouter(App);;
