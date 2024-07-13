import React, { useContext,useEffect } from 'react'
import { completedContext, importantContext } from '../../App';
import CList from '../CList/CList'
import './CompletedData.css'
import { FetchData } from '../FetchData';
const CompletedData = (P) => {
    const [todo,setTodo] = useContext(importantContext);
    const [comp_value,setComp_value] = useContext(completedContext)
    //console.log('Data component rendered');
    //const todo=p.todo;
    //const setTodo=p.setTodo;
    useEffect(()=>{
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
  },[])
  return (
    <div className='Ctask'>
        {todo.map((value, index) => {
        return value.status===true? <CList value={value} comp_value={comp_value} setComp_value={setComp_value} />:null;
        })}
    </div>
  )
}

export default CompletedData