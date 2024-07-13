import React, { useContext,useEffect } from 'react'
import { completedContext, importantContext } from '../../App';
import CList from '../CList/CList'
import './CompletedData.css'
import { FetchData } from '../FetchData';
import { onSnapshot ,collection} from 'firebase/firestore';
import { colRef,db } from '../Firebase/Firestore';
import { Email } from '../Contexts/EmailContext';
const CompletedData = (P) => {
    const [todo,setTodo] = useContext(importantContext);
    const [comp_value,setComp_value] = useContext(completedContext)
    const [email,setEmail] = useContext(Email)
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
  const docRef = collection(db,'Database',`${email}`,`${email}`)
   useEffect(()=>{
    onSnapshot(docRef, (snapshot) => {
      const docs = snapshot.docs
      console.log(docs)
      setTodo(docs)
      //console.log(todo)
    })
   },[email])
  return (
    <div className='Ctask'>
        {(todo)?(todo.map((value, index) => {
          //console.log(value.data().status)
        return value.data().status === true ? (<CList value={value} index={index} setTodo={setTodo} array={todo}/>) : null})) : (null)}
    </div>
  )
}

export default CompletedData