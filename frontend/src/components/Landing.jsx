import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
<div className="h-screen">
  <div className="h-full bg-cover w-full" style={{backgroundImage: `url('/images/login-background.jpg')`}}>
    <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
      <p className="text-white text-center text-xl md:text-3xl lg:text-4xl ">Movies, Series and More</p>
      <p className='text-white text-center fw-lighter md:text-lg px-5 py-3 md:px-10 max-w-md'>We offer world-class movie reviews for the lowest prices and for the best service.</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <NavLink to="/signup">
          <button type="button" className="btn border-white border-2 hover:bg-yellow-400 text-white bg-amber-500 px-4">Sign Up</button>
        </NavLink>
        <NavLink to="/login">
          <button type="button" className="btn border-white border-2 hover:bg-yellow-400 text-white bg-amber-500 px-4">Log In</button>
        </NavLink>
      </div>
    </div>
  </div>
</div>
  )
}

export default Landing