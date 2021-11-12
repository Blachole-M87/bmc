import React from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
    return(
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <div className="logo">
                        {/* <img src="src/small.jpg" alt="logo" /> */}
                        {props.title}
                    </div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/setting">Settings</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <button className="btnsm">help?</button> */}
                </ul>
            </nav>
      </>
    
    )
}

