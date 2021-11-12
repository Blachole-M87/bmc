import Navbar from "./everything/Navbar";
import Home from "./everything/Home";
import Section from "./everything/Section";
// import Footer from "./everything/Footer";
// import Login from "./everything/Login";
import Complain from "./everything/Complain";
import {
 
  Routes,
  Route,
} from "react-router-dom"
function App() {
  return (
    <>
        <Navbar title="BMC"/>
        <Routes>
            <Route Route path="/" element={<Home/>}>
                  <Route path='/' element={<Section com="Complain now" />}/>
                  {/* <Route  path='/' element={<Footer CT="CONTACT US"/>}/> */}
            </Route>
            <Route path="complain" element={<Complain CN="Complain Form"/>}/>
        </Routes>
    
    </>
  );
}

export default App;
