import React from 'react'
const Conditional = (props) => {
    return (
        <div className={props.switchdisplay}>
            <button className={props.buttonColor} onClick={props.togglemode}>{props.display}</button>
        </div>
    )
}

export default Conditional
