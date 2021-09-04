import React from 'react';
import './loginDesign.css';
import {Link} from 'react-router-dom'
const Fp=()=>{


    return(
        <>
         <div className='page_background'>
        <div className='carpic'></div>
        <Link to="/"><div className="backbtn"> </div></Link>
        <div className='loginform'>
            <form>
            <h2>New Password</h2>
               
                <input placeholder="Enter new password" type='password'/><br/>
                <input placeholder="Confirm new password" type='password'/><br/>
                <Link to='/'>
                <button>Proceed</button><br/> 
                </Link> 
            </form>
        </div></div>
        </>
    )
}
export default Fp;
