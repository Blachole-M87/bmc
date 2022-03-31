import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
// const PrivateRoute =({children,...components})=>{
const PublicRoute =()=>{
    const isAuthorized = localStorage.getItem("token")
    return !isAuthorized?<Outlet/>:<Navigate to="/"/>
    // return(< Route{...components} render={()=>isAuthorized?(children):(<Navigate to={'login'}/>)} />)
}
export default PublicRoute 