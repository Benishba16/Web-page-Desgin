import React from 'react'
// import About from './About'
import "./Navbar.scss"
import { Route, Routes } from "react-router-dom"
import TimeLine from "./TimeLine"
import Contact from "./Contact"
import NavigationBar from './NavigationBar'

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar__message'>
          <div className='navbar__message__image'></div>
          <div className='navbar__message__text'>Send message</div>
        </div>
        <div className='navbar__contacts'>
          <div className='navbar__contacts__image'></div>
          <div className='navbar__contacts__text'> <span>✓</span> Contacts</div>
        </div>
        <div className='navbar__report'>Report user</div>
      </div>
      <div>
        {/* <About/> */}
        <NavigationBar />
        <Routes>
          <Route path='/' element={<TimeLine />}/>
          <Route path='about' element={<Contact />}/>
        </Routes>
      </div>
    </div>
  )
}

export default Navbar