import React, { useEffect, useState } from 'react';
import Base from '../Base/Base';
import Navigation from '../Home_page/Nav_bar/Navigation'
import BookingItem from './BookingItem'
const Bookings=()=>{


const [bookingItems,setBookingItem] = useState([{
    itemName:"Service 1",
    date:"",
    servicecenter:localStorage.getItem('serviceCenter'),
    location:"",
    Id:""
}]);

// useEffect( () =>{}), [])


    return(<>
    <Base title="Bookings" footer={false}>
        <Navigation/>
       {
        bookingItems.map((Item)=><BookingItem key={Item.Id} props={Item}/>)
       }
     
   </Base>
        </>
    )
}
export default Bookings; 