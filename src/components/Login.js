import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='formWrapper'>
        <h3>Login</h3>
        <form>
          <input type="email" className='formInput' placeholder='enter your email'/>
          <input type="password" className='formInput' placeholder='enter your password...'/>
          <button type="submit" className='button'>
            SIgn in
          </button>
        </form>
        <p className='login'>Dont have an account? <Link className='link' to="/register">Sign Up...</Link></p>
      </div>
    </div>
  )
}

export default Login