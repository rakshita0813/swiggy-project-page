import React from 'react'
import './Button.css'
import cross from './crosshair-target-interface.png'
function Button(props) {
    return (
       <button className={props.cls}>
       {
           props.ico?
           <img src={cross} alt="" className="Location_img"/>:null
       }
            {props.btn}
       </button>
    )
}

export default Button
