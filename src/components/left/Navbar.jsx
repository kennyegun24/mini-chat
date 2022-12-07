import React, { useContext } from 'react'
// THIS IS USED TO SIGN OUT
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../context/context'
const Navbar = () => {

  // THIS CURRENTUSER WAS CREATED IN CONTEXT.JS TO CHECK FIR A SUCCESSFUL SIGN IN
  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className="navContainer">
        <div className="navWrapper">
            <p>Chat</p>
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