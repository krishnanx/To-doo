import React,{useContext, useEffect, useState} from 'react'
import List from '../List/List';
import "./Data.css"
import { importantContext } from '../../App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,collection,getDocs
} from 'firebase/firestore'

import { FetchData } from '../FetchData';
const Data = (p) => {
      const [todo,setTodo] = useContext(importantContext)
      //console.log('Data component rendered');
      //const todo=p.todo;
      //const setTodo=p.setTodo;
      useEffect(()=>{
        const response = async()=> {
          try {
            const response1=await FetchData()
            //console.log(response1)
            //const information = response1.docs.map(doc=>doc.data());
            setTodo(response1)
            console.log(response1)
          } catch (error) {
            console.log(error)
          }
        }
      response();
    },[])
   
  
        
      
      
      
      
    
  return (
    <div className="task">
        {todo.map((value, index) => {
          return value.status===false?(<List value={value} index={index} setTodo={setTodo} array={todo}/>):null;
        })}
  </div>
  )
}

export default Data