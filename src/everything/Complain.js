import { useFormik} from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Complain(props) {


    const initialValues= {
        fullname: '',
        email: '',
        number: '',
        textarea: ''
    }
    
    const onSubmit = values => {
        console.log('form data', values)
    }
    const validate = values => {
        let errors = {}
        if(!values.fullname){errors.fullname="Required" }
        if(!values.email){errors.email="Required"}
        if(!values.number){errors.number="Required"}
        if(!values.textarea){errors.textarea="Required"}
        return errors;
    }
   
    const validateSchema = Yup.object({
        name: Yup.string().min(3),
        email: Yup.string().email().required("Required!"),
        number: Yup.number("must be number").min(10).max(10,"must be exact 10 number")
    })

    const Formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validateSchema

    })
    console.log('values', Formik.values)
    console.log('visited form', Formik.touched)

    return (
        <>
            <div className="container">
                <div className="complain-area">
                    <h3>
                        <strong>{props.CN}</strong>
                    </h3>
                    <form id="complain-box" onSubmit={Formik.handleSubmit}>

                        <div className="form-control">
                        <input type="text" id="fullname" name="fullname" onChange={Formik.handleChange} value={Formik.values.fullname}
                        onBlur={Formik.handleBlur} placeholder="Enter your fullname" />
                        <div></div>
                        {/* <div>{Formik.touched.fullname && Formik.errors.fullname ? <div className="error">{Formik.errors.fullname}</div>:null}</div> */}
                        </div>
                        <div className="formcontrol">
                        <input type="email" id="email" name="email" onChange={Formik.handleChange} value={Formik.values.email}
                        onBlur={Formik.handleBlur} placeholder="Enter your email" />
                        <div>{Formik.touched.email && Formik.errors.email ? <div className="error">{Formik.errors.email}</div>:null }</div>
                        </div>
                        <div className="formcontrol">
                        <label htmlFor="gender">
                            Gender:
                            <input type="radio" name="male" id="gender" />male
                            <input type="radio" name="female" id="gender" />female
                        </label>
                        </div>
                        <div className="formcontrol">
                        <input name="number" type="tel" id="number" onChange={Formik.handleChange} value={Formik.values.number}
                        onBlur={Formik.handleBlur} placeholder="enter your number" />
                        <div>{Formik.touched.number && Formik.errors.number ? <div className="error">{Formik.errors.number}</div>:null }</div>
                        </div>
                        <div className="formcontrol">
                        <label htmlFor="Time">When the incident happen:
                            <input name="date" type="date" id="Time" />
                            <input type="time" id="Time" />
                        </label>
                        </div>
                        <div className="formcontrol">
                        <input name="file" type="file" id="upload" />
                        <textarea name="textarea" id="text-area" onChange={Formik.handleChange} value={Formik.values.textarea} cols="35" rows="10" placeholder="Write about your complain"></textarea>
                        <div>{Formik.touched.textarea && Formik.errors.textarea ? <div className="error">{Formik.errors.textarea}</div>:null }</div>
                        </div>
                        <button className="complain-confirm" type="submit">Submit Complain</button>
                    </form>

                </div>

            </div>
        </>
    )
}
