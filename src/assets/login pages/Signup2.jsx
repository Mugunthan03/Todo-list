import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Signup2 = (props) => {

 const navigate = useNavigate() 
const users = props.users
const setusers = props.setusers

const [eUsername,setEusername] = useState('')
const [ePassword,setEPassword] = useState('')
const [cPassword,setCpassword] = useState('')
const [passerror,setpasserror] = useState(false)

function handleUsername(e)
{
setEusername(e.target.value)

}
function handlePassword(e)
{
  setEPassword(e.target.value)
}
function handlecPassword(e)
{
  setCpassword(e.target.value)
}

function handleAdduser()
{

if(ePassword !== cPassword )
{
  setpasserror(true)
}
else
{
  setusers([...users,{username:eUsername,password:ePassword}])
  navigate('/')

}

  

}

  return (
    <div className="bg-[#222831] p-10">
      <div className="bg-white p-16 rounded-md">
       
        <h1 className="text-3xl font-medium">Hey Hi! 🎉😊</h1>
        <p>sign up here :)</p>

        <div className="flex flex-col gap-2 my-2 w-fit">
        <input type="text" placeholder="Username" className="border border-black border-2 mt-2 p-1 rounded-md bg-transparent hover:border-purple-500" value={eUsername} onChange={handleUsername} />
        <input type="text" placeholder="Password" className="border border-black border-2 mt-2 p-1 rounded-md hover:border-purple-500"  style={passerror? {borderColor:'red'}:{}} value={ePassword} onChange={handlePassword}/>
        <input type="text" placeholder="Confirm Password" className="border border-black border-2 mt-2 p-1 rounded-md hover:border-purple-500" style={passerror? {borderColor:'red'}:{}} value={cPassword} onChange={handlecPassword} />
        </div>
        {
         passerror ? <p className="text-red-500">Enter password correctly </p> : null
        }
        <button className="bg-[#FCA201] w-24 p-1 rounded-md text-xl mt-2" onClick={handleAdduser}>signup</button>
        <p className="mt-2">Already have an account ? <Link to={'/'} className='underline'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup2;
