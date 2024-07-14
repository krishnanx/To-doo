import React, { useState,useContext, useEffect } from "react";
import moon from '../navbar/icons/moon-solid.svg'
import sun from '../navbar/icons/sun-solid.svg'
import "./navbar.css";
import logo from "./icons/to-do-high-resolution-logo-black-transparent.png";
import { useNavigate,useLocation } from "react-router-dom";
import { themeContext } from '../../App';
import { getAuth,signInWithPopup,setPersistence ,browserSessionPersistence ,} from "firebase/auth";
import { auth,provider } from "../Firebase/Firestore";
import { Email } from "../Contexts/EmailContext";
import Cookies from 'js-cookie';


const Navbar = (l) => {
  //const auth = getAuth();
  const [theme,setTheme]=useContext(themeContext);
  const [Name, setName] = useState("Important Tasks");
  const navigate = useNavigate();
  const location = useLocation();
  const [Location, setLocation] = useState("");
  const [value,setValue] = useState('')
  const [email,setEmail] = useContext(Email)
  const HandleClick=()=>{
    setTheme(!theme);
  }
  const signIn = async() =>{
    try {
      
        const userCredentials = await signInWithPopup(auth, provider);
        const user = userCredentials.user;
        setEmail(user.email);
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
      const userCredentials=signout(auth).then(()=>{
        setEmail(null)
      })
      const user = userCredentials.user;
      document.cookie = `username=${user.email}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    email===null?navigate('/'):null;
  },[email])
 
  /*const function_name =()=>{
    Name = "Home"
  }*/
  return (
    <div className="Main">
      <div className="navbar">
        <div className="left_icons">
          <img className="logo" src={logo}></img>
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
        <div className="Right_icons">
          {theme?(<button className="sun" onClick={HandleClick}><img src={sun}></img></button>):(<button className="moon"  onClick={HandleClick}><img src={moon}></img></button>)}
          
          {email!==null?location.pathname!== "/Important" ? (
            <button
              className="button-55"
              role="button"
              onClick={() => {
                navigate("/Important");
              }}
            >
              Important Task
            </button>
          ) : (
            <button
              className="button-55"
              role="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          ):null}
          
          {email!==null?location.pathname!== "/Completed" ? (
            <button
              className="button-55"
              role="button"
              onClick={() => {
                navigate("/Completed");
              }}
            >
              Completed Task
            </button>
          ) : (
            <button
              className="button-55"
              role="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
          ):null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
