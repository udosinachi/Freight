import React from 'react'
import './Cargo.css'

const Cargo = () => {
  return (
    <div className='cargo'>
      <div className='cargo-bodydiv'>
        <div className='cargo-div1'>
          <h3>Cargo Details</h3>
          <div className='switch-div'>
            <label class='switch' id='label'>
              <input type='checkbox' />
              <span class='slider round'></span>
            </label>
            <p>
              <b>Dangerous Cargo</b> (ex. Chemicals, Battery)
            </p>
          </div>
        </div>

        <div className='cargo-button'>
          <button className='butt1'>Total Dimension</button>
          <button className='butt2'>Package Details</button>
        </div>

        <div className='fields'>
          <fieldset>
            <legend>Total Volume</legend>
            <input placeholder='cdm' />
          </fieldset>
          <fieldset>
            <legend>Total Volume</legend>
            <input placeholder='kg' />
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Cargo
