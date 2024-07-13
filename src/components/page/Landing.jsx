import React,{useContext, useState} from 'react'   
import './Landing.css'
import { themeContext } from '../../App';
import { Email } from '../Contexts/EmailContext';
const Landing = () => {
    const [theme,setTheme]=useContext(themeContext);
    const [email,setEmail] = useContext(Email)
    const themeStyle={
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width:'100%',
        height:'89.8vh',
        backgroundColor: theme? 'black':'white',
        color: theme? 'white':'black',  
        
        
    }
    const my = `${theme}`
    
   
  return (
    <div style={themeStyle}>
        <p>{email}</p>
    </div>
  )
}

export default Landing