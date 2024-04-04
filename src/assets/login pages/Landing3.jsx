import React from 'react'

import Header1 from '../components/Header1'
import Card2 from '../components/Card2'
import TodoContainer3 from '../components/TodoContainer3'
import { useLocation } from 'react-router-dom'

const Landing3 = () => {
    const data = useLocation()
    const username = data.state.user.charAt(0).toUpperCase() + data.state.user.slice(1);
 
   
    return (
        <div>
            <div className=' bg-[#222831] p-7  md:p-10'>
               <div className='bg-white p-6 md:p-16 border rounded-md '>                                        
                    <Header1 name= {username +' !'+ ' 😊 '} />
                <div className='flex justify-between mt-5 gap-7 flex-wrap'>
                    <Card2 bgcolor={'#8272DA'} title={'23°'} desc={'chennai'}/>
                    <Card2 bgcolor={'#FD6663'} isdate ={true} isTime={true}/>
                    <Card2 bgcolor={'#FCA201'} title={'Built using'} desc={'React'}/>
                </div>
                <TodoContainer3 />
    
    
                </div>
            </div>
        </div>
      )
    }
 

export default Landing3