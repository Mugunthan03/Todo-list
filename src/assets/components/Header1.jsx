import React from 'react'

const Header1 = (props) => {
  return (
    <div>
      <h1 className='text-3xl font-medium '>Hello {props.name}  </h1>
      <p className='mt-2 '>I help you to manage your daily Activities 📝</p>
    </div>
  )
}

export default Header1