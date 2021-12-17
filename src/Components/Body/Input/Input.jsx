import React,{useState} from 'react'
import Button from '../../Button/Button';
import '../Body'
import './Input.css'

function Input() {
    const [data, setData] = useState('');
    return (

        <div className="input_div">
            <input 
                value={data} 
                onChange={(e)=>{
                    setData(e.currentTarget.value)
                    } }
                type="text" 
                placeholder="Enter your delivery location" 
            />

            <Button
                ico = "true"
                cls = "Location_btn"
                btn = "Locate Me"
                />
            <Button
                cls = "Food_btn"
                btn = "Find Food"
            />
         </div>   
    )
}

export default Input
