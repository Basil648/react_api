import React from 'react'
import Header from './header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
       <Header/>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Layout