import React from 'react'
import './banner.css';

const logos = [
  'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png',
  'https://www.monolithai.com/hubfs/Aptar%20Logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png?width=280&height=48&name=JOTA_logo.png',
  'https://www.monolithai.com/hubfs/bae-systems_logo.svg',
  '	https://www.monolithai.com/hubfs/honda_logo.svg',
  'https://www.monolithai.com/hubfs/Siemens_logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png',
  'https://www.monolithai.com/hubfs/Aptar%20Logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png?width=280&height=48&name=JOTA_logo.png',
  'https://www.monolithai.com/hubfs/bae-systems_logo.svg',
  '	https://www.monolithai.com/hubfs/honda_logo.svg',
  'https://www.monolithai.com/hubfs/Siemens_logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png',
  'https://www.monolithai.com/hubfs/Aptar%20Logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png?width=280&height=48&name=JOTA_logo.png',
  'https://www.monolithai.com/hubfs/bae-systems_logo.svg',
  '	https://www.monolithai.com/hubfs/honda_logo.svg',
  'https://www.monolithai.com/hubfs/Siemens_logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png',
  'https://www.monolithai.com/hubfs/Aptar%20Logo.svg',
  'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png?width=280&height=48&name=JOTA_logo.png',
  'https://www.monolithai.com/hubfs/bae-systems_logo.svg',
  '	https://www.monolithai.com/hubfs/honda_logo.svg',
  'https://www.monolithai.com/hubfs/Siemens_logo.svg',
]

export const Banner = () => {
  return (
    <div className='overlay'>
      <div className='background-img' />
      <div className='text text-container'>
          <div className='content'>
            <p className='monolith'>Monolith</p>
            <h1>Use AI software to test less and learn more.</h1>
            <p className='paragraph'>Spend less time running expensive, repetitive tests and more time learning from your engineering data to predict the exact tests to run.</p>
            <div className='banner-btn'>
              <a href='https://www.monolithai.com/hubfs' className="primary-btn btn text">REQUEST DEMO</a>
              <a href='https://www.monolithai.com/hubfs' className="secondary-btn btn text">SPEAK TO OUR TEAM</a>
            </div>
          </div>

          <div className='carousel'>
            <div className='inner-carousel'>
              {logos.map((logo, index) => {
                return(
                  <div className='logo-slider' key={index}>
                    <div className='item'>
                      <img src={logo} alt='company logo' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  )
}
