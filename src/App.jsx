import React,{useState,useContext, createContext, useEffect} from 'react'
import './App.css'
import Important from './components/page/Important'
import Navbar from './components/navbar/Navbar'
import Landing from './components/page/Landing'
import Completed from './components/page/Completed'
import {BrowserRouter as Router,Route,Routes,useLocation} from 'react-router-dom'
export const themeContext=createContext();
export const importantContext=createContext();
import EmailContext from './components/Contexts/EmailContext'
import {Email} from './components/Contexts/EmailContext'
import Protected from './components/Protected/Protected'
//import AuthContext from './components/Contexts/AuthContext'
import { auth } from './components/Firebase/Firestore'
const App = () => {
  
  const [todo, setTodo] = useState([]);
  const [theme,setTheme]= useState(false);
 
  
  //const [user, setUser] = useState(null)
  theme?document.documentElement.style.backgroundColor = '#36454F':document.documentElement.style.backgroundColor='white';
  /*useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    })
  })*/
  
  return (
      <EmailContext>
          
            <importantContext.Provider value={[todo,setTodo,theme,setTheme]}>
                <Router>
                  <div style={{backgroundColor:'black'}}>
                    <Navbar/>
                    <Routes>  
                      <Route path='/' element={<Landing/>}/>
                      <Route path='/Important' element={ <Protected>
                                                           <Important />
                                                          </Protected>}/>
                      <Route path='/Completed' element={<Protected>
                                                          <Completed />
                                                        </Protected>}/>
                    </Routes>
                  </div>
              </Router>
          </importantContext.Provider>
        
      </EmailContext>
    
    
    
    
  )
}

export default App