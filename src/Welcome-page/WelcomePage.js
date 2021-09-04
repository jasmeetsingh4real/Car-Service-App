import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
 const WelcomePage=()=> {
    return (

    <div className="bgimage">
        <div className='welcomePage'>
            <div className="Bgdark">
            <div>
                <h3 className='subHeading'>your trip companion</h3>
            </div>
            <div>
                <h1 className='WelcomePageHeading'>WELCOME TO JAGGI CAR SERVICE</h1>
            </div>
            <div>
                <p>~~~~~~~~~~ * ~~~~~~~~~~</p>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nemo. Eligendi ea labore sed ad animi dolor ullam repellendus. Nesciunt quaerat, mollitia quidem consequatur maiores architecto incidunt at veniam inventore repellat laboriosam, omnis modi ipsum voluptates quis, sit quam officiis. Voluptas veritatis, neque velit consectetur enim, dolor nisi esse soluta vitae repellendus animi suscipit magni quas amet autem ipsum numquam tempora deserunt molestiae magnam delectus.
                </p>
            </div>

            <div>
                <Link to='/login'><button className='loginBtn Btn'>Login</button></Link>
                <Link to="/register"><button className='registerBtn Btn'>Create Account</button></Link>
            </div>
            </div>
        </div>
    </div>
    )
}
export default WelcomePage