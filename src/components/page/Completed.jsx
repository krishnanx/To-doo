import React,{useContext} from 'react'
import { importantContext } from '../../App';
import CompletedData from '../completedData/CompletedData';
import './Completed.css'
const Completed = () => {
  const [todo,setTodo,theme,setTheme]=useContext(importantContext);
    
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
    const completed = {
      
        border:'solid',
        borderColor: theme?'white':'black',
        backgroundColor:theme?'rgba(139, 236, 245,0.5)':`rgba(139, 236, 245,0.6)`,
      
      
    }
    
  return (
    <div style={themeStyle} className='CompletedPage'>
      
      <div  className='completed' style={completed}>
        <div className='Completed_Task'>
          <h1>Completed Tasks</h1>
        </div>
            <CompletedData/>
        </div>
    </div>
  
  )
}

export default Completed