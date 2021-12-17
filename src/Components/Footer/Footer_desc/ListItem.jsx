import React from 'react'
import './List.css'

export default function ListItem(props) {
    return (
        <ul>
            {
                props.data.map(item=>{
                    return <li><a href="#" className="a">{item}</a></li>
                })
            }

        </ul>
    )
}
