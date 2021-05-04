import React, {useEffect, useState} from 'react';
import BookAppointment from "../Appointment/BookAppointment"
import "./Home.css"
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {Button, Card} from "antd";
import {getAllDoctors} from "../service/ApiService";

function Home() {
    let {path} = useRouteMatch();

    const [loading, setLoading] = useState(false);
    const load = () => {
        setLoading(true);
    }


    let mu;
    console.log(loading)
    if (loading === false) {
        mu = [

            <div className="appointment-container">
                <h1>Book Your Appointment with doctor.</h1>
                <Link to={`/bookAppointment`}> <Button onClick={() => {
                    load()
                }}>Book Appointment</Button></Link>

            </div>
        ];
    }

    const [doctor,setDoctor]=useState([]);
    useEffect(()=>{
        getAllDoctors().then(response=>{
           setDoctor(response)
        })
    },[])

    return (

        <div>

            {mu}
            <Switch>
                <Route path={`${path}/bookAppointment`}>
                    <BookAppointment/>
                </Route>
            </Switch>


            {
                doctor.map(
                    doctor =>
                        <Card
                            hoverable
                            style={{ width: 300 }}>
                        <p><h1>{doctor.firstname}</h1></p>
                            <p>{doctor.username}</p>
                            <p>{doctor.speciality}</p>
                            <p>Doctor's Status</p>
                            <Button >Book Your Appointment</Button>
                        </Card>

                )
            }


             </div>


    );

}
export default Home;
