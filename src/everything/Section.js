import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

export default function Section(props) {
 
    const [bg, setBg] = useState({isEnter:false})
  
 const mouseEnterHandler=()=>{
    setBg({isEnter: !bg.isEnter})
  }
    return (
        <>
            <section className="background firstsec">
                <div className="mainbox">
                    <div className="firsth">
                        <p className="head">
                            Paste Anything
                        </p>
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto nobis iure suscipit
                            eius repellat voluptas consectetur animi cupiditate maiores!
                        </p>
                        <div className="buttons">
                            <button className={bg.isEnter?"onEnter":"onReEnter"} onMouseEnter={mouseEnterHandler}>{props.com}</button>
                        </div>

                    </div>c
                    <div  className="secondh">
                        <p className="head">
                            BMC is here to help you
                        </p>
                        <p className="para">               
                                Your complain regarding environment 
                            misleading activity will be our priority,
                            please feel free to complain anytime. 
                                                       
                        </p>
                        <div className="buttons" >
                           {/* onMouseEnter Task */}
                           <button className='btnsm' >Know More</button>
                        </div>
                    </div>
                </div>
               
             </section>
        </>
    )
}
