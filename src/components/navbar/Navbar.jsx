import React, { useState,useContext, useEffect } from "react";
import moon from '../navbar/icons/moon-solid.svg'
import sun from '../navbar/icons/sun-solid.svg'
import "./navbar.css";
import Blogo from "./icons/to-do-high-resolution-logo-black-transparent.png";
import Wlogo from "./icons/whiteLogo.png"
import { useNavigate,useLocation } from "react-router-dom";
import { importantContext} from '../../App';
import { getAuth,signInWithPopup,setPersistence ,browserSessionPersistence,signOut} from "firebase/auth";
import { auth,provider } from "../Firebase/Firestore";
import { Email } from "../Contexts/EmailContext";
import Cookies from 'js-cookie';


const Navbar = (l) => {
  //const auth = getAuth();
  const [todo,setTodo,theme,setTheme]=useContext(importantContext);
  //const [pic, setPic] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [Location, setLocation] = useState("");
  const [value,setValue] = useState('')
  const [email,setEmail,currentUser,setCurrentUser,pic,setPic,click,setClick] = useContext(Email)
  useEffect(()=>{
    const allCookies = document.cookie.split('; ').map(cookie => {
      const [name, value] = cookie.split('=');
      return { name, value };
    });
    //console.log(allCookies);
    function getCookie(Name) {
      let value = "; " + document.cookie;
      let parts = value.split("; " + Name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    
    // Example usage: retrieving the value of the cookie named 'myURL'
    let urlFromCookie = getCookie(allCookies[2].name);
    //console.log(urlFromCookie);  // Output the URL stored in the cookie
    try {
      setPic(urlFromCookie);
      ////console.log(pic)
    } catch (error) {
      //console.log("error",error)
    }
    //(allCookies[2].value!==undefined)?(setEmail(allCookies[1].value)):(setEmail(null))

  },[])
  const HandleClick=()=>{
    setTheme(!theme);
  }
  const handleInfo = () => {
    try {
      setClick(true)
      //console.log(click)
    } catch (error) {
      //console.log(error)
    }
  }
  const signIn = async() =>{
    try {
      
        const userCredentials = await signInWithPopup(auth, provider);
        const user = userCredentials.user;
        ////console.log(user)
        try {
          setPic(user.photoURL);
          ////console.log(pic)
        } catch (error) {
          //console.log("error",error)
        }
        
        setEmail(user.email);
        setCurrentUser(user.displayName)
        document.cookie = `userEmail=${user.email}; path=/; expires=31 Dec 2024 `;
        document.cookie = `userPhotoURL=${user.photoURL}; path=/; expires=31 Dec 2024`;
        /*setTimeout(() => {
          setPic(user.photoURL)
        },1000);*/
        
        ////console.log(user.photoURL)
        ////console.log(pic)
        /*const idTokenResult = await user.getIdTokenResult();
        const expirationTime = idTokenResult.expirationTime; // Timestamp of token expiration
        //console.log('Token expiration time:', new Date(expirationTime));

        const token = await user.getIdToken();
        //console.log('Token retrieved:', token); // Debugging log

        // Set the token in a secure cookie
        Cookies.set('authToken', token, { secure: true, sameSite: 'Strict' });
        //console.log('Cookie set:', Cookies.get('authToken')); // Debugging log*/

        //console.log('User signed in and cookie set.');
     
      
    } catch (error) {
      //console.log("error:", error)
    }
   
  }
  
  const signout = async() => {
    try {
      await signOut(auth).then(()=>{
        setEmail(null)
        setCurrentUser(null)
        //console.log("sign out...")
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        //console.log('User signed out and cookie removed.');
        navigate('/')
      })
      //const user = userCredentials.user;
      
        
      
      /*function onRemoved(cookie) {
        //console.log(`Removed: ${cookie}`);
      }
      
      function onError(error) {
        //console.log(`Error removing cookie: ${error}`);
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
      //console.log("error:", error)
    }
  }
  useEffect(()=>{
    email===null?navigate('/'):null;
  },[email])
 
  /*const function_name =()=>{
    Name = "Home"
  }*/
  const styling = {
    backgroundColor:theme?'rgba(255, 255, 255, 0.15)':'rgba(0, 0, 0, 0.3)'
  }
  const themeStyle = {
    color:theme?'white':'black'
  }
  const ThemeColor = {
    border:theme?'solid':'solid',
    borderColor:theme?"#FCFBFA":'#222',
    backgroundColor:theme?" #333":"white",
    color:theme?'white':'black',
    boxShadow:theme?`-5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444,
    inset -5px -5px 10px #222`:`-5px -5px 15px transparent, 5px 5px 15px white, inset 5px 5px 10px transparent,
    inset -5px -5px 10px wheat`
  }
  return (
    
      <div className="navbar" style={styling}>
        <div className="left_icons">
          <img className="logo" src={theme?Wlogo:Blogo}></img>
          
        </div>
        <div className="Middle_icons">
          {email!==null?location.pathname!== "/Important" ? (
             <a
              style={themeStyle}
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/Important");
                  }} >Important Tasks
          </a>
          ) : (
            <a
              style={themeStyle}
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/");
                  }} >Home
              </a>
          ):null}
          
          {email!==null?location.pathname!== "/completed" ? (
             <a
             style={themeStyle}
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/completed");
                  }} >Completed Tasks
          </a>
          ) : (
            <a
              style={themeStyle}
              className="ImportantTasks"   
              onClick={() => {
                    navigate("/");
                  }} >Home
              </a>
          ):null}
        </div>
        <div className="Right_icons">
          {/*theme?(<button className="sun" onClick={HandleClick}><img src={sun}></img></button>):(<button className="moon"  onClick={HandleClick}><img src={moon}></img></button>)*/}
          
          <label className="switch">
            <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
            <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
            <input type="checkbox" className="input" onClick={HandleClick}/>
            <span className="slider"></span>
          </label>
          
          
          {email===null?
          <button 
            style={ThemeColor}
            className="button-1"
            //role="button"
            onClick={signIn}
            >
              Sign In
          </button>
            :
          <button 
            style={ThemeColor}
            className="button-1"
            //role="button"
            onClick={signout}
            >
              Sign out
          </button>
            }
            {email!==null?
            <button 
              className="EpicButton"
              onClick={handleInfo}
              >
              <img className="Epic" src={pic}></img>
            </button>:null}
        </div>
      </div>
    
  );
};

export default Navbar;
