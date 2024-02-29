import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import './sidebar.scss'
import { useLocation } from 'react-router-dom'

const links = [
  { title: 'Home', link: '/' },
  { title: 'Services', link: '/' },
  { title: 'Blog', link: '/' },
  { title: 'Testimonial', link: '/' },
]

const usePathname = () => {
  const location = useLocation()
  return location.pathname
}

const Sidebar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='sidebar'>
      <div className='toggleButton' onClick={handleNav}>
        {nav ? (
          <AiOutlineMenuFold size={30} />
        ) : (
          <AiOutlineMenuUnfold size={30} />
        )}
      </div>
      <div className={nav ? 'bg' : 'bgn'}>
        <div className='link'>
          {links.map((link) => (
            <a href={`${link.link}`} className={`${usePathname && 'active'}`}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
