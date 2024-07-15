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
  theme?document.documentElement.style.background =`radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px / 40px 60px,
    radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px / 40px 60px,
    linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0 / 40px 60px,
    linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
    linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0 / 40px 60px,
    linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 / 40px 60px #282828`:document.documentElement.style.background=`linear-gradient(45deg,transparent 33.33%,rgba(57, 144, 179, 0.1) 33.33%,rgba(0, 0, 0, 0.1) 66.66%,
      transparent 66.66%) 0 0 / 20px 20px,lightblue`;
  /*useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    })
  })*/
  
  return (
      <EmailContext>
          
            <importantContext.Provider value={[todo,setTodo,theme,setTheme]}>
                <Router>
                  <div>
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