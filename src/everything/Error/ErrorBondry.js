import React, { Component } from 'react'
import {Outlet} from 'react-router-dom'

class ErrorBondry extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        console.log(error)
      return {hasError:true}
    }

    render() {
     if(this.state.hasError){
         return (
             <div className="container">
                 Kuch Toh Locha Hai
             </div>
         )
     }
     else{
         return this.props.children
     }
    }
}

export default ErrorBondry
