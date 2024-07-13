import React,{useContext, useEffect, useState} from 'react'
import List from '../List/List';
import "./Data.css"
import { importantContext } from '../../App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,collection,getDocs,onSnapshot
} from 'firebase/firestore'
import {db} from '../Firebase/Firestore';
import { FetchData } from '../FetchData';
import { Email } from '../Contexts/EmailContext';
const Data = (p) => {
      const [todo,setTodo] = useContext(importantContext)
      const [email,setEmail] = useContext(Email)
      //console.log('Data component rendered');
      //const todo=p.todo;
      //const setTodo=p.setTodo;
      /*useEffect(()=>{
        const response = async()=> {
          try {
            const response1 =await FetchData()
            //console.log(response1)
            //const information = response1.docs.map(doc=>doc.data());
            //setTodo(response1)
            console.log(response1)
          } catch (error) {
            //console.log(error)
          }
        }
      response();
    })*/
   const docRef = collection(db,'Database',`${email}`,`${email}`)
   useEffect(()=>{
    onSnapshot(docRef, (snapshot) => {
      const docs = snapshot.docs
      console.log(docs)
      setTodo(docs)
      //console.log(todo)
    })
   },[email])
    //console.log(docs)
    /*useEffect(() => {
      console.log(todo); // Log the updated todo state
    }, [todo]); // This effect runs whenever `todo` changes*/
    //console.log(todo)
      

  
        
      
      
      
      

  return (
    <div className="task">
        {(todo)?(todo.map((value, index) => {
          //console.log(value.data().status)
  return value.data().status === false ? 
    (<List value={value} index={index} setTodo={setTodo} array={todo}/>) : 
    null;
})) : (null)}
        
  </div>
  )
}

export default Data