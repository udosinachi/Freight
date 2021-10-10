import { React, useState } from 'react'
import './Services.css'
import ServicesList from './ServicesList'

const Services = () => {
  const [select, setSelect] = useState('Air Freight')
  return (
    <div className='services-div'>
      <div className='services-bodydiv'>
        <h3>Select a service</h3>
        <div className='four-divs'>
          {ServicesList.map((service) => {
            return (
              <div
                className='mini-div'
                key={service.id}
                style={{
                  background: select === service.name ? '#0747a6' : 'white',
                }}
                onClick={() => {
                  setSelect(service.name)
                }}
              >
                <p
                  style={{ color: select === service.name ? 'white' : 'black' }}
                >
                  {service.name}
                  <br />
                  {service.others}
                </p>
                <i
                  className={service.icon}
                  style={{ color: select === service.name ? 'white' : 'grey' }}
                >
                  {' '}
                </i>
              </div>
            )
          })}
          {/* <div className='mini-div'>
            <p>Sea Freight</p>
            <i class='fas fa-ship'></i>
          </div>
          <div className='mini-div'>
            <p>
              Inland <br />
              (Truck & Barge)
            </p>
            <i class='fas fa-truck'></i>
          </div>
          <div className='mini-div'>
            <p>
              Customs
              <br /> Clearance
            </p>
            <i class='fas fa-user'></i>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Services
