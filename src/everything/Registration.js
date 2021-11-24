import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import * as Yup from 'yup'

export default function Complain(props) {
    const Navigate= useNavigate()
        // const [erroring, setErroring] = useState("")
    const initialValues = {
        username: '',
        email: '',
        number: '',
        password:"",
        cpassword:""
        // textarea: ''
    }

    // const onSubmit = (e) => {
    //     if(!Formik.errors){
    //         e.preventDefault()
    //         console.log("fill the form properly")
    //     }
    //     else{
    //         e.preventDefault()
    //         var credentials = JSON.stringify(Formik.values)
    //         console.log(credentials)
    //     }
    // }
    // const validate = values => {
    //     let errors = {}
    //     if(!values.fullname){errors.fullname="Required" }
    //     if(!values.email){errors.email="Required"}
    //     if(!values.number){errors.number="Required"}
    //     if(!values.textarea){errors.textarea="Required"}
    //     return errors;
    // }
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const passRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    const validationSchema = Yup.object().shape({
        username: Yup.string("must be an alphabet").min(3, 'minimum 3 charater').required('*'),
        email: Yup.string().email().required("*"),
        number: Yup.string().matches(phoneRegExp,"number must be valid").required('*').min(10,'must be 10 digit of numbers').max(10,"numbers must be 10 digit"),
        // textarea: Yup.string().required('*'),
        password: Yup.string().matches(passRegex,"please enter valid password").required('*'),
        cpassword: Yup.string().required("*").oneOf([Yup.ref('password')],"password should match")
    })
    const onSubmit =(e)=>{
        e.preventDefault()
        // console.log("Form data",Formik.values)
        const Register = JSON.stringify({username:Formik.values.username,email:Formik.values.email,number:Formik.values.number,password:Formik.values.password,cpassword:Formik.values.cpassword})
        localStorage.setItem('UserData',Register)
        console.log(Register)
        Navigate("/login")
    }
    const Formik = useFormik({
        initialValues,
        // validate,
        validationSchema,
        onSubmit
    })
    
    // const handleKeyPress = (e)=>{
    //     var key = e.key
    //     const regex =/^[0-9\b]+$/;
    //     if(e.target.value.length === 0){
    //         setErroring('*')
    //     }
    //    else if(!regex.test(key)){
    //         setErroring("enter a valid number");
    //     }
    //     else if(e.target.value.length !== 9){
    //         setErroring("numbers must be 10 digit");
    //     }
    //     else{
    //         setErroring("")
    //     }
       
    // }
   
    return (
        <>
            <div className="container">
                <div className="complain-area">
                    <h3>
                        <strong>{props.CN}</strong>
                    </h3>
                    <form id="complain-box" onSubmit={onSubmit}>

                        <div className="formcontrol">
                            <input type="text" id="username" name="username" onChange={Formik.handleChange} value={Formik.values.username} onBlur={Formik.handleBlur} placeholder="Enter your username" />
                            <sup>{Formik.touched.username && Formik.errors.username ? <sup className="error">{Formik.errors.username}</sup> : null}</sup>
                        </div>

                        <div className="formcontrol">
                            <input type="email" id="email" name="email" onChange={Formik.handleChange} value={Formik.values.email} onBlur={Formik.handleBlur} placeholder="Enter your email" />
                            <sup>{Formik.touched.email && Formik.errors.email ? <div className="error">{Formik.errors.email}</div> : null}</sup>
                        </div>

                        {/* <div className="formcontrol">
                            <label htmlFor="gender">
                                Gender:
                                <input type="radio" name="male" id="gender" />male
                                <input type="radio" name="female" id="gender" />female
                            </label>
                        </div> */}

                        {/* <div className="formcontrol">
                            <input name="number" type="text" id="number" onChange={Formik.handleChange} value={Formik.values.number} onBlur={Formik.handleBlur} placeholder="enter your number" />
                            <sub>{Formik.touched.number && Formik.errors.number ? <div className="error">{Formik.errors.number}</div> : null}</sub>
                        </div> */}

                        {/* onKeyPress Task */}
                        <div className="formcontrol">
                        {/* onKeyPress={(e)=>handleKeyPress(e)} */}
                            <input name="number" type="text" id="number"  onChange={Formik.handleChange} value={Formik.values.number} onBlur={Formik.handleBlur} placeholder="enter your number" />
                            <sub>{Formik.touched.number && Formik.errors.number ? <div className="error">{Formik.errors.number}</div> : null}</sub>
                        </div>

                        {/* <div className="formcontrol">
                            <label htmlFor="Time">When the incident happen:
                                <input name="date" type="date" id="Time" />
                                <input type="time" id="Time" />
                            </label>
                        </div> */}

                        {/* <div className="formcontrol1">
                            <input name="file" type="file" id="upload" />
                            <textarea name="textarea" id="textarea" onChange={Formik.handleChange} value={Formik.values.textarea} cols="35" rows="10" placeholder="Write about your complain" />
                            <div>{Formik.touched.textarea && Formik.errors.textarea ? <div className="error">{Formik.errors.textarea}</div> : null}</div>
                        </div> */}

                        <div className="formcontrol">
                            <input type="password" id="password" name="password" onChange={Formik.handleChange} value={Formik.values.password} onBlur={Formik.handleBlur} placeholder="Enter your password" />
                            <sup>{Formik.touched.password && Formik.errors.password ? <div className="error">{Formik.errors.password}</div> : null}</sup>
                        </div>
                        <div className="formcontrol">
                            <input type="password" id="cpassword" name="cpassword" onChange={Formik.handleChange} value={Formik.values.cpassword} onBlur={Formik.handleBlur} placeholder="Confirm password" />
                            <sup>{Formik.touched.cpassword && Formik.errors.cpassword ? <div className="error">{Formik.errors.cpassword}</div> : null}</sup>
                        </div>

                        <div className="isAllvalid" >{!Formik.isValid?"Fill all the fields properly":""}</div>
                        <button className="complain-confirm" disabled={!Formik.isValid || Formik.isSubmitting || !Formik.dirty } type="submit">Register</button>
                        
                    </form>

                </div>

            </div>
        </>
    )
}
