import React from 'react'
import './bookingitem.css'
const BookingItem=({props})=> {
    return (
        <div className="item">
        <div className="data">
            <h3 className="itemName" id='itemName'>{props.itemName}</h3> 
            <h4 className="date" id='date'>due date: {props.date} </h4>
            <h4 className="date" id='servicecenter'>Service Center: {props.servicecenter}</h4>
            <h4 className="date" >{props.location}</h4>
        </div>

         <div className='btns'>
            <button className="removeBtn btn">Remove</button>
            <button className="proceedBtn btn" onClick={()=>{localStorage.clear()}}>Proceed Payment</button>
        </div>
        </div>
    )
}
export default BookingItem;
