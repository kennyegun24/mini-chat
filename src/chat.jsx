import React from 'react'
import Leftside from './pages/Leftside'
import Rightside from './pages/Rightside'

const Chat = () => {
  return (
    <div className='chatContainer'>
        <div className="chatWrapper">
            <Leftside />
            <Rightside />
        </div>
    </div>
  )
}

export default Chat