import React from 'react'
import './navbar.scss'
import { useLocation } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

const items = [
  { title: 'Home', link: '/' },
  { title: 'Services', link: '/' },
  { title: 'Blog', link: '/' },
  { title: 'Testimonial', link: '/' },
]

const usePathname = () => {
  const location = useLocation()
  return location.pathname
}

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <Sidebar /> */}
      <div className='nav'>
        <div className='logo'>
          <h1>
            <a href='/'>Sulaimon Omotosho</a>
          </h1>
        </div>
        <div className='links'>
          {items.map((item) => (
            <a
              href={`${item.link}`}
              className={`${usePathname && 'active'}`}
              key={item.title}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className='contact'>
          <button>Say Hi!</button>
        </div>
      </div>
      <hr className='line' />
    </div>
  )
}

export default Navbar
