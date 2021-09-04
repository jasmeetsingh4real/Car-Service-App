import React from 'react'
import Base from '../../Base/Base'
import '../Input_location/design.css'   
import {Link} from 'react-router-dom'
import DropMenu from './DropMenu' 
import './style.css'
const RemoteServicing=()=> {

const locinfo = {
    state:"",
    city:'',
    pincode:'',
    landmark:''
}

const vehInfo = {
    Vehicle:"",
    Model:"",
    Year:'',
    Fault:""
}
    return (
        <>
        <div >
            <h1 className='VIheading'>Remote Servicing</h1>
                <div className=' service_info' style={{color:"white"}}>

                    <div className='col-1'>
                        <Link to="/home"><div className="arrow"> </div> </Link>
                    </div>

                    <div className='col-2'>
                            <div className='userInfo'>
                                <h3>Vehicle info :</h3>
                                <p className="info">
                                        Vehicle: {vehInfo.Vehicle} <br />
                                        Model: {vehInfo.Model} <br />
                                        Year: {vehInfo.Year} <br />
                                        Fault: {vehInfo.Fault}
                                </p>  
                            </div>
                            
                            <div  className='userInfo'>
                            <h3>Location :</h3>
                            <p className="info">
                                    State: {locinfo.state} <br />
                                    City: {locinfo.city} <br />
                                    Pincode: {locinfo.pincode} <br />
                                    Landmark: {locinfo.landmark}
                             </p>
                            </div>
                            
                            <div  className='selection'>
                                <DropMenu/>
                            </div>

                            <div className='submit_btn'>
                            <Link to="booking">
                            <button type='submit' >Proceed</button>
                            </Link>
                            </div>  
                    </div>


                </div>
           
        </div>
       
    </>
    )
}
export default RemoteServicing