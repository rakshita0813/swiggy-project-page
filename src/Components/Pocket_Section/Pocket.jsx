import React from 'react';
import Info from './Pocket_info/Info';
import Image from '../Images/Image';
import './Pocket.css'

function Pocket() {
    return (
        <div className="pocket_section">
            <Info/>
            <Image
                src="https://web.archive.org/web/20210909224830im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"  
                cls = "left_img"
            />
            <Image
                src ="https://web.archive.org/web/20210909224830im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
                cls = "right_img"
            />   
        </div>
    )
}

export default Pocket
