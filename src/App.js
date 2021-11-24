import React, { useState } from 'react'
import Navbar from "./everything/Navbar";
import Home from "./everything/Home";
import Section from "./everything/Section";
// import Footer from "./everything/Footer";
// import Login from "./everything/Login";
import Registration from "./everything/Registration";
import Conditional from "./everything/Conditional"
import Login from './everything/Login';
import PrivateRoute from './everything/PrivateRoute';
import CrudApi from './everything/CrudApi';

import {
  Routes,
  Route,
  
} from "react-router-dom"
import PageNotFound from './everything/PageNotFound';
import Chartjs from './everything/Chartjs';
function App() {
  const [display, setDisplay] = useState("Turn of Display")
  const [buttonColor, setButtonColor] = useState("onDisplay")
  const [switchdisplay, setSwitchdisplay] = useState("displayOn")


  const togglemode =()=>{
    if(display === "Turn of Display")
    { 
      setDisplay('Turn on Display')
      setButtonColor('ofDisplay')
      setSwitchdisplay('displayOf')
    }
    else{
      setDisplay('Turn of Display')
      setButtonColor('onDisplay')
      setSwitchdisplay('displayOn')

    }
  }
  
  return (
    <>
                  <Navbar title="BMC"/>
                  <Routes>
                        <Route path="register" element={<Registration CN="Create an account "/>}>
                        </Route>
                        <Route path="login" element={<Login/>}/>
                       
                          <Route path ="/" element={<PrivateRoute/>}>
                          <Route Route path="/" element={<Home/>}>
                                <Route path='/' element={<Section com="Complain now" />}/>
                                {/* <Route  path='/' element={<Footer CT="CONTACT US"/>}/> */}
                          </Route>
                      <Route path="conditional"  element={<Conditional display={display} buttonColor={buttonColor} switchdisplay={switchdisplay} togglemode={togglemode}/>}/>   
                      <Route path="/services" element={<CrudApi/>}/> 
                      <Route path="/chartjs" element={<Chartjs/>}/> 
                      <Route path=":pageName" element={<PageNotFound/>}/> 
                      </Route>            
                  </Routes>

    </>
  );
}

export default App;
