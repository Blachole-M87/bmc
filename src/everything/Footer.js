import React, { useState } from 'react'

 function Footer(props) {
 const [contactInfo, setContactInfo] = useState({name:"",number1:"",textarea1:""})
 const [erroring, setErroring] = useState('')
       const handleOnCahnge =(e)=>{
         setContactInfo({...contactInfo,[e.target.name]:e.target.value})
       }
    const handleOnsubmit= (e)=>{
        e.preventDefault()
        console.log(contactInfo)
    }

    const handleKeyPress = (e)=>{
            var key = e.key
            const regex =/^[0-9\b]+$/;
            if(e.target.value.length === 0){
                setErroring('*')
            }
           else if(!regex.test(key)){
                setErroring("enter a valid number");
            }
            else if(e.target.value.length !== 9){
                setErroring("numbers must be 10 digit");
            }
            else{
                setErroring("")
            }
           
        }


    return (
        <>
            <footer className='box2'>
                <div className="thirdh">
                    <h2><strong>
                        {props.CT}
                    </strong>
                    </h2>

                    <form onSubmit={handleOnsubmit} className="forms">

                        <input type="text" id="name" name="name" placeholder="enter your name" required onChange={handleOnCahnge} />
                        {/* onKeyPress Task */}
                        <input type="text" id="number1" onKeyPress={(e)=>handleKeyPress(e)} name="number1" placeholder="enter your number" required onChange={handleOnCahnge} />
                        <div className="eror">
                            {erroring}
                        </div>
                        <input type="textarea" id="textarea1" name="textarea1" placeholder="write us"
                        required
                           onChange={handleOnCahnge}
                        />
                    <div className="sub">
                        <button type="submit" className="btnsm">submit</button>
                    </div>
                    </form>
                </div>
                <div className="forth">
                <div className="icon1">
                    <div className="pn1">
                        <a href="/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge3ZTYhNYRzH8c9lMCiTCBGSwoIFCykpUkpKUkopFmq2llZTmpWtpYWUlI2SjQULUlImyYYFsSDykvf3lzkW57kz55o7Z+7LOXNv0/OtU0/3+b/8fp37P7fnXCKRSCTSASpIOi2iCKZ1WkBR9GTWlY6paI+EKXRHskZWd0xF69RoTsL1Efs6Iqc1duOdUf0jiwTDOKm7v3IVHMdftdpHFgOZzcvo64jMfPqk2hKp1gF1jFB7ux5h/WQrzWEtHhg7BnWNwAoMhc8+48BkKc1hLz5INd1XO+TjGoFenM3sncaMksXWY7p0ZoeDjguY+19MrpEq/fgV9m9gcQlix2MBrobev6UDXo+GjMA2vAwxz7C5KKU5bMST0PMNdubENmwEluF2iPuBo+0qzeEQvoZed7FygvimjMAsnFI7NzNbFFuPHuk8VOufw+wG8po2UuUwvoWcW1jaRO54LMJ1o3e8v4nclo3AJjwNea+xo8n8LFvxItR6ji1N5rdlBBbimomfKnn042eocRNLWqjRthHGPufPY04Deb04o3beWv2dKsRIlYP4Eurcw6qc2OW4E2K/40ibvQs1AuvwMNR6i111YrbjVYh5jA0F9C3cCMzDpVDvD05IjwQVHJPOUoIrmF9Qz1KMkAofNDo3F8NVPe8MKva8U5qRKnvwPlP/E/aX0Kd0I7BGeiQYCusySJBkX9DF10HdQDTSbUQj3UY00m1MGSPxH6tIJBKJRPAPY/XJ4uhaC7EAAAAASUVORK5CYII=" alt=""/>
                        </a>
                    </div>
                </div>
                            
                <div className="icon2">
                    <div className='pn2'>
                        <a href="/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB4klEQVRoge3YO2sUURiA4UdXQfGCgo0sQbE0grYWFiqCF4yFtbUQE8UyrXVKm0D8AxaChX/AfyARxEJUtBARxESjIe7GYrfInNlk58wlp3BeOMU3zPm+99yYCy0t/ze7as43gVu4gZPDGD7hPV7gOT7XXLcyXSxgHRtjWg9PcSKJ6QimsGy8eNiWcTOBb4ZZgxmNld+8GjM7bj1kymj5JTzAJA4M2+Tw2tKI+3sSrERXftusYRq7t+nXMZjxtaDvDxxv0DfHorz8pYj+l+UHsVCz45ZM4G9QfLpEntkgx7rByjbOjPye75TI08FrFSdiu/26FdeDeNHgIMbSw5MxuRvhreysna6Q60yQ601luwKsBEUPVsh1KMi1EptgT8middEP4uh3szJnoE5OBfG32ASpB3AtiF8lsSjJPnyQPQP3kxpFMi8r/wfHkhpFcNvgAG8ewHxSowiu4Les/DscSSlVlIv4JSu/inMppYpyAT9l5fu4k1KqKOfln+B93EspVZQuvsh/iT1MKVWUvXgpLz+XUiqGOXn5R0mNIjgs/938TP0/0xrjrqz8Vxytu0iTL3NXg/gxvjdYr3Y+yq7A2bQ68azKDmB/Wp2WlpaWJmjysb6xE7VS/1apTDuAlpaWtPwD6OHBCr3G2OMAAAAASUVORK5CYII=" alt=""/>
                        </a>
                    </div>
                </div>
                </div>
            </footer>
            <div className="copyright">
                <p>copyright &copy; 2021 BMC,Allright Resevred</p>
            </div>
        </>
    )
}
export default Footer
