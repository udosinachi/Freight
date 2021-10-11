import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className='location'>
      <div className='location-bodydiv'>
        <span className='location-subdiv1'>
          <span className='imp-exp'>
            <i className='fas fa-info-circle'></i>

            <button className='p23'>Import</button>
            <button className='p23'>Export</button>
          </span>
          <div className='body-inputs'>
            <span className='pin'>
              <i className='fas fa-map-marker-alt'></i>
              <b> To</b>
            </span>
            <input
              className='input2'
              type='text'
              placeholder='City or Portss'
            />
          </div>
          <div className='body-inputs'>
            <span className='pin'>
              <i className='fas fa-map-marker-alt'></i>
              <b> To</b>
            </span>
            <input className='input2' type='text' placeholder='City or Port' />
          </div>
        </span>

        <span className='location-subdiv2'>
          <div className='second-divs'>
            <span className='pin'>
              <i className='fas fa-calendar'></i>
            </span>
            <input type='text' placeholder='Ready Date' className='input3' />
          </div>
          <div className='second-divs'>
            <select className='select'>
              <option>Incoterms</option>
              <option>Send Freight</option>
            </select>
          </div>
          <div className='second-divs'>
            <input
              type='text'
              placeholder='Total Cargo Value'
              className='input3'
            />
          </div>
        </span>
      </div>
    </div>
  )
}

export default Location
