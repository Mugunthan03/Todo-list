import React, { useState } from 'react'
import TodoAdd4 from './TodoAdd4'
import TodoList5 from './TodoList5'



const TodoContainer3 = () => {

    const [list,setList] = useState([
        {id:1,act:'Wake up at 6'},
        {id:2,act:'Go for walking'},
        {id:3,act:'Have a breakfast'}
      ])


  return (
    <div className='mt-5 flex gap-5  flex-wrap'>
        <TodoAdd4 list={list} setList={setList}/>
        <TodoList5 list={list} setList={setList}/>
    </div>
  )
}

export default TodoContainer3