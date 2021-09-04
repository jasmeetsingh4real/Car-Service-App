import React from 'react';
import Base from '../Base/Base';
import './contact_us.css';
import email_pic from './email_pic.png';
import phone from './whatsapp.png';
import Navigation from '../Home_page/Nav_bar/Navigation'
import {FaWhatsapp,FaMailBulk} from 'react-icons/fa';
const Contact =()=>
{
    return(
        <Base title="Contact Us">
        <Navigation/>
        <div className='contact_title'>
            
            <div className="contact1 Contact_card">
                <a href="mailto:jaggi_car_service@gmail.com" target='_blank'>
                < FaMailBulk style={{fontSize:"8vw",color:"black"}}/>
                        <p>E-mail us at</p>
                        <p>jaggi_car_service@gmail.com</p>
                 </a>
           </div>
           <div className="contact2 Contact_card">
                    <div className=''>
                   < FaWhatsapp style={{fontSize:"8vw"}}/>
                        <p>Phone:</p>
                        <p>981322420</p>
                    </div>
            </div>
      </div>
       </Base>
    )
}
export default Contact;