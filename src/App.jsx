import React,{useState,useContext, createContext} from 'react'
import './App.css'
import Important from './components/page/Important'
import Navbar from './components/navbar/Navbar'
import Landing from './components/page/Landing'
import Completed from './components/page/Completed'
import {BrowserRouter as Router,Route,Routes,useLocation} from 'react-router-dom'
export const themeContext=createContext();
export const importantContext=createContext();
export const completedContext=createContext()
import EmailContext  from './components/Contexts/EmailContext'
const App = () => {
  
  const [todo, setTodo] = useState([]);
  const [theme,setTheme]=useState(false);
  const [comp_value, setComp_value] = useState([]);
  theme?document.documentElement.style.backgroundColor = 'black':document.documentElement.style.backgroundColor='white';
  
  return (
    <EmailContext>
        <themeContext.Provider value={[theme,setTheme]}> 
        <importantContext.Provider value={[todo,setTodo]}>
          <completedContext.Provider value={[comp_value,setComp_value]}>
          <Router>
            <div style={{backgroundColor:'black'}}>
              <Navbar/>
              <Routes>  
                <Route path='/' element={<Landing/>}/>
                <Route path='/Important' element={<Important/>}/>
                <Route path='/Completed' element={<Completed/>}/>
              </Routes>
            </div>
        </Router>
          </completedContext.Provider>
        </importantContext.Provider>
      </themeContext.Provider>
    </EmailContext>
    
    
  )
}

export default App