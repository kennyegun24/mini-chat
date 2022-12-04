import React from 'react'
import img from '../../assets/screen-0.jpg'

const Body = () => {
  return (
    <div className="message">
        <div className='messagePhotoTime'>
            <img className="userPhoto" src={img} alt="" />
            <span>
                just now
            </span>
        </div>
        <div className="messageContent">
            <p>Hey there i am kenny</p>
        </div>
    </div>
  )
}

export default Body