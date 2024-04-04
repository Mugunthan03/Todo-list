import React from 'react'

const TodoItem6 = (props) => {

const list = props.list
const setList = props.setList


function handleDelete(deleteid)
{
     var temparr = list.filter((item)=>{

        if(item.id === deleteid )
        {
            return false
        }
        else
        {
            return true
        }
    })
    setList(temparr)
    
}


  return (
    <div>
        <div className='flex justify-between'>
        <p key={props.index}>{props.index+1} {props.act} </p>
        <i className="fas fa-trash-alt text-red-500 cursor-pointer text-xl" onClick={() => handleDelete(props.id)}></i>
       

        
        </div>
    </div>
  )
}

export default TodoItem6