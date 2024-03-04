import React from 'react'
import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <img className='portfolio2' src='Portfolio 2.png' alt='portfolio 2' />
      <hr className='sLine' />
      <hr className='dLine' />
      <div className='wrapper'>
        <div className='pContents'>
          <div className='dream'>
            <h3>
              turning web imaginations <br /> into realities
            </h3>
            <p>
              Transforming design imaginations into digital realities is a
              mastered art. With a keen eye for detail and expertise in frontend
              technologies, I seamlessly bring website designs to life, ensuring
              a perfect blend of creativity and functionality
            </p>
            <button>View Projects</button>
          </div>
          <div className='portraits'>
            <div className='box1'></div>
            <img className='portfolioImg2' src='Blog Site 2.png' alt='p1' />
            <div className='box2'></div>
            <img className='portfolioImg1' src='portfolio 1.jpg' alt='p1' />
            {/* <img className='portfolioImg3' src='Portfolio 3.png' alt='p1' /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
