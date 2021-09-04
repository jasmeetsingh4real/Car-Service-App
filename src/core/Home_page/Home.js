import React,{useEffect, useState} from 'react';
import './home.css';
import {Link,useHistory} from 'react-router-dom'
import Base from '../Base/Base';
import Navigation from './Nav_bar/Navigation';
import About_us from '../About_us/About_us';


const Home =()=>
{
      const history=useHistory();
      const [userData, setUserData] = useState({name:""});

      const [infoStatus,setInfoStatus] = useState({
            loc_status:"Enter Location",
            vehicle_info_status:"Enter Vehicle Info"
      })

      // const callHomePage= async ()=>{
      //       try{
      //             const res=await fetch('/homepage',{
      //                   method:"GET",
      //                   headers:{
      //                         Accept:"application/json",
      //                       "Content-Type":"application/json"
      //                   },
      //            credentials:"include"
      //              });
      //              const data = await res.json();
      //             console.log("name: "+data.name);
      //             setUserData({name:data.name});

      //             if(res.status===401)
      //             {
      //                   console.log("Invalid credentials!!")
      //                   const error=new Error(res.error);
      //                   throw error;
      //                   // history.push("/login"); 
      //             }
      //       }catch(err)
      //       {
      //          console.log(err)
      //       //   history.push("/login")
      //       }
      // }
      // useEffect(()=>{
      // callHomePage();
      // },[]);


      // ONE TIME SUBMITTION CHECK


      const check_loc = ()=>{
      // var value = localStorage.getItem('Loc_Submitted')
      // if(value){
      //       setInfoStatus({
      //             ...infoStatus,
      //             loc_status:"Already Submitted"
      //       })
      // }else{
      //       history.push('input_location_page')
      // }   
      history.push('input_location_page')
      }

      const check_veh =()=>{
            // var value =localStorage.getItem('VI_Submitted')
            // if(value){
            //       setInfoStatus({
            //             ...infoStatus,
            //             vehicle_info_status:"Already Submitted"
            //       })
            // }else{
            //       history.push('/vehicle_input_page')
            // }
            history.push('/vehicle_input_page')
      }
      const checkInfo=()=>{
            // var val1 = localStorage.getItem('VI_Submitted')
            // var val2 = localStorage.getItem('Loc_Submitted')
            // if(val1 && val2){
            //       history.push('remoteservicing')
            // }else{
            //       alert('Fill Above Fields First')
            // }
            history.push('remoteservicing')
      }
     // const name="Welcome!! User";
  return(

<Base
title="Jaggi Car Service"
description={"Hello "+userData.name+"!"}
>
<Navigation/>
    <div className='home_bg'>
            <div className="row1">
                  <div className='card vehicle'>
                       
                        <button  onClick={check_veh} className="cardbtn">{infoStatus.vehicle_info_status}</button>
                       
                  </div>
                  
                  <div className='card loc'>
                       
                        <button onClick={check_loc} className='cardbtn'>{infoStatus.loc_status}</button> 
                      
                  </div>
            </div>
            <div className="row2">

                        <h1 className="services_h1" style={{textAlign:"center" }} >Our Services </h1>

                        <div className="serviceItem">

                              <div className="service_img service_img1" >
                                    <button onClick={checkInfo} className='service_btn'>Remote Servicing</button>
                               </div>
                               <div className="service_discription">
                                    <h1 style={{marginBottom:"10px"}}>01</h1>
                                    <h2  style={{marginBottom:"10px" ,color:'rgba(0, 0, 0, 0.733)'}}>Remote Servicing</h2>
                                    <p style={{color:"rgba(0, 0, 0, 0.701) "}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt aliquid assumenda dolores ex ratione, facere explicabo soluta maiores. Nulla.</p>
                             </div>
                         </div>

                        <div className="serviceItem">
                             <div className="service_img service_img2" >
                              <Link to='comingsoon'> <button className='service_btn'>coming soon..</button> </Link>
                             </div>
                             <div className="service_discription">
                                    <h1 style={{marginBottom:"10px"}}>02</h1>
                                    <h2  style={{marginBottom:"10px" ,color:'rgba(0, 0, 0, 0.733)'}}>Locate Service Center</h2>
                                    <p style={{color:"rgba(0, 0, 0, 0.701) "}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt aliquid assumenda dolores ex ratione, facere explicabo soluta maiores. Nulla.</p>
                             </div>
                        </div>

                        <div className="serviceItem">
                             <div className="service_img service_img3" >
                              <Link to='comingsoon'> <button className='service_btn'>coming soon..</button> </Link>
                             </div>
                             <div className="service_discription">
                                    <h1 style={{marginBottom:"10px"}}>03</h1>
                                    <h2  style={{marginBottom:"10px" ,color:'rgba(0, 0, 0, 0.733)'}}>Online Booking</h2>
                                    <p style={{color:"rgba(0, 0, 0, 0.701) "}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis deserunt aliquid assumenda dolores ex ratione, facere explicabo soluta maiores. Nulla.</p>
                             </div>
                        </div>
                        
                
             </div>

            <About_us/>

      </div>
    </Base>
    )
} 
export default Home;



