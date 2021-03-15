import React from 'react'
import PropTypes from 'prop-types'
import {useState} from "react/cjs/react.production.min";



function Doctor(){

    const [doctor,setDoctor]=useState(null);
    useState(()=>{


        fetch('http://localhost:8080/api/doctor/showdoctor')
            .then(response => response.json())
            .then(data => console.log(data));

    })
}
const AppHeader=({title})=>
{

    return(

    <div>
    </div>

    );
}

AppHeader.defaultProps={
    title:'Warecares',
}

AppHeader.propTypes={
    title:PropTypes.string.isRequired,
}

const headingStyle={
color:'red',backgroundColor:'white'
}

 export default AppHeader



