import React from 'react';
import { getCurrentUser} from "../service/ApiService";

class Dashboard extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            name:'',
            roleName:''
        }
        this.loadCurrentUser=this.loadCurrentUser.bind(this);
        this.isAuthenticate=this.isAuthenticate.bind(this);
    }
    componentDidMount() {


         this.isAuthenticate();

        this.loadCurrentUser();
    }

    isAuthenticate(){
       // if(this.props.isAuthenticated===false){
      //      this.props.history.push("/");
    //    }
        if(localStorage.getItem("accessToken")===null){
            this.props.history.push("/");
        }
    }
    loadCurrentUser(){
        getCurrentUser().then(res=>{
            this.setState({name:res.username,roleName:res.roles[0].name})

            this.props.onLogin();
        })
            .catch(res=>{
                if(res.status===401){
                    this.props.history.push("/");
                }
            });
    }
    render() {

        if(this.state.roleName==='ROLE_USER'){
            return (
              <div>
                  <h1>
                      welcome  to user dashboard  {this.state.name}
                  </h1>

                  <h1>
                      this dashboard for user!!!
                  </h1>

              </div>
            );
        }


     return (
            <div>
                <h1>
                     welcome  {this.state.name}
                </h1>
            </div>
            );
        }

}
export default Dashboard;
