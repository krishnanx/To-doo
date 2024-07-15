import React, { useState,useContext, useEffect } from "react";
import moon from '../navbar/icons/moon-solid.svg'
import sun from '../navbar/icons/sun-solid.svg'
import "./navbar.css";
import Blogo from "./icons/to-do-high-resolution-logo-black-transparent.png";
//import Wlogo from "./icons/whiteLogo"
import { useNavigate,useLocation } from "react-router-dom";
import { importantContext} from '../../App';
import { getAuth,signInWithPopup,setPersistence ,browserSessionPersistence,signOut} from "firebase/auth";
import { auth,provider } from "../Firebase/Firestore";
import { Email } from "../Contexts/EmailContext";
import Cookies from 'js-cookie';


const Navbar = (l) => {
  //const auth = getAuth();
  const [todo,setTodo,theme,setTheme]=useContext(importantContext);
  const [Name, setName] = useState("Important Tasks");
  const navigate = useNavigate();
  const location = useLocation();
  const [Location, setLocation] = useState("");
  const [value,setValue] = useState('')
  const [email,setEmail,currentUser,setCurrentUser] = useContext(Email)
  const HandleClick=()=>{
    setTheme(!theme);
  }
  const signIn = async() =>{
    try {
      
        const userCredentials = await signInWithPopup(auth, provider);
        const user = userCredentials.user;
        console.log(user)
        setEmail(user.email);
        setCurrentUser(user.displayName)
        document.cookie = `user=${user.email}; path=/; expires=31 Dec 2024 `;
        /*const idTokenResult = await user.getIdTokenResult();
        const expirationTime = idTokenResult.expirationTime; // Timestamp of token expiration
        console.log('Token expiration time:', new Date(expirationTime));

        const token = await user.getIdToken();
        console.log('Token retrieved:', token); // Debugging log

        // Set the token in a secure cookie
        Cookies.set('authToken', token, { secure: true, sameSite: 'Strict' });
        console.log('Cookie set:', Cookies.get('authToken')); // Debugging log*/

        console.log('User signed in and cookie set.');
     
      
    } catch (error) {
      console.log("error:", error)
    }
   
  }
  
  const signout = async() => {
    try {
      await signOut(auth).then(()=>{
        setEmail(null)
        setCurrentUser(null)
        console.log("sign out...")
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        console.log('User signed out and cookie removed.');
        navigate('/')
      })
      //const user = userCredentials.user;
      
        
      
      /*function onRemoved(cookie) {
        console.log(`Removed: ${cookie}`);
      }
      
      function onError(error) {
        console.log(`Error removing cookie: ${error}`);
      }
      
      function removeCookie(tabs) {
        let removing = browser.cookies.remove({
          url: "http://localhost:5173/",
          name: "user",
        });
        removing.then(onRemoved, onError);
      }
      
      let getActive = browser.tabs.query({ active: true, currentWindow: true });
      getActive.then(removeCookie);*/
      //document.cookie = 'COOKIE_NAME=; Max-Age=0; path=/; domain=' + location.host;
      
    } catch (error) {
      console.log("error:", error)
    }
  }
  useEffect(()=>{
    email===null?navigate('/'):null;
  },[email])
 
  /*const function_name =()=>{
    Name = "Home"
  }*/
  const styling = {
    backgroundColor:theme?'rgba(255, 255, 255, 0.15)':'#CD5D67'
  }
  return (
    
      <div className="navbar" style={styling}>
        <div className="left_icons">
          <img className="logo" src={Blogo}></img>
          
        </div>
        <div className="Middle_icons">
         
          <a
          className="CompletedTasks"
          
          >
            
          </a>
          {email!==null?location.pathname!== "/Important" ? (
             <a
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/Important");
                  }} >Important Tasks
          </a>
          ) : (
            <a
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/");
                  }} >Home
              </a>
          ):null}
          
          {email!==null?location.pathname!== "/Completed" ? (
           <a
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/completed");
                  }} >Completed Tasks
          </a>
          ) : (
            <a
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/");
                  }} >Home
              </a>
          ):null}
        </div>
        <div className="Right_icons">
          {theme?(<button className="sun" onClick={HandleClick}><img src={sun}></img></button>):(<button className="moon"  onClick={HandleClick}><img src={moon}></img></button>)}
          
          
          {email===null?
          <button 
            className="button-55"
            role="button"
            onClick={signIn}
            >
              Sign In
          </button>
            :
          <button 
            className="button-55"
            role="button"
            onClick={signout}
            >
              Sign out
          </button>
            }
        </div>
      </div>
    
  );
};

export default Navbar;
