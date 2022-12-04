import React from 'react'
import Navbar from '../components/left/Navbar'
import Search from '../components/left/search'
import Users from '../components/left/users'

const Leftside = () => {
  return (
    <div className='leftside'>
        <Navbar />
        <Search />
        <div className='leftUser'>
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
        </div>
    </div>
  )
}

export default Leftside