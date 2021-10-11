import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='maind'>
      <header>
        <div className='nav-body'>
          <div className='nav-text'>
            <h2>
              Send <span> FREIGHT</span>
            </h2>
          </div>

          <div className='nav-input'>
            <input type='search' placeholder='Search' />
          </div>

          <div className='nav-buttons'>
            <button className='button1'>Request Quote</button>
            <button className='button2'>Book Shipment</button>
          </div>
        </div>
      </header>
      <div className='down-input'>
        <input type='search' placeholder='Search' />
      </div>
    </div>
  )
}

export default Navbar
