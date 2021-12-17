import React from 'react'
import Image from '../../Images/Image'
import "./Info.css"

function Info() {
    return (
        <div className="info-div" >
            <h1>Restaurants in your pocket</h1>
            <p>Order from your favorite restaurants & track on the go, 
            with the all-new Swiggy app.</p>
            <div className="div-img">
            <Image
                   src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                   cls="img-play"
               />
               <Image
                   src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                   cls="img-play"
               />

            </div>
            
        </div>
    )
}

export default Info
