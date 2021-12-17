import React from 'react'
import './Image.css'

function Image(props) {
    return (
        <img 
            src={props.src}
            className={props.cls}
            alt=""
        />
    )
}

export default Image
