import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className='location'>
      <div className='location-bodydiv'>
        <span className='location-subdiv1'>
          <span className='imp-exp'>
            {/* <p>@</p> */}

            <button className='p23'>Import</button>
            <button className='p23'>Export</button>
          </span>
          <div>
            <span className='pin'>
              <i class='fas fa-map-marker-alt'></i>
            </span>
            <input className='input2' type='text' placeholder='City or Port' />
          </div>
          <div>
            <span className='pin'>
              <i class='fas fa-map-marker-alt'></i>
            </span>
            <input className='input2' type='text' placeholder='City or Port' />
          </div>
        </span>

        <span className='location-subdiv2'>
          <div>
            <input type='date' placeholder='Ready Date' className='input3' />
          </div>
          <div>
            <select className='select'>
              <option>Incoterms</option>
              <option>Send Freight</option>
            </select>
          </div>
          <div>
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
