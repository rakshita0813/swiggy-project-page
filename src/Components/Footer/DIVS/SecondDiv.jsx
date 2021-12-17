import React from 'react'
import Heading from '../Footer_heading/Heading'
import ListItem from '../Footer_desc/ListItem'
import heading_data, {list_data} from '../data'
import './Divs.css'


function SecondDiv() {
    return (
        <div className="second-div">
            <Heading
                heading = {heading_data[1]}
            />
            <div className="second_div_list">
                {
                    list_data[3].map((item)=>{
                        console.log(item)
                        return  <ListItem
                                    data = {item}
                                />
                    })
                }
            </div>
        </div>    
            
    )
}

export default SecondDiv
