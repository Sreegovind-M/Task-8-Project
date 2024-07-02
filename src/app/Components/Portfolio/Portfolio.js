import React from 'react'
import './Portfolio-style.css';

const Portfolio = () => {
  return (
    <div>
      <section className='portfolio-section'>
        <div className='port-header'>
            <div className='port-title'>
                <span>// Portfolio</span>
                <h1>Case Studies</h1>
            </div>
            <div className='arrow-toggle'>
                <button className='left-arrow'>&lt;</button>
                <button className='right-arrow'>&gt;</button>
            </div>
        </div>
        <div className='port-body'>
            <div className='cyber'>
                <div className='cyber-img'></div>
                <h3>Cybersecurity</h3>
            </div>
            <div className='prob-sol'>
                <div className='ps-img'></div>
                <h3>Problem Solutions</h3>
            </div>
            <div className='web'>
                <div className='web-img'></div>
                <h3>Web Analysis</h3>
            </div>
            <div className='prod-ana'>
                <div className='pa-img'></div>
                <h3>Product Analysis</h3>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
