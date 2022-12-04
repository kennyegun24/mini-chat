import React from 'react'
import { FaEllipsisH } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";


const Topnav = () => {
  return (
    <div className='topnavContainer'>
        <div className='topnavWrapper'>
            <p>
                Julius
            </p>
            <div className="topnavWrapSm">
                <FaVideo />
                <FaUserPlus />
                <FaEllipsisH />
            </div>
        </div>
    </div>
  )
}

export default Topnav