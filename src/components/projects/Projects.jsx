import React from 'react'
import './projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='wrapper'>
        <div className='proDesc'>
          <h3>Projects casestudy</h3>
          <p>
            Discover the success story behind my transformative digital project.
            <br />A brief, impactful case study of turning visions into reality.
          </p>
          <button>View Projects</button>
        </div>
        <div className='pro'>
          <div className='imageWrapper'>
            <img src='portfolio 1.jpg' alt='' />
          </div>
          <div className='imageWrapper'>
            <img src='portfolio 1.jpg' alt='' />
          </div>
          <div className='imageWrapper'>
            <img src='portfolio 1.jpg' alt='' />
          </div>
          <div className='imageWrapper'>
            <img src='portfolio 1.jpg' alt='' />
          </div>
          <div className='imageWrapper'>
            <img src='portfolio 1.jpg' alt='' />
          </div>
          <div className='imageWrapper'>
            <img src='portfolio 1.jpg' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
