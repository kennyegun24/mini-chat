import React from 'react'
import Topnav from '../components/right/Topnav'
import Input from '../components/right/Input'
import Body from '../components/right/Body'


const Rightside = () => {
  return (
    <div className='rightside'>
      <Topnav />
      <div className="messages">
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
      </div>
      <Input />
    </div>
  )
}

export default Rightside