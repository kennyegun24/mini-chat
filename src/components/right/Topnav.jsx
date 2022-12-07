import React, { useContext } from 'react'
import { FaEllipsisH } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { ChatContext } from '../../context/chatsContext';

const Topnav = () => {
  const {data} = useContext(ChatContext)
  console.log(data)
  return (
    <div className='topnavContainer'>
        <div className='topnavWrapper'>
            <p>
                {data.user?.displayName}
            </p>
            <div className="topnavWrapSm">
                <FaPhone />
                <FaVideo />
                <FaEllipsisH />
            </div>
        </div>
    </div>
  )
}

export default Topnav