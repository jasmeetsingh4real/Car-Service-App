import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import './loginDesign.css';
const Login=()=>{
    const history=useHistory();
const [loginInfo,setLoginInfo]=useState({
    email:"Press login to visit homepage",
    password:"1233456"
});
const setUserInfo=(val)=>{

    const value=(val.target.value)
    const key=(val.target.name)
    setLoginInfo({
        ...loginInfo,
            [key]:value
        
    })
}

const submitLoginInfo=async (e)=>{
    e.preventDefault()
//     const {email,password} = loginInfo;
//     console.log(loginInfo);
//     const res=await fetch('/signin',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
// body: JSON.stringify({email, password})
// })

// if(res.status===422||!res)
// {
//     window.alert("Invalid credentials")
// }
// else{
//     const data=await res.json();
//     window.alert("Login Success");

//     history.push("/home")
// }
history.push("/home")

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
                <form method="POST" onSubmit={submitLoginInfo}>
                <h2>Login</h2>
                
                    <input placeholder="Email" onChange={setUserInfo} value={loginInfo.email} name="email" required/><br/>
                    <input type="password" placeholder="Password" onChange={setUserInfo} value={loginInfo.password} name="password" required/><br/>
                
                    <button type="submit">login</button><br/> 
                    <Link className='linktag' to='under_maintainence'>forgot password?</Link><br/>
                    <Link className='linktag' to='register'>don't have an account?</Link>
             </form>
       </div>
        </div>

        <div className='carpic'></div>

    </div>
</div>
</>
)
}
export default Login;
