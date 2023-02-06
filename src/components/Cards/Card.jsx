import React, { useState } from 'react';
import MoreInfoBtn from '../buttons/MoreInfoBtn'

import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon_plus from '../../images/icon_plus.png'

import '../../styles/card.scss'

const Card = (props) => {

  const [isHover, setIsHover] = useState(true)

  const handleMouseEnter = (e) => {
    setIsHover(false)
  }
  const handleMouseLeave = (e) => {
    setIsHover(true)
  }

  return (
    <div className='card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='rectange'></div>
      <div className="content">
        {isHover ? (
          <>
            <div className='emblem'>
              <img src={props.emblem} alt='emblem' />
            </div>
            <div className='title'>
              <span className='business'>{props.t1}</span>
              <br />
              <span className='cmi'><b>{props.t2}</b></span>
            </div>
            <div className='discription'>
              <img src={icon1} alt="icon1" />
              <span>{props.d1}</span>
              <br />
              <img src={icon2} alt="icon2" />
              <span>{props.d2}</span>
            </div>
            <MoreInfoBtn />
          </>
        ) : (
          <>
            <div className="cardHover">
              <div className="titleh">
                <span>MSc Data Analytics and Information Systems Management</span>
                <img className='icon' src={icon_plus} alt="plus" />
              </div>
              <div className="duration">
                <span>Duration:</span>
                <br />
                  Minimum: 18 months
                  <br />
                  Maximum: 36 months
              </div>
              <div className="date">
                <span>Start Dates:</span>
                <br />
                January, April, July, October
              </div>

              <div className="price">£8,500</div>
              <MoreInfoBtn />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Card