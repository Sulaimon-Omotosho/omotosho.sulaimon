import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <div className='wrapper'>
      <div className='hero'>
        <div className='text'>
          <h1>
            A Frontend Web <br /> Developer
          </h1>
          <p>
            Frontend Developer with a unique design perspective, <br /> crafting
            exceptional user interfaces that set new standards
          </p>
          <button>View About</button>
        </div>
        <div className='aboutImage'>
          <div className='imageWrapper'>
            <img src='portfolio image.jpg' alt='about image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
