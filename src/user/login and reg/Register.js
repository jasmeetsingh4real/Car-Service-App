import React, { useState } from 'react';
import Base from '../../core/Base/Base';
import {Link ,useHistory} from 'react-router-dom';

import './loginDesign.css';


const Register=()=>{
const history=useHistory();
    const [userInfo,setUserInfo]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone:""
    })



    const getUserInfo=(val)=>{
        const value=(val.target.value)
        const key=(val.target.name)
        setUserInfo({
            ...userInfo,[key]:value
        })
    }
    const submitUserInfo= async (e)=>{
        e.preventDefault();
        const { name, email, password, confirmPassword, phone} = userInfo;
        console.log(userInfo);

        //const user={ name, email, password, confirmPassword, phone};
      const res=await fetch('/signup',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
    body: JSON.stringify({name, email, password, confirmPassword, phone})
    
})

    if(res.status===422 || !res)
     {
         window.alert("Invalid registration");
         console.log("Invalid registration")
     }
     else {
        const data=await res.json();
        window.alert("Registration Successful");
        console.log("Registration Successful")
       history.push("/login")
     }
    }
 return(
    <>
     <div className='page_background'>
        <div className="logincard">  

            <div className='loginform'>
                    <div>
                    <Link to="/"><div className="backbtn"> </div></Link>
                    </div>

                    <div className="loginfields">
                            <form method="POST" onSubmit={submitUserInfo}>
                                <h2>Create account</h2>
                                
                                    <input onChange={getUserInfo} value={userInfo.name} name="name" placeholder="Name" required/><br/>
                                    <input onChange={getUserInfo} value={userInfo.email} name="email" placeholder="Enter E-mail" required/> <br/>
                                    <input onChange={getUserInfo} value={userInfo.password} name="password" placeholder="Enter Password" required type="password"/><br/>
                                    <input onChange={getUserInfo} value={userInfo.confirmPassword} name="confirmPassword" placeholder="Re-Enter Password" required type="password"/><br/>
                                    <input onChange={getUserInfo} value={userInfo.phone} name="phone" placeholder="Phone-no" required/><br/>
                                    {/* <textarea placeholder='Enter Address'/> */} 
                                    <button type="submit">Register</button><br/>
                            </form>
                        </div>
            </div>
            
                    <div className='carpic'></div>

            </div>
        </div>
        </>
    )
}
export default Register;
