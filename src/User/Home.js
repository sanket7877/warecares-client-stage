import React from 'react';
import {Button} from "antd";

class Home extends React.Component{
    render(){
        setTimeout(console.log("Time intervel added"),1000)
        return(

            <div>
            <h1>Welcome to  Home</h1>
                <Button  onClick={()=>alert('nice click again')}>hi</Button>

                  <h1>Welcome to Application.</h1>
            </div>

        );
    }
}



export default Home;
