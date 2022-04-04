import React from 'react'
import { NavLink } from "react-router-dom"
import "./NavigationBar.scss"

function NavigationBar() {
    const navLink = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            borderBottom: isActive ? "2px solid #1183d6" : null
        }
    }
     
  return (
    <nav style={{textDecoration: "none"}}>
        <NavLink className="Link1" style={navLink}  to="/">Timeline</NavLink>
        <NavLink className="Link2" style={navLink}  to="about">About</NavLink>
    </nav>
  )
}

export default NavigationBar