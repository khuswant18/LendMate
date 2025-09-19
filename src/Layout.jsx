import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <main>
    <Outlet/> 
    </main>
    <Footer/>
    </>
  )
}

export default Layout 
