import React,{useState,useContext} from 'react'

import ToDoForm from '../ToDoForm/ToDoForm'
import Data from '../Data/Data'
import "./Important.css";
import { themeContext } from '../../App';
import { importantContext } from '../../App';
const Important = () => {

  
  const [theme,setTheme]=useContext(themeContext);
  const [todo,setTodo] = useContext(importantContext);
  const themeStyle={
        //display: 'flex',
        //alignItems:'center',
        //justifyContent: 'center',
        //width:'100%',
        //height:'89.8vh',
        backgroundColor: theme? 'black':'white',
        //color: theme? 'white':'black',  
    }
      const important={
      border:'solid',
      borderColor: theme?'while':'black',
    }
 
  return (
    <div className='Homepage' style={themeStyle}>
      <div style={important} className='Important'>
        <h1>Important Tasks</h1>
        <ToDoForm todo={todo} setTodo={setTodo}/>
        <Data todo={todo} setTodo={setTodo}/>
      </div>
      
    </div>
    
  )
}

export default Important