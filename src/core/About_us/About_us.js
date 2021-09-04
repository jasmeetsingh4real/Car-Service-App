import React from 'react'
import './style.css';
export default function About_us() {
    return (
        <div className="About_us">                                                      
            <h1>About Us</h1>

            <div className="AboutUsInfo">
                <div className="questions">
                    <h2 >Why us?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, totam impedit blanditiis ullam, id porro, numquam architecto animi vel doloribus hic voluptates tempore nam quidem iure quas aliquam exercitationem nulla. Placeat exercitationem magnam maxime quis tempore. Tempore facilis suscipit nostrum vitae non quod hic velit, a ad, itaque nihil officiis.</p>
                    <br />
                    <br />
                    <h2>Who are we?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, totam impedit blanditiis ullam, id porro, numquam architecto animi vel doloribus hic voluptates tempore nam quidem iure quas aliquam exercitationem nulla. Placeat exercitationem magnam maxime quis tempore. Tempore facilis suscipit nostrum vitae non quod hic velit, a ad, itaque nihil officiis.</p>
                </div>


                <div className="developers">
                <h2 >Meet The Team</h2>
                <br />
                <br />
                    <div className="devinfo">
                        <div className="dev2 dev"></div>
                        <div className="devname">
                        <h2>Jasmeet Singh</h2><br /><h3>(Frontend Developer)</h3>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                     <div className="devinfo">
                        <div className="dev1 dev"></div>
                        <div className="devname">
                        <h2>Jagjeet Singh</h2><br /><h3>(Backend Developer)</h3>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}
