import React from 'react'
import { Outlet } from 'react-router'

// import Section from "../everything/Section";
import Footer from "../everything/Footer";
const Home = () => {
    return (
        <div>
            <Outlet/>
           {/* <Section com="Complain now" /> */}
          <Footer  CT="CONTACT US"/> 
        </div>
    )
}

export default Home
