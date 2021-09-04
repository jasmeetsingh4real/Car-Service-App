import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './Design.css';
import Home from './core/Home_page/Home';
import Navigation from './core/Home_page/Nav_bar/Navigation';
import Error_page from './Error_page';  
import TC from './core/T&C/TC';
import Contact from './core/Contact_us_page/Contact';
import Booking from './core/Booking_page/Booking';
import Profile from './user/User_profile/Profile';
import Login from './user/login and reg/login';
import Register from './user/login and reg/Register'
import Fp from './user/login and reg/Fp';
import Otp from './user/login and reg/Otp';
import Vehicle_input_page from './core/Home_page/Input_vehicle/Vehicle_input_page'
import Input_location_page from './core/Home_page/Input_location/Input_location_page'
import RemoteServicing from './core/Home_page/Remoteservicing/RemoteServicing';
import Welcomepage from './Welcome-page/WelcomePage'
import WelcomePage from './Welcome-page/WelcomePage';
import comingsoon from './ComingSoon'
import ComingSoon from './ComingSoon';

const App=()=>{
  return(<>

 


  <Switch>
    <Route exact path='/' component={WelcomePage}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/booking' component={Booking}/>
    <Route path='/tc' component={TC}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/vehicle_input_page' component={Vehicle_input_page}/>
    <Route path='/input_location_page' component={Input_location_page}/>
    <Route path='/remoteservicing' component={RemoteServicing}/>
    <Route path='/comingsoon' component={ComingSoon}/>
    
    <Route exact path='/login' component={Login}/>
<Route exact path='/home' component={Home}/>
<Route exact path='/register' component={Register}/>
<Route exact path='/otp' component={Otp}/>
<Route exact path='/fp' component={Fp}/>
 <Route component={Error_page}/>

</Switch>


</>)
}

export default App;