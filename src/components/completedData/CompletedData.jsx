import React, { useContext,useEffect } from 'react'
import { completedContext, importantContext } from '../../App';
import CList from '../CList/CList'
import './CompletedData.css'
import { FetchData } from '../FetchData';
import { onSnapshot } from 'firebase/firestore';
import { colRef } from '../Firebase/Firestore';
const CompletedData = (P) => {
    const [todo,setTodo] = useContext(importantContext);
    const [comp_value,setComp_value] = useContext(completedContext)
    //console.log('Data component rendered');
    //const todo=p.todo;
    //const setTodo=p.setTodo;
    /*useEffect(()=>{
      const response = async()=> {
        try {
          const response1=await FetchData()
          const information = response1.docs.map(doc=>doc.data());
          setTodo(information)
        } catch (error) {
          console.log(error)
        }
      }
    response();
  },[])*/
  useEffect(()=>{
    onSnapshot(colRef, (snapshot) => {
      const docs = snapshot.docs
      //console.log(docs)
      setTodo(docs)
      //console.log(todo)
    })
   },[])
  return (
    <div className='Ctask'>
        {(todo)?(todo.map((value, index) => {
          //console.log(value.data().status)
        return value.data().status === true ? (<CList value={value} index={index} setTodo={setTodo} array={todo}/>) : null})) : (null)}
    </div>
  )
}

export default CompletedData