import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
   
    <>
      <div>Services</div>
      <Link to="offline"> go offline</Link>
      <Outlet/>
    </>
   
  )
}

export default Services