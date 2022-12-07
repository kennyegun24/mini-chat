import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../../context/chatsContext'
import { AuthContext } from '../../context/context'
import { db } from '../../firebase'

const Users = () => {
    
  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userchat", currentUser.uid), (doc) => {
        setUsers(doc.data())
      });
      return () => {
        unsub()
        };
    };
    currentUser.uid && getChats()
  }, [currentUser.uid]);
  console.log(users)

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }
  return (
    <div className='userMain'>
          {Object.entries(users)?.map((chat) => (
          <div className='userContainer' key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>

        <div className="userWrapper">
        <img src={chat[1].userInfo.photoURL} className="userImg" alt="" />
        <div className='userChat userChatM'>
            <p>{chat[1].userInfo.displayName}</p>
            <span>{chat[1].lastMessage?.text}</span>
        </div>
    </div>
    </div>
      ))}

    </div>

  )
}

export default Users