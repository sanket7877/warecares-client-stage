import React, {useState} from 'react';
import BookAppointment from "../Appointment/BookAppointment"
import "./Home.css"
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";

function Home(){
    let { path, url } = useRouteMatch();

    const [loading,setLoading]=useState(false);

    const load=()=>{
        setLoading(true);
    }



    let mu;

    console.log(loading)
    if(loading===false){
     mu=[

        <div>
            <h1>sub component</h1>
                             <li>
                                 <Link to={`/bookAppointment`}> <h1 onClick={()=>{load()}}>Login</h1></Link>
                             </li>
        </div>
    ];
    }

    return(
        <div>
            <h2>hello</h2>
            {mu}
             <Switch>

                <Route path={`${path}/bookAppointment`}>
                    <BookAppointment />
                </Route>
            </Switch>
        </div>
    );
}


export default Home;
