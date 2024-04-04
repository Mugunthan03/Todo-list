import TodoItem6 from './TodoItem6'


const TodoList5 = (props) => {

  const list = props.list
  const setList = props.setList

  return (
    <div className='flex-grow'>
      <div className='bg-[#BDB4EA] p-5 border rounded-md '>
      <h1 className='text-2xl font-medium'>Today's Activity</h1>
      {
        list.length === 0 ?  <p>You haven't added anything yet !</p>: ' '
      }
      {
        list.map((item,index)=>{
          return <TodoItem6 id={item.id} index={index}  act={item.act} list={list} setList={setList} key={index}/>
        })
      }
    
      </div>
    </div>
  )
}

export default TodoList5