
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css'
import { useState } from "react";

import Login1 from "./assets/login pages/Login1";
import Signup from "./assets/login pages/Signup2";
import Landing3 from "./assets/login pages/Landing3";



const App = () => {

  const [users,setusers] = useState([
    {
      username : 'mugun',
      password : '123'
    }
  ])
 

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login1  users={users} setusers={setusers} /> }></Route>
      <Route path="/signup" element={<Signup users={users} setusers={setusers} /> }></Route>
      <Route path="/landing" element={<Landing3 /> }></Route>
          
     
    </Routes>
  
  </BrowserRouter> 
 
 
</div>
  )
}

export default App