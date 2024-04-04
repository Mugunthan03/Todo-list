import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login1 = (props) => {

  const navigate = useNavigate()
  const [eUsername,setEusername] = useState('')
  const [ePassword,setEPassword] = useState('')
  const [ruser,setRuser] = useState(true)

  const users = props.users

  function handleUsername(e)
  {
    setEusername(e.target.value)

  }

  function handlePassword(e)
  {
    setEPassword(e.target.value)
  }

  function handleLogin()
  {
    console.log(users)
    let userfound = false

    users.forEach((item)=>{

      if(item.username === eUsername && item.password === ePassword)
      {
        console.log('login sucess')
        userfound = true  
        navigate('/landing',{state:{user:eUsername}})          
      }

      if(userfound === false)
      {
        console.log('login failed')
        setRuser(false)
      }
     
    })
    setEusername('')
    setEPassword('')

  }


  return (
    <div className="bg-[#222831] p-10">
    <div className="bg-white p-16 rounded-md">
     
      <h1 className="text-3xl font-medium">Hey Hi! 👋</h1>
      {
        ruser ? <p>I help you to manage your activities after login 🚀</p> : <p className='text-red-500'>Please sign up before login 🔒</p>
      }
     

      <div className="flex flex-col gap-2 my-2 w-fit">
      <input type="text" placeholder="Username" className="border border-black border-2 mt-2 p-1 rounded-md bg-transparent hover:border-orange-500 " value={eUsername} onChange={handleUsername} />
      <input type="text" placeholder="Password" className="border border-black border-2 mt-2 p-1 rounded-md hover:border-orange-500" value={ePassword} onChange={handlePassword} />
      </div>
      <button className="bg-[#8272DA] w-24 p-1 rounded-md text-xl mt-2" onClick={handleLogin}>Login</button>
      <p className="mt-2">Don't have an account ? <Link to={'/signup'} className='underline'>SignUp</Link></p>
    </div>
  </div>
  )
}

export default Login1