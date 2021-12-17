import React from 'react';
import Cards from './Cards/Cards';
import CardData from './CardData'
import './Features.css'


function Features() {

    return (
        <div className="feature">
        {CardData.map(val => {
            return (
                <Cards 
                    src = {val.src}
                    head = {val.head}
                    desc = {val.desc}
                />
            )
        })}

        </div>
    )
}

export default Features;
