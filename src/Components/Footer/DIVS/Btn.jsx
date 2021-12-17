import React from 'react'
import Image from '../../Images/Image'
import './Divs.css'

export default function Btn() {
    return (
        <div class="footer_btn">
            <button>
                <Image
                    src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                    cls="Google_play"
                /> 
            </button>
            <button>    
                <Image
                    src = "https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                    cls="Google_play"
                />
            </button>     
        </div>
    )
}
