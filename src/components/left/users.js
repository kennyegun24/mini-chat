import React from 'react'
import img from "../../assets/screen-0.jpg"

const Users = () => {
  return (
    <div className='userContainer'>
        <div className="userWrapper">
            <img src={img} />
            <div className='userChat'>
                <p>Random</p>
                <span>hey there</span>
            </div>
        </div>
    </div>
  )
}

export default Users