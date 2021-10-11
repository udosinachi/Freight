import React from 'react'
import './Additional.css'

const Additional = () => {
  return (
    <div className='additional'>
      <div className='additional-bodydiv'>
        <h3>Additional Series</h3>
        <div className='four'>
          <div className='first-divs'>
            <div className='add-switch-div'>
              <label className='switch' id='label2'>
                <input type='checkbox' />
                <span className='slider round'></span>
              </label>
              <div className='writing'>
                <h3>
                  <b>Export Fowarding</b>
                </h3>
                <p>We handle customs clearance and documentation.</p>
              </div>
            </div>

            <div className='add-switch-div'>
              <label className='switch' id='label2'>
                <input type='checkbox' />
                <span className='slider round'></span>
              </label>
              <div className='writing'>
                <h3>
                  <b>Import Customs Clearance</b>
                </h3>
                <p>We handle import customs and regulatory requirements.</p>
              </div>
            </div>
          </div>

          <div className='first-divs'>
            <div className='add-switch-div'>
              <label className='switch' id='label2'>
                <input type='checkbox' />
                <span className='slider round'></span>
              </label>
              <div className='writing'>
                <h3>
                  <b>Cargo Insurance</b>
                </h3>
                <p>
                  Protect your cargo from logistics risks up to its full value
                </p>
              </div>
            </div>

            <div className='add-switch-div'>
              <label className='switch' id='label2'>
                <input type='checkbox' />
                <span className='slider round'></span>
              </label>
              <div className='writing'>
                <h3>
                  <b>Transport / Delivery</b>
                </h3>
                <p>We deliver the cargo to your door step from the ports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Additional
