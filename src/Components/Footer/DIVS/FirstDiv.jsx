import React from 'react'
import Heading from '../Footer_heading/Heading'
import ListItem from '../Footer_desc/ListItem'
import heading_data, {list_data} from '../data'
import Btn from './Btn'
import './Divs.css'

function FirstDiv() {
    return (
        <div className="first_div">
        { 
            heading_data[0].map((item,index)=>{
                 return(
                     <div className="divv">
                         <Heading
                             heading={item}
                         />
                         <ListItem
                             data = {list_data[index]}
                         />
                        
                     </div>
                 )
             })
        }
        <Btn/>
        </div>
    )
}

export default FirstDiv
