import React from 'react'
import { connect } from "react-redux"
import "./Work.scss"

function Work(props) {
  return (
    <div>
      <div className="workdata">
        <div>
          <div className='work1'>
            <div className='work1__header'><span>{props.work1}</span></div>
            <div className='work1__primary'>Primary</div>
          </div>
          <div className='work1__address'>
            <div>170 William Street</div>
            <div>New York, NY 10038-78 212-312-51</div>
          </div>
        </div>
        <div>
          <div className='work2'>
            <div className='work2__header'><span>{props.work2}</span></div>
            <div className='work2__secondary'>Secondary</div>
          </div>
          <div className='work2__address'>
            <div>525 E 68th Street</div>
            <div>New York, NY 10651-78 156-187-60</div>
          </div>
        </div>
      </div>
      <div className='skilldata'>
        <div className='skilldata__header'>SKILLS </div>
        <div className='skilldata__list'>
          <div>Branding</div>
          <div>UI/UX</div>
          <div>Web - Design</div>
          <div>Packaging</div>
          <div>Print & Editorial</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    work1: state.work1,
    work2: state.work2
  }
}

export default connect(mapStateToProps)(Work)