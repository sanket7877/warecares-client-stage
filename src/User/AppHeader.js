import React from 'react'
import PropTypes from 'prop-types'


const AppHeader=({title})=>
{
    return(
    <header>
        <h1 style={headingStyle}>{title}</h1>

    </header>
    );
}

AppHeader.defaultProps={
    title:'Warecares',
}

AppHeader.propTypes={
    title:PropTypes.string.isRequired,
}

const headingStyle={
color:'red',backgroundColor:'black'
}

 export default AppHeader



