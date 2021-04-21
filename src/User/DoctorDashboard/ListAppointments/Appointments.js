import React  from "react";
import {getAllAppointments} from "../../../service/ApiService";
import {Button, notification, Table} from "antd";
import "./Appointment.css"
class Appointments extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            data: []
        }
        this.loadAllAppointments=this.loadAllAppointments.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.formatDateTime=this.formatDateTime.bind(this);
    }
    componentDidMount() {

                 this.loadAllAppointments();

        // setInterval(this.loadAllAppointments, 5000);
    }

    formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);


        const monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];
        const monthIndex = date.getMonth();
        const year = date.getFullYear();


       const getMin=(minutes)=>{
           if(date.getMinutes()===0){
               minutes='00'
           }
           if(date.getMinutes()===1){
               minutes='01'
           }
           if(date.getMinutes()===2){
               minutes='02'
           }
           if(date.getMinutes()===3){
               minutes='03'
           }
           if(date.getMinutes()===4){
               minutes='04'
           }
           if(date.getMinutes()===5){
               minutes='05'
           }
           if(date.getMinutes()===6){
               minutes='06'
           }
           if(date.getMinutes()===7){
               minutes='07'
           }
           if(date.getMinutes()===8){
               minutes='08'
           }
           if(date.getMinutes()===9){
               minutes='09'
           }
       return minutes;
       }
       return date.getDate() + ' ' + monthNames[monthIndex] + ' ' + year + ' - ' + date.getHours() + ':' + getMin(date.getMinutes());
    }

    loadAllAppointments(){

        getAllAppointments().then(res=>{

            const  result=res.map(row=>(
                    {
                        key:row.ap_id,
                        firstname:row.firstname,
                        lastname:row.lastname,
                        gender:row.gender,
                        description:row.description,
                        state:row.state,
                        dob:row.dob,
                        ap_Date:this.formatDateTime(row.ap_date)
                    }
                )
            )
            this.setState({data:result});



        }).catch(error=>{
            notification.error(error);
        });

    }

    columns = [
        {
            title: 'Firstname',
            width: 100,
            dataIndex: 'firstname',
            key: 'firstname',
            fixed: 'left',
        },
        {
            title: 'Lastname',
            width: 100,
            dataIndex: 'lastname',
            key: 'lastname',
            fixed: 'left',
        },
        {
            title: 'Gender',
            width: 100,
            dataIndex: 'gender',
            key: 'gender',
            fixed: 'left',
        },
        {
            title: 'Description',
            width: 100,
            dataIndex: 'description',
            key: 'description',
            fixed: 'left',
        },
        {
            title: 'State',
            width: 100,
            dataIndex: 'state',
            key: 'state',
            fixed: 'left',
        },
        {
            title: 'Dob',
            width: 100,
            dataIndex: 'dob',
            key: 'dob',
            fixed: 'left',
        },
        {
            title: 'ap_Date',
            width: 200,
            dataIndex: 'ap_Date',
            key: 'ap_Date',
            fixed: 'left',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                this.state.data.length >= 1 ? (
                    <Button  onClick={() => this.onDelete(record.key)}>
                        Delete
                    </Button>
                ) : null,
        },
    ]
    onDelete(key){
        console.log(key);
    }
    render() {
        return (
            <div className="site-layout">
                <h1>
                    Welcome to Appointments Dashboard Doctor!
                    <div className="table-container">
                        <Table columns={this.columns} dataSource={this.state.data}/>
                    </div>

                </h1>
            </div>
        );
    }
}
export default Appointments
