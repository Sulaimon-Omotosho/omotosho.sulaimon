import React, { useState } from 'react'
import './projects.scss'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const images = [
  {
    id: '1',
    img: 'pro 1.jpg',
    title: 'Peppertea',
    desc: "Dive into PepperTea's hair artistry showcased in a sleek portfolio site by me. Experience creativity and precision, reflecting the essence of PepperTea's unique expertise",
    link: 'peppertea-portfolio.vercel.app',
  },
  // { id: '2', img: 'pro 2.jpg' },
  {
    id: '3',
    img: 'pro 3.jpg',
    title: 'Layo Oguntimehin',
    desc: "Explore Layo Oguntimehin's digital marketing prowess in a portfolio site crafted by me. Experience the essence of her dynamic strategies and expertise.",
    link: 'layo.vercel.app',
  },
  {
    id: '4',
    img: 'pro 4.jpg',
    title: 'BuyFood.ng',
    desc: 'Indulge your culinary desires with BuyFood.ng, a web app artfully designed by me. Explore a seamless culinary journey as you navigate through the flavors and choices available at your fingertips.',
    link: 'buy-food-ng.vercel.app',
  },
  {
    id: '5',
    img: 'pro 5.jpg',
    title: 'Brich Africana',
    desc: 'Discover career empowerment with Brich Africana. Navigate through their services on a website crafted by me, designed to elevate your professional journey.',

    link: 'brich-africana.vercel.app',
  },
  {
    id: '6',
    img: 'pro 6.jpg',
    title: 'Realtor.com',
    desc: 'Explore the real estate landscape seamlessly with Realtor.com, a web app designed by me. Discover listings and navigate the property market effortlessly, all at your fingertips.',
    link: 'realtor-site-v2.vercel.app',
  },
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
              <div className='imgDesc'>
                <h3>{image.title}</h3>
                <p>{image.desc}</p>
                <a href={image.link}>
                  <button>Visit Site</button>
                </a>
              </div>
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
