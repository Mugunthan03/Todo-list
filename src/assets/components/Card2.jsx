import React from 'react'

const Card2 = (props) => {

  const currentDate = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (

    <>
        <div style={{backgroundColor:props.bgcolor}} className=' p-8 text-center flex-grow border rounded-md'>
            <div>

              { props.isdate ? (<h1 className='text-2xl font-medium'>{currentDate}</h1>):
                (<h1 className='text-2xl font-medium'>{props.title}</h1>)           
              }
           
             { props.isTime ? <p>{currentTime}</p> :<p> {props.desc}</p> }

            </div>
        </div>
    </>
  )
}

export default Card2