import React from 'react'
import { NavLink } from "react-router-dom"
import "./NavigationBar.scss"

function NavigationBar() {
    const navLink = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid #1183d6" : null,
            color: isActive ? "black" : "#ccc"
        }
    }
     
  return (
    <nav style={{textDecoration: "none"}}>
        <NavLink className="Link1" style={navLink}  to="/">
          <div className='Link1__image'></div>
          <div className='Link2__text'>Timeline</div>
        </NavLink>
        <NavLink className="Link2" style={navLink}  to="about">
          <div className='Link2__image'></div>
          <div className='Link2__text'>About</div>
        </NavLink>
    </nav>
  )
}

export default NavigationBar