import React,{useContext, useState} from 'react'   
import './Landing.css'
import { themeContext } from '../../App';

const Landing = () => {
    const [theme,setTheme]=useContext(themeContext);
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
        Home
    </div>
  )
}

export default Landing