import React, { useContext, useEffect, useState } from 'react'
import Topnav from '../components/right/Topnav'
import Input from '../components/right/Input'
import Body from '../components/right/Body'
import { ChatContext } from '../context/chatsContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'


const Rightside = () => {
  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub()
    }
  }, [data.chatId])
  return (
    <div className='rightside'>
      <Topnav />
      <div className="messages">
        {messages.map((message) => (
          <Body message={message} />
        ))}
      </div>
      <Input />
    </div>
  )
}

export default Rightside