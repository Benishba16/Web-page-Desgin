import React from 'react'
import "./About.scss"

function About() {
  return (
    <div className='about'>
        <div className='about__navbar'>
            <nav>
                <ul>
                    <li className='navbar__list'>
                        <div className='navbar__list__image'></div>
                        <div className='navbar__list__text'>Timeline</div>
                    </li>
                    <li className='navbar__about'>
                        <div className='navbar__about__image'></div>
                        <div className='navbar__about__text'>About</div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default About