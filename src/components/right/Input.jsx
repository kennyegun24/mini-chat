import { uuidv4 } from '@firebase/util'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { ChatContext } from '../../context/chatsContext'
import { AuthContext } from '../../context/context'
import { db } from '../../firebase'

const Input = () => {

  const [text, setText] = useState('')

  const {data} = useContext(ChatContext)
  const {currentUser} = useContext(AuthContext)

  const handleSend = async (e) => {
    e.preventDefault()

      await updateDoc(doc( db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now()
        })
      })

      await updateDoc(doc(db, "userchat", currentUser.uid), {
        [data.chatId + ".lastMessage"]:{
          text,
        },
        [data.chatId + ".date"]: serverTimestamp()
      })

      await updateDoc(doc(db, "userchat", data.user.uid), {
        [data.chatId + ".lastMessage"]:{
          text,
        },
        [data.chatId + ".date"]: serverTimestamp()
      })

      setText('')
  }
  return (
    <form onSubmit={handleSend} className='inputContainer'>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Type a message...' />
        <button type='submit' onSubmit={handleSend}>Send</button>
    </form>
  )
}

export default Input