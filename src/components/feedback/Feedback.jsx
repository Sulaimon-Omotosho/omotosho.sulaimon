import React from 'react'
import './feedback.scss'
import {
  FaRegCommentAlt,
  FaRegStar,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa'
// // import { CiStar } from 'React-icons/ci'
// import { MdNavigateNext } from 'React-icons/md'

const Feedback = () => {
  return (
    <div className='feedbacks'>
      <hr className='sLine' />
      <hr className='dLine' />
      <div className='wrapper'>
        <div className='feedback'>
          <div className='profileImg'>
            <div className='profileImgWrapper'>
              <img src='obawolu.jpg' alt='idowu obawolu' />
            </div>
          </div>
          <div className='comments'>
            <h3>What lovely people say</h3>
            <FaRegCommentAlt size={30} />
            <div className='comment'>
              <p>
                "Creating this site was an absolute pleasure, and the credit
                goes to Omotosho Sulaimon for his exceptional skills and
                creativity. Working together was smooth, and the end result
                truly speaks to his talent as a web designer. Kudos, Omotosho!"
              </p>
            </div>
            <div className='commenter'>
              <div className='rating'>
                <FaRegStar className='star' />
                <FaRegStar className='star' />
                <FaRegStar className='star' />
                <FaRegStar className='star' />
                <FaRegStar className='star' />
              </div>
              <p className='name'>Idowu Obawolu</p>
              <p>C.E.O, Obawolu Careers Hub</p>
            </div>
            <div className='buttons'>
              <FaArrowLeft size={30} className='button' />
              <FaArrowRight size={30} className='button' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
