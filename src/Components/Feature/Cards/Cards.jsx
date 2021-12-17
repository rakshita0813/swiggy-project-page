import React from 'react'
import Image from '../../Images/Image'
import './Card.css'
function Cards(props) {
    return (
       <>
        <div className="feature-data">
            <div>
                <Image
                    src={props.src} 
                    cls="feature-img"
                />
            </div>
            <div className="feature-heading">{props.head}</div>
            <div className="feature-desc"><p>{props.desc}</p></div>
        </div>
       </>
    )
}

export default Cards;

