import React, { useState } from 'react'
import './style.css'

export default function DropMenu() {

const [menu,setMenu] = useState(false)

const[value,setValue]=useState("No Value Selected")

const onChange=(e)=>{
    e.preventDefault()
    var value = e.target.value
    console.log(value);
    setValue(value)
    localStorage.setItem('serviceCenter',value)
    toggleMenu(e)
}


const toggleMenu =(event)=>{
    event.preventDefault()
    setMenu(!menu)
}

    return (
        <div>
         
            <div className='menu-container'>

            <div >
                <label className="label">Select Service Center :</label>
            </div>

                <div className="menu-btn">
                    <button onClick={toggleMenu}>{value}</button>
                    {
                    menu?(
                            <div>
                            <button onClick={onChange} value="Service Center 1">Service Center 1</button><br />
                            <button onClick={onChange} value="Service Center 2">Service Center 2</button><br />
                            <button onClick={onChange} value="Service Center 3">Service Center 3</button>
                            </div>):null
                    }
                </div>

           </div>
        </div>
    )
}
