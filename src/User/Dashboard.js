import React from 'react';
import { getCurrentUser} from "../service/ApiService";

class Dashboard extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            name:''
        }
        this.loadCurrentUser=this.loadCurrentUser.bind(this);
        this.isAuthenticate=this.isAuthenticate.bind(this);
    }
    componentDidMount() {


    this.loadCurrentUser()
    }

    isAuthenticate(){
        if(this.props.isAuthenticated===false){
            this.props.history.push("/");
        }
    }
    loadCurrentUser(){
        getCurrentUser().then(res=>{
           console.log(res)
            this.setState({name:res.username})

        })
            .catch(res=>{
                if(res.status===401){
                    this.props.history.push("/");
                }
            });
    }
    render() {

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
