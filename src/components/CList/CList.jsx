import React,{useState,useContext}from 'react'
import { importantContext } from '../../App';
import { completedContext } from '../../App';
import './CList.css'
const CList = (P) => {
    const task = P.value;
    const blog = task.work
    const comp_value=P.comp_value;
    const setComp_value=P.setComp_value
    const [check, setIsChecked] = useState(true);
    const [todo,setTodo] = useContext(importantContext);
    //const [comp_value,setComp_value] = useContext(completedContext);
    const removeItem = (Index) => {
      setTimeout(() => {
        const newItems = comp_value.filter((_, i) => i !== Index);
        setComp_value(newItems);
      }, 500);
      // setIsChecked(false);
    };
    const HandleChange = () => {
      setIsChecked(false);
      //console.log(array);
      const Index = comp_value.indexOf(blog);
      //console.log(Index);
      setTodo([...todo, blog]);
      blog = "";
      setTimeout(()=>setIsChecked(true),600)
      removeItem(Index);
      //console.log(comp_value)
    };
  return (
    <div className='completed_div'>
        <p className='List'>{blog}</p>
        <div className="checkbox-wrapper-13">
          <div className="cbx">
            <input
              id="cbx-12"
              type="checkbox"
              // onClick={HandleClick}
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
  )
}

export default CList