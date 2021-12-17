import React from 'react'
import Image from '../../Images/Image'
import './Divs.css'

function ThirdDiv() {
    return (
        <div class="third_div">
        <Image
            src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
            cls="footer-swiggy"
        />
        <p>© 2021 Swiggy</p>
        <div>
            <Image 
              src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
              cls="social-media"
            />
            <Image 
              src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
              cls="social-media"
            />
            <Image 
              src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
              cls="social-media"
            />
            <Image 
              src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
              cls="social-media"
            />
        </div>
                    
        </div>
    )
}

export default ThirdDiv
