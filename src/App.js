import React, { useState,lazy, Suspense } from 'react'
import Navbar from "./everything/Navbar";
import Home from "./everything/Home";
import Section from "./everything/Section";
// import Footer from "./everything/Footer";
import Registration from "./everything/Registration";
// import Conditional from "./everything/Conditional"
import Login from './everything/Login';
import PrivateRoute from './everything/PrivateRoute';
// import CrudApi from './everything/CrudApi';
import {
  Routes,
  Route,
} from "react-router-dom"
import PageNotFound from './everything/PageNotFound';
import Chartjs from './everything/Chartjs';
import ErrorBondry from './ErrorBondry';
import TestingArea from './everything/TestingArea';

const CrudApi = lazy(()=>import('./everything/CrudApi'))
const Conditional = lazy(()=>import('./everything/Conditional'))


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
                  <ErrorBondry>
                    <Navbar title="BMC"/>
                    <Routes>
                                <Route path="register" element={<Registration CN="Create an account "/>}/>
                    
                                <Route path="login" element={<Login/>}/>
                    
                                  <Route path ="/" element={<PrivateRoute/>}>
                                  <Route Route path="/" element={<Home/>}>
                                        <Route path='/' element={<Section com="Complain now" />}/>
                                        {/* <Route  path='/' element={<Footer CT="CONTACT US"/>}/> */}
                                  </Route>
                    
                                      <Route path="conditional"  element={<Suspense fallback={<h1>loading...</h1>}><Conditional display={display} buttonColor={buttonColor} switchdisplay={switchdisplay} togglemode={togglemode}/></Suspense>}/>
                                      <Route path="/services" element={<Suspense fallback={<h1>loading...</h1>}><CrudApi/></Suspense>}/>
                    
                              <Route path="/chartjs" element={<Chartjs/>}/>
                              <Route path="/testing" element={<TestingArea/>}/>
                              <Route path=":pageName" element={<PageNotFound/>}/>
                              </Route>
                    </Routes>
                  </ErrorBondry>

    </>
  );
}

export default App;
