import React from 'react'
import { FaHtml5, FaReact, FaSass } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import './service.scss'

const Services = () => {
  return (
    <div className='wrapper'>
      <div className='services'>
        <div className='tools'>
          <div className='tool'>
            <div className='skill'>
              <FaHtml5 size={45} />
            </div>
            <div className='desc'>
              <h3>HTML, CSS, JS</h3>
              <p>
                Using HTML, CSS and JavaScript, I craft captivating and
                functional web interfaces, seamlessly integrating design and
                technology for a superior user experience
              </p>
            </div>
          </div>
          <div className='tool'>
            <div className='skill'>
              <FaReact size={45} />
            </div>
            <div className='desc'>
              <h3>ReactJs</h3>
              <p>
                Harnessing the capabilities of ReactJS, I construct dynamic and
                responsive web applications. My adept use of React transforms
                design concepts into interactive and cutting-edge user
                interfaces.
              </p>
            </div>
          </div>
          <div className='tool'>
            <div className='skill'>
              <SiTailwindcss size={45} />
            </div>
            <div className='desc'>
              <h3>TailwindCSS</h3>
              <p>
                I craft sleek and modern web designs using Tailwind CSS. My
                proficiency in Tailwind ensures efficient and visually appealing
                styles, creating a seamless user experience.
              </p>
            </div>
          </div>
          <div className='tool'>
            <div className='skill'>
              <FaSass size={45} />
            </div>
            <div className='desc'>
              <h3>SASS</h3>
              <p>
                I brings style to the forefront with SASS, creating visually
                striking and maintainable CSS. My expertise in SASS enhances the
                design workflow, resulting in a polished and efficient user
                interface.
              </p>
            </div>
          </div>
          <div className='tool'>
            <div className='skill'>
              <TbBrandNextjs size={45} />
            </div>
            <div className='desc'>
              <h3>NextJS</h3>
              <p>
                I strategically employ Next.js as a roadmap to becoming a
                full-stack developer. This versatile framework integrates
                server-side rendering, paving the way for fast and optimized web
                applications, showcasing my commitment to cutting-edge
                technology and the journey to full-stack proficiency.
              </p>
            </div>
          </div>
        </div>
        <div className='service'>
          <h1>my service</h1>
          <p>
            I excel in translating design concepts into seamless, user-friendly
            interfaces. Proficient in HTML, CSS, JavaScript, TypeScript,
            TailwindCSS, SASS, ReactJS, my work stands as a testament to both
            innovation and a commitment to quality, setting new standards in the
            field
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
