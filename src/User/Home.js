import React from 'react';
import {Button, notification, Table} from "antd";
import {getAllAppointments} from "../service/ApiService";
import "./Home.css"

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            data: []
        }
         this.loadAllAppointments=this.loadAllAppointments.bind(this);
         this.onDelete=this.onDelete.bind(this);
    }

    componentDidMount() {

        this.loadAllAppointments();

        setInterval(this.loadAllAppointments, 5000);
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
                  dob:row.dob
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

    render(){

        return(
            <div>
                <h1>Welcome to  Home</h1>
                    <Button  onClick={()=>alert('nice click again')}>hi</Button>
                <h1>Welcome to Application.</h1>

                <div className="table-container">
                <Table columns={this.columns} dataSource={this.state.data}/>
                </div>

            </div>
        );
    }
}



export default Home;
