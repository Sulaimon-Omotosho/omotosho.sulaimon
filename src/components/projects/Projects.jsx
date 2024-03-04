import React, { useState } from 'react'
import './projects.scss'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const images = [
  { id: '1', img: 'pro 1.jpg' },
  // { id: '2', img: 'pro 2.jpg' },
  { id: '3', img: 'pro 3.jpg' },
  { id: '4', img: 'pro 4.jpg' },
  { id: '5', img: 'pro 5.jpg' },
  { id: '6', img: 'pro 6.jpg' },
]

const Projects = () => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1)
  }

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
          <BsArrowLeftCircleFill
            className='arrow arrow-left'
            onClick={prevSlide}
          />
          {images.map((image, idx) => (
            <div
              className={
                slide === idx ? 'imageWrapper' : 'imageWrapper slide-hidden'
              }
              key={image.id}
            >
              <img src={image.img} alt='' />
            </div>
          ))}
          <BsArrowRightCircleFill
            className='arrow arrow-right'
            onClick={nextSlide}
          />
          <span className='indicators'>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx ? 'indicator' : 'indicator indicator-inactive'
                }
              ></button>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projects
