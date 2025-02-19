import React, { useState,useContext } from "react";
import "./List.css";
import clickSound from "../../assets/audio/Clicksound.mp3"
import { updateDoc ,doc,collection} from "firebase/firestore";
import { colRef ,db} from "../Firebase/Firestore";
import { Email } from "../Contexts/EmailContext";
const List = (P) => {
  
  const [check, setIsChecked] = useState(false);
  const [email,setEmail] = useContext(Email)
  
  const task = P.value;
  ////console.log(task.id)
  const id = task.id
  //console.log(id)
  const blog = task.data().work;
  //console.log(blog)
  const docRef = doc(db,'Database',`${email}`,`${email}`,id)
  //const docRef = doc(db,'Database',id);
  ////console.log(task.data())
  const index = P.index;
  const array = P.array;
  const setTodo = P.setTodo;
  ////console.log(blog,index);
  
  const removeItem = (Index) => {
    setTimeout(() => {
      const newItems = array.filter((_, i) => i !== Index);
      setTodo(newItems);
    }, 500);
    // setIsChecked(false);
  };

  //const HandleClick = () => {
  //   //console.log(array);
  //   const Index = array.indexOf(blog);
  //   //console.log(Index);
  //   setComp_value([...comp_value, blog]);
  //   blog = "";
  //   removeItem(Index);
  // };
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };
  const HandleChange = () => {
   
    
    try {
      setIsChecked(true);
      //blog = "";
      setTimeout(()=>setIsChecked(false),500)
      setTimeout(()=>{
        updateDoc(docRef,{
          status:true,
          work:blog
        });
        //console.log('Document successfully updated!');
      },600)
      
    } catch (error) {
      console.error('Error updating document: ', error);
    }

    ////console.log(array);
    //const Index = array.indexOf(blog);
    ////console.log(Index);
    //setComp_value([...comp_value, blog]);
    
    //removeItem(Index);

    ////console.log(comp_value)
  };
  return (
    <div className="List_div">
      <p className="List">{blog}</p>
      <div className="checkbox-wrapper-12">
        <div className="cbx">
          <input
            id="cbx-12"
            type="checkbox"
            onClick={playSound}
            checked={check}
            onChange={HandleChange}
          />
          <label for="cbx-12"></label>
          <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo-12">
              <fegaussianblur
                in="SourceGraphic"
                stddeviation="4"
                result="blur"
              ></fegaussianblur>
              <fecolormatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                result="goo-12"
              ></fecolormatrix>
              <feblend in="SourceGraphic" in2="goo-12"></feblend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default List;
