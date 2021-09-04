import React, { useState } from 'react';
import {NavLink,Link,useHistory} from 'react-router-dom';
import dp from './logout.jpg'
import './navbar_design.css';

const Navigation=()=>
{
const history = useHistory()
const [menu,setMenu]= useState({
    status:false,
    menuColor:'white'
})
const toggleNav =()=>{
  
    if(menu.menuColor === "white"){
        setMenu({
            ...menu,
            status:true,
            menuColor:"rgb(238, 70, 20)",
        })
    }else{
        setMenu({
            ...menu,
            status:false,
            menuColor:"white",
        })
    }
}
    return(
    <>
    <div className="Navbar">
        <div className="desktop_nav">
        <NavLink className='inactive' exact activeClassName='activelink' to='/home'>Home</NavLink>
        <NavLink className='inactive' exact activeClassName='activelink' to='/booking'>Bookings</NavLink>
        <NavLink className='inactive' exact activeClassName='activelink' to='/contact'>Contact Us</NavLink>
        <NavLink className='inactive' exact activeClassName='activelink' to='/tc'>Terms & Conditions</NavLink>
        </div>

        <div style={{color:`${menu.menuColor}`}} onClick={toggleNav} className='menu activelink '><span>Menu</span> </div>

        <span className='dp'><img src={dp} height='20px'></img></span>
        <div  className='logout activelink' onClick={()=>{history.push('/')}}>logout</div>
        {
        menu.status?(
            <div className="small_menu">
                <ul>
                    <Link to='home'><li  onClick={toggleNav}>Home</li></Link>                 
                    <Link to='booking'><li  onClick={toggleNav}>Bookings</li></Link>                 
                    <Link to='contact'><li  onClick={toggleNav}>Contact Us</li></Link>                 
                    <Link to='tc'><li  onClick={toggleNav}>Terms & Conditions</li></Link>                 
                </ul>
            </div>
        ):null
    }
    </div>
    
    </>
    );
}

export default Navigation;