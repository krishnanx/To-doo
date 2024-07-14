import React,{useContext, useState} from 'react'   
import './Landing.css'
import { importantContext} from '../../App';
import { Email } from '../Contexts/EmailContext';
const Landing = () => {
    const [todo,setTodo,theme,setTheme]=useContext(importantContext);
    const [email,setEmail,currentUser] = useContext(Email)
    const themeStyle={
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width:'100%',
        height:'89.8vh',
        backgroundColor: theme? '#36454F':'white',
        color: theme? 'white':'black',  
        
        
    }
    const my = `${theme}`
    
   
  return (
    <div style={themeStyle}>
        {currentUser!==null?<p>Welcome {currentUser}</p>:null}
    </div>
  )
}

export default Landing