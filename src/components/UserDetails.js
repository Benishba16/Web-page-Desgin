import React from 'react'
import { connect } from "react-redux"
import "./UserDetails.scss"

function UserDetails(props) {

  return (
    <div className='entire'>
      <div className='user__image'></div>
      <div className='user__details'>
        <div className='user__data'>
          <div className='user__data__info'>
            <div className='user__data__name'>{props.name}</div>
            <div className='user__data__city'>
              <div className='user__data__city__location'></div>
              <div className='user__data__city__name'>{props.city}</div>
            </div>
          </div>
          <div className='user__data__bookmark'>
            <div className='user__data__bookmark__image'></div>
            <div className='user__data__bookmark__text'>Bookmark</div>
          </div>
        </div>
        <div className='user__role'>{props.role}</div>
        <div className='user__ranking'>
          <div className='user__ranking_header'>RANKINGS</div>
          <div className='user__ranking__rate'></div>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        city: state.city,
        role: state.role
    }
}

export default connect(mapStateToProps)(UserDetails)