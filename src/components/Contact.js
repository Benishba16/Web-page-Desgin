import React from 'react'
import "./Contact.scss"
import { connect } from "react-redux"

function Contact(props) {
  return (
    <div>
      <div className='contact'>
        <div className='contact__header'>CONTACT INFORMATION</div>
        <div className='contact__details'>
          <div className='contact__data'>
            <div>Phone:</div>
            <div className='contact__value'>
              <span>{props.phone}</span>
            </div>
          </div>
          <div className='contact__data'>
            <div>Address:</div>
            <div className='contact__value'>{props.address}</div>
          </div>
          <div className='contact__data'>
            <div>E-mail:</div>
            <div className='contact__value'>
              <span>{props.email}</span>
            </div>
          </div>
          <div className='contact__data'>
            <div>Site:</div>
            <div className='contact__value'>
              <span>{props.site}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='basic'>
        <div className='basic__header'>BASIC INFORMATION</div>
        <div className='basic__data'>
          <div className='basic__text'>
            <div>Birthday:</div>
            <div className='basic__value'>{props.birthday}</div>
          </div>
          <div className='basic__text'>
            <div>Gender:</div>
            <div className='basic__value'>{props.gender}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    phone: state.phone,
    address: state.address,
    email: state.email,
    site: state.site,
    birthday: state.birthday,
    gender: state.gender
  }
}

export default connect(mapStateToProps)(Contact)