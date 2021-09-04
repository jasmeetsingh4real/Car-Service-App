import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import { Link,useHistory } from 'react-router-dom';
// import './style.css'
const Vehicle_input_page=()=>{
    const history=useHistory();
    //creating a generic object using useState
    const [vehicleInfo,setVehicleInfo]=useState({
        vehicle_name: "",
        vehicle_model: "",
        year: 2020,
        fault:""

    })

        const [check,setCheck]=useState(false);
   
    const getVehicleInfo=(val)=>{
    
        const add=(val.target.value)
        const key=(val.target.name)
        setVehicleInfo({
            ...vehicleInfo,
            [key]:add
        })
            
     }

    

     const submitVehicleInfo= async (e)=>{
        e.preventDefault();
      
       
        try{

        const {vehicle_name,vehicle_model,year,fault}=vehicleInfo;
         console.log(vehicleInfo); 
      const res= await fetch('/vehicleInput',{
       method:"POST",
       headers:{
           "Content-Type":"application/json"
       },
       body:JSON.stringify({ 
       vehicle_name,vehicle_model,year,fault
       })
      });
      if(res.status===401)
      {
          console.log("Token not provided")
          history.push("/login");
      }
      
      const data=await res.json();

      if(!data)
      {
          console.log("message not sent")
      }
      else if(data)
      { 
          console.log("message sent")
          localStorage.setItem('VI_Submitted',true)   
          history.push('input_location_page')
      }
      
      
        // console.log(vehicleInfo); 
        // alert("Vehicle info submitted!");
        setCheck(true)
    }catch(err)
    {
        console.log(err)

    }
       
    }
        
    return(
    <>
        <div className='Vehicle_info_bg'>
        <h1 className='VIheading'>Enter Vehicle Details</h1>
            
            <form method="POST" className='Vehicle_info' onSubmit={submitVehicleInfo} style={{backgroundPositionX:"center",color:"white"}} >

            <Link to="/home"><div className="back"> </div></Link>
       
           
     
            Vehicle: <br />
            <input  className='VI_input' 
            onChange={getVehicleInfo} value={vehicleInfo.vehicle_name} name="vehicle_name" required/><br/>

            

            Model: <br/>
            <input className='VI_input' onChange={getVehicleInfo} 
            value={vehicleInfo.vehicle_model}  name="vehicle_model" required/><br/>



            Year: <br /> 
            <input type='number' className='VI_input' onChange={getVehicleInfo}
            value={vehicleInfo.year}  name="year" required/><br/>



            Fault: <br />
            <textarea className='VI_textarea' onChange={getVehicleInfo} 
            value={vehicleInfo.fault}  name="fault" required/><br/>
          


            <button type='submit' className='VI_submit'  >Submit</button>
            {check&&<Redirect to="/"/>}
           

            </form>
        </div>
    </>)
}
export default Vehicle_input_page;