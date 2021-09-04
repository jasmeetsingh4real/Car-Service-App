import React from 'react'
import { FaInstagram,FaTwitter,FaFacebook,FaReddit,FaSnapchat,FaWhatsapp ,FaCopyright} from 'react-icons/fa';
import './baseStyle.css'
const Base=({
    title="My Title",
    description = "",
    className = "",
    footer=true,
    children
  

})=> {
    

const showFooter = ()=>{
    if(footer){
        return (
        <footer className='basefooter'> 
            <div className="socials">
                <div className='sm sm1'> <FaInstagram/></div>
                <div className='sm'><FaTwitter/> </div>
                <div className='sm'><FaFacebook/> </div>
                <div className='sm'><FaReddit/> </div>
                <div className='sm'><FaSnapchat/> </div>
                <div className='sm'><FaWhatsapp/> </div>
            </div>
            <br />
            <h3 className='footertext'>
              jaggitech.corp
             </h3>
             <p>© 2021</p>
           
       </footer>
        )
    }
}

    return (
        <div>
            <div>
                <div className="heading">
                    <h2 className="display-4">{title}</h2>
                    <p className="leadheading">{description}</p>
                </div>
                <navigation username="Jagjeet"/>
                <div className={className}>{children}</div>

            {showFooter()}

            </div>
          
        </div>
    )
}


export default Base;