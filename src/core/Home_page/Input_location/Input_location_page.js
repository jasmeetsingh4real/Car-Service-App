import React,{useState} from 'react';
import './design.css';  
import {Redirect} from 'react-router-dom';
import "./Backbtn.png"
import { Link,useHistory } from 'react-router-dom';


const Input_location_page=()=>{
    const history=useHistory();
    //creating a generic object using useState
    const [address,setAddress]=useState({
        state: "",
        city: "",
        pincode: "",
        landmark:""

    })

   
   
    const getAddress=(val)=>{
    
        const add=(val.target.value)
        const key=(val.target.name)
        setAddress({
            ...address,
            [key]:add
        })

     }


    const submitAddress= async (e)=>{
        e.preventDefault();
       
        try{
        const {state,city,pincode,landmark} =address

        const res=await fetch('/locationInput',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({state,city,pincode,landmark})

        })

        if(res.status===401)
        {
console.log("Token not provided");
history.push('/login');
       }else{
           history.push('home') 
             localStorage.setItem('Loc_Submitted',true);
       }

       const data= await res.json();
       if(!data)
       {
           console.log("message sent");
       }
       else if(data)
       {
           console.log("Message sent")
        
          
       }
    }
    catch(err)
    {
        console.log(err);
    }

        // console.log(address);
        // alert("Location Submitted!")
        // setCheck(true)

        //  axios.post("localhost:9090/car/signup/data",address)
        //  .then(response=>{
        //      console.log(response);
        //  })
        //  .catch(error=>{
        //      console.log(error)
        //  })
    }
        
    
    return(
        <>
            <div className='Vehicle_info_bg loc_bg'>
    
                
                <h1 className='VIheading' >Enter Location Details</h1>
                <form className='loc_info Vehicle_info' style={{color:'white' , backgroundPositionX:"center"}} onSubmit={submitAddress} autoComplete="off">
    
                <Link to="/home"><div className="back"> </div></Link>
    
                
         
                State: <br />
                <input className='loc_input VI_input' onChange={getAddress} value={address.state} name="state" required
                    autoComplete="false"
                /><br/>
    
                City: <br />
                <input className='loc_input VI_input' onChange={getAddress} value={address.city}  name="city" required/><br/>
    
                Pin-code: <br />
                <input className='loc_input VI_input' onChange={getAddress} value={address.pincode}  name="pincode" required/><br/>
    
                landmark: <br />
                <textarea className='loc_input VI_input VI_textarea' style={{  background:"rgba(0, 0, 0, 0.445)"}} onChange={getAddress} value={address.landmark}  name="landmark" required/><br/>
              
                <button type='submit' className='VI_submit'  >Submit</button>
              
               
    
                </form>
            </div>
        </>)
}
export default Input_location_page;