import React from 'react'
import Leftside from './pages/Leftside'
import Rightside from './pages/Rightside'

const Chat = () => {
  return (
    <div className='chatContainer'>
        <div className="chatWrapper">
          <div className="chatss">
          <Leftside />
          </div>
          <div className="chatRight">
          <Rightside />

          </div>
        </div>
    </div>
  )
}

export default Chat