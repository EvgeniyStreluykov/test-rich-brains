import React from 'react'
import Card from './Card'


import '../../styles/cards.scss'

const Cards = (props) => {

  return (
    <div className='cardsContainer'>
      <Card
        emblem={require("../../images/emblem1.png")}
        t1='Business & Management'
        t2='Master of Business Administration (CMI)'
        d1='Postgraduate'
        d2='Every 12 weeks'
      />
      <Card
        emblem={require("../../images/emblem2.png")}
        t1='Business & Management'
        t2='Master of Business Administration (CMI)'
        d1='Postgraduate'
        d2='Every 12 weeks'
      />
      <Card
        emblem={require("../../images/emblem3.png")}
        t1='Business & Management'
        t2='Master of Business Administration (CMI)'
        d1='Postgraduate'
        d2='Every 12 weeks'
      />
      <Card
        emblem={require("../../images/emblem4.png")}
        t1='Business & Management'
        t2='Master of Business Administration (CMI)'
        d1='Postgraduate'
        d2='Every 12 weeks'
      />
      <Card
        emblem={require("../../images/emblem5.png")}
        t1='Business & Management'
        t2='Master of Business Administration (CMI)'
        d1='Postgraduate'
        d2='Every 12 weeks'
      />
      <Card
        emblem={require("../../images/emblem6.png")}
        t1='Business & Management'
        t2='Master of Business Administration (CMI)'
        d1='Postgraduate'
        d2='January, April, July, October, November'
      />
    </div>
  )
}

export default Cards