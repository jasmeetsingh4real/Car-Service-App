import React from 'react';
import './Design.css'
import {Link} from 'react-router-dom'
const ComingSoon =()=>
{
    return(

      <div className='errorPage'>
        <h2 className='errorMessage'>
        Coming soon...
        <Link to="/home">
        <h5>go back</h5></Link>
        </h2>
    </div>)
}
export default ComingSoon;