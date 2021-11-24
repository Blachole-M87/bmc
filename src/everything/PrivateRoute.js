import React from 'react'
import {  Navigate,Outlet} from 'react-router-dom'
// const PrivateRoute =({children,...components})=>{
const PrivateRoute =()=>{
     const isAuthorized = localStorage.getItem("token")
    return isAuthorized?<Outlet/>:<Navigate to="/login"/>
    // return(< Route{...components} render={()=>isAuthorized?(children):(<Navigate to={'login'}/>)} />)
}
export default PrivateRoute 