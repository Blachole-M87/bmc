import React, { useState,useEffect } from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Login() {
    const Navigate = useNavigate()
    const [credentials, setCredentials] = useState({username:"",password:""})
    const [error, setError] = useState("")
    const [loggedin, setLoggedin] = useState(false)
    const onChangeHandler =(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleOnSubmit =(e)=>{
         e.preventDefault()
         const UserData = localStorage.getItem('UserData')
         let userData = JSON.parse(UserData)
         if(credentials.username === userData.username && credentials.password === userData.password){
             localStorage.setItem('token',Math.random().toString(20).substr(2,10))
            //  Navigate('/')
            setLoggedin(true)
         }
         else{
            setError("enter valid credentials")

         }
    }
   useEffect(() => {
      if(loggedin === true){
          Navigate('/')
      }
   })
    return (
        <div className="loginpage">
            <div className="loginformik">
                <div className="loginform">
                  <form onSubmit={handleOnSubmit}>

                      <div className="formcontrolling">
                    <input className="field" type="text" name="username" id="username" onChange={onChangeHandler} placeholder="Username"/>
                    </div>

                    <div className="formcontrolling">
                    <input className="field" type="password" name="password" id="password" onChange={onChangeHandler} placeholder="Password" />  
                    </div>

                    <div>
                       <button className="loginbutton" type="submit">Login</button>
                    </div>
                    <div>{error}</div>

                     <div>
                         <span className="new">New User?</span>
                            <span className="link">
                                <Link to="/register">Create account</Link>
                            </span>
                     </div>
                  </form>
                  </div>
            </div>
        </div>
    )
}
