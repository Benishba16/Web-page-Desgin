import React from 'react'
import "./Header.scss"

function Header() {
  return (
      <div>
    <div className='container'>

      <div className='header__1'>
        <div className='header__1__logoName'>
            <div className='header__1__logo'></div>
            <div className='header__1__title'><span>Kodecolor</span></div>
        </div>
            <div className='header__1__search'>
                <input id='icon' type="text" placeholder='Search' />
            </div>
      </div>

      <div className='header__2'>
        <div className='header__2__para__1'>Find people</div>
        <div className='header__2__para__2'>
            <div className='header__2__para__text'>Messages</div>
            <div className='header__2__para__box'>4</div>
        </div>
        <div className='header__2__para__3'>My Contacts</div>
        <div className='header__2__para__image'><span>.</span></div>
      </div>
    </div>
    <hr className='horizontal__line'/>
    </div>
  )
}

export default Header