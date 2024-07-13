import React, { useContext, useState } from "react";
import "./ToDoForm.css";
import List from "../List/List";
import { addDoc, getDoc, setDoc,collection} from "firebase/firestore";
import {db} from "../Firebase/Firestore";
import { FetchData } from "../FetchData";
import { importantContext } from "../../App";
import { Email } from "../Contexts/EmailContext";
const ToDoForm = (p) => {
  const [value, setValue] = useState("");
  const [todo,setTodo] = useContext(importantContext)
  const [email,setEmail] = useContext(Email)
  const subcollectionRef = collection(db,'Database',`${email}`,`${email}`)
  /*const todo=p.todo;
  const setTodo = p.setTodo;*/
  const handleClick = async()=>{
    try {
      addDoc(subcollectionRef,{
        status:false,
        work:value
      }
      )
    } catch (error) {
      console.log(error)
    }
    /*addDoc(colRef,{
      status:false,
      work:value,
     })*/
    /*const response = await FetchData()
    const information = response.docs.map(doc=>doc.data());
    console.log(information)
    try {
      setTodo(information)
      //console.log(todo)
    } catch (error) {
      console.log(error)
    }*/
  }
 
  return (
    <div className="ToDoForm">
        <div className="Add">
          <form id="Form">
            <div className="Input_div">
              <input
                type="text"
                placeholder="Enter your task"
                className="Input"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                value={value}
              />
            </div>
            <div className="Submit_div">
              <button
                type="Submit"
                className="Submit"
                onClick={(e) => {
                  e.preventDefault();
                  //console.log(value);
                  //setTodo([...todo, value]);
                  handleClick()
                  setValue("");
                }}
              >
                Add task
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default ToDoForm;
