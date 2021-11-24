import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Main(props) {
    const Navigate = useNavigate()
    const handlingSubmit = ()=>{
        localStorage.removeItem('token')
        Navigate('/login')
    }
    const token = localStorage.getItem('token')
    return(
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <div className="logo">
                        {/* <img src="src/small.jpg" alt="logo" /> */}
                        {props.title}
                    </div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/conditional">Conditional Rendering</Link></li>
                    <li><Link to="/services">API Integration</Link></li>
                    <li><Link to="/chartjs">Chart JS</Link></li>
                    {/* <button className="btnsm">help?</button> */}
                    <div>{token?<div><button className="logout" onClick={handlingSubmit}>Logout</button></div>:""}</div>
                
                </ul>
            </nav>
      </>
    
    )
}

