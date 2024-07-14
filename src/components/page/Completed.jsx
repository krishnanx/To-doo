import React,{useContext} from 'react'
import { themeContext } from '../../App';
import CompletedData from '../completedData/CompletedData';
import './Completed.css'
const Completed = () => {
    const [theme,setTheme]=useContext(themeContext);
    
    const themeStyle={
        //display: 'flex',
        //alignItems:'center',
        //justifyContent: 'center',
        //width:'100%',
        //height:'89.8vh',
        backgroundColor: theme? '#36454F':'white',
        //color: theme? 'white':'black',  
        
        
    }
    
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