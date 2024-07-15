import React,{useState,useContext, useEffect} from 'react'

import ToDoForm from '../ToDoForm/ToDoForm'
import Data from '../Data/Data'
import "./Important.css";

import { importantContext } from '../../App';
import { Email } from '../Contexts/EmailContext';
const Important = () => {

  
  
  const [todo,setTodo,theme,setTheme]=useContext(importantContext);
  const [click,setClick] = useContext(Email)
  
    const cardTheme = {
      display:click===true?'flex':'none'
    }
 
  
  const themeStyle={
    width: '100%',
    height: '900px',
    background: theme?`radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px / 40px 60px,
    radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px / 40px 60px,
    linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0 / 40px 60px,
    linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
    linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
    linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 / 40px 60px #282828`:`linear-gradient(45deg,transparent 33.33%,rgba(57, 144, 179, 0.1) 33.33%,rgba(0, 0, 0, 0.1) 66.66%,
      transparent 66.66%) 0 0 / 20px 20px,lightblue`,
                  
    //backgroundColor:theme?'none':'white',
    }
      const important={
      border:'solid',
      borderColor: theme?'white':'black',
      backgroundColor:theme?'rgba(139, 236, 245,0.5)':`rgba(139, 236, 245,0.6)`,
    
    }
 
  return (
    <div className='Homepage' style={themeStyle}>
      <div style={important} className='Important'>
        
          <div style={cardTheme} className="card">HOVER</div>
        
        
        <h1>Important Tasks</h1>
        <ToDoForm todo={todo} setTodo={setTodo}/>
        <Data todo={todo} setTodo={setTodo}/>
      </div>
      
    </div>
    
  )
}

export default Important