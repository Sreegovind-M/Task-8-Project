import React from 'react'
import './Workstats-style.css'

const Workstats = () => {
  return (
    <div>
      <section className='work-stats-section'>
        <div className='counter-section'>
            <div>
                <h1 className='counter-numbers'>30</h1>
                <p>Year experience in this field</p>
            </div>
            
            <div>
                <h1 className='counter-numbers'>676</h1>
                <p>Worldwide good clients</p>
            </div>
            
            <div>
                <h1 className='counter-numbers'>1200</h1>
                <p>Worldwide Captured online base</p>
            </div>
            
            <div>
                <h1 className='counter-numbers'>5</h1>
                <p>Masterclass Team ever made</p>
            </div>
            
        </div>
      </section>
    </div>
  )
}

export default Workstats
