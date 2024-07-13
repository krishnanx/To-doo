import React,{useContext} from 'react'
import { completedContext, themeContext } from '../../App';
import CompletedData from '../completedData/CompletedData';
import './Completed.css'
const Completed = () => {
    const [theme,setTheme]=useContext(themeContext);
    const [comp_value,setComp_value]=useContext(completedContext);
    const themeStyle={
        //display: 'flex',
        //alignItems:'center',
        //justifyContent: 'center',
        //width:'100%',
        //height:'89.8vh',
        backgroundColor: theme? 'black':'white',
        //color: theme? 'white':'black',  
        
        
    }
    console.log(comp_value)
  return (
    <div style={themeStyle} className='CompletedPage'>
      
      <div  className='completed'>
        <div className='Completed_Task'>
          <h1>Completed Tasks</h1>
        </div>
            <CompletedData/>
        </div>
    </div>
  
  )
}

export default Completed