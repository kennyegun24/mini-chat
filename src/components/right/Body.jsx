import React, { useContext } from 'react'
import { ChatContext } from '../../context/chatsContext'
import { AuthContext } from '../../context/context'

const Body = ({message}) => {

  const {data} = useContext(ChatContext)
  const {currentUser} = useContext(AuthContext)
  return (
    <div className={`message ${message.senderId === currentUser.uid && "row"}`}>
        <div className='messagePhotoTime'>
            <img className="userPhoto" src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
        </div>
        <div className="messageContent">
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Body