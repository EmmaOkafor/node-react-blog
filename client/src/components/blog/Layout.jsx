import React from 'react'
import Header from '../temps/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../temps/Footer'
import Heading from '../temps/Heading'

export default function Layout() {
  return (
    <main>
        <Header />
        <Heading />
        <Outlet />
        <Footer/>
    </main>
  )
}
