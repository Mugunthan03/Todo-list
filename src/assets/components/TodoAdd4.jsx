import React, { useState } from 'react'

const TodoAdd4 = (props) => {

const list = props.list
const setList = props.setList

const [input,setInput] = useState('')

function handleInput(e)
{
    setInput(e.target.value)
}
function handleAdd()
{
  const capitalInput = input.trim().charAt(0).toUpperCase() + input.slice(1);

    setList([...list,{id:list.length+1,act:capitalInput}])
    setInput('')
}



  return (
    <div>
        <h1 className='text-2xl font-medium'>Manage Activities</h1>
        <input type='text' placeholder='Next Activity' className='border border-black border-2 p-1 rounded-md mt-5' value={input} onChange={handleInput}/>
        <button className='bg-black text-white p-1 border border-2 border-black rounded-md w-16' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoAdd4