import React, { useState } from 'react'
import './footer.scss'

const Footer = () => {
  const currentYear = useState(new Date().getFullYear())

  return (
    <div className='footer'>
      <div className='main'>
        <div className='logo'>Sulaimon Omotosho</div>
        <div className='menu'>
          <div className='details'>
            <h3>About</h3>
            <a href='/'>About Me</a>
            <a href='/'>Services</a>
            <a href='/'>Careers</a>
          </div>
          <div className='details'>
            <h3>Company</h3>
            <a href='/'>My team</a>
            <a href='/'>Partnership</a>
            <a href='/'>FAQ</a>
            <a href='/'>blog</a>
            <a href='/'>privacy policy</a>
          </div>
          <div className='details'>
            <h3>support</h3>
            <a href='/'>account</a>
            <a href='/'>support center</a>
            <a href='/'>feedback</a>
          </div>
          <div className='details'>
            <h3>contact</h3>
            <a href='/'>+234 903 5198 024</a>
            <a href='/'>sulaimon.omotosho90@gmail.com</a>
            <div className='socials'></div>
          </div>
        </div>
      </div>
      <div className='foot'>
        <p>
          Copyright&copy; {currentYear} Design By <span>UncleSula</span>
          <img src='UncleSula-logo.png' alt='unclesula' />
        </p>
        <a>Terms Of Use | Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer
