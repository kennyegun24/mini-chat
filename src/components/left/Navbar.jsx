import React, { useContext } from 'react'
import img from '../../assets/screen-0.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../context/context'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className="navContainer">
        <div className="navWrapper">
            <p>Ken Chat</p>
            <div className='navMinWrap'>
                <img src={currentUser.photoURL} alt="" className='imgNav'/>
                <p>{currentUser.displayName}</p>
                <button onClick={() => signOut(auth)}>
                    logout
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar