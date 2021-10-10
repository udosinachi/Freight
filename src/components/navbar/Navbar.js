import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='first-header'>
          <h2>Send FREIGHT</h2>
          <input className='input1' type='search' placeholder='Search' />
        </div>
        <div className='button-header'>
          <button className='button1'>Request Quote</button>
          <button className='button2'>Book Shippment</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
