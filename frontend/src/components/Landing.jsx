import React from 'react'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
    <div className='landing'>
        <img src="/images/login-background.jpg" className='landing-img'/>
       <NavLink to="home"><button className='centered'>GET MORE HERE</button></NavLink> 
        <p className='centered2'>Get the Best watching experience there is</p>
    </div>
  )
}

export default Landing