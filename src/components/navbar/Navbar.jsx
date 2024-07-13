import React, { useState,useContext } from "react";
import moon from '../navbar/icons/moon-solid.svg'
import sun from '../navbar/icons/sun-solid.svg'
import "./navbar.css";
import logo from "./icons/to-do-high-resolution-logo-black-transparent.png";
import { useNavigate,useLocation } from "react-router-dom";
import { themeContext } from '../../App';
const Navbar = (l) => {
  const [theme,setTheme]=useContext(themeContext);
  const [Name, setName] = useState("Important Tasks");
  const navigate = useNavigate();
  const location = useLocation();
  const [Location, setLocation] = useState("");
 

const HandleClick=()=>{
  setTheme(!theme);
}
  /*const function_name =()=>{
    Name = "Home"
  }*/
  return (
    <div className="Main">
      <div className="navbar">
        <div className="left_icons">
          <img className="logo" src={logo}></img>
        </div>
        <div className="Right_icons">
          {theme?(<button className="sun" onClick={HandleClick}><img src={sun}></img></button>):(<button className="moon"  onClick={HandleClick}><img src={moon}></img></button>)}
          
          {location.pathname!== "/Important" ? (
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
          )}
          
          {location.pathname!== "/Completed" ? (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
