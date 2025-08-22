import React from 'react'
import Header from './header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ padding: '250px' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout