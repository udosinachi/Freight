import React from 'react'
import './Cargo.css'

const Cargo = () => {
  return (
    <div className='cargo'>
      <div className='cargo-bodydiv'>
        <div>
          <h3>Cargo Details</h3>
          <label class='switch'>
            <input type='checkbox' />
            <span class='slider round'></span>
            <p>
              <b>Dangerous Cargo</b> (ex. Chemicals, Battery)
            </p>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Cargo
