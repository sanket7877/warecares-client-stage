import React from 'react'
import PropTypes from 'prop-types'




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


 export default AppHeader



