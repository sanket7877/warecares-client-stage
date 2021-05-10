import React, {useEffect, useState} from 'react';
import BookAppointment from "../Appointment/BookAppointment"
import "./Home.css"
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {Button, Card, Modal, Skeleton, Spin} from "antd";

import {getAllDoctors, getDoctorById} from "../service/ApiService";
import Book from "../Appointment/Book";


function Home() {
    let {path} = useRouteMatch();

    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);
    }


    let mu;
    // console.log(loading)
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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

         const [myD,setMyD]=useState(null);
         const [dId,setDid]=useState(null);
         const [myLoad,setLoad]=useState(false);
         const bookAppointment=(id)=>{
             setLoad(true)

                getDoctorById(id).then(resp=>{
                    setMyD(resp.firstname);
                    setDid(resp.did);
                    setLoad(false);
                })
         }
     const [doctor, setDoctor] = useState([]);
        useEffect(() => {
            console.log("called ")
            document.title = "Home page"
            getAllDoctors().then(response => {
                setDoctor(response)

            })
        }, [])

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
                                style={{width: 300}}>
                                <p><h1>{doctor.firstname}</h1></p>
                                <p>{doctor.username}</p>
                                <p>{doctor.speciality}</p>
                                <p>Doctor's Status</p>
                                <Button onClick={()=>{bookAppointment(doctor.did);showModal() }}>Book Your Appointment</Button>
                            </Card>
                    )
                }
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Skeleton loading={myLoad} active avatar>

                    <p>Dr. {myD}</p>
                    <Book />
                </Skeleton>

                </Modal>

            </div>
        );
}

export default Home;


