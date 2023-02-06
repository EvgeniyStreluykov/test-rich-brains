import React from 'react'
import '../styles/header.scss'

const Header = () => {

  return (
    <div className='header'>
      <div>Find Your Course</div>
      <div>
        <input className='search' type="text" />
      </div>
    </div>
    
  )
}

export default Header;