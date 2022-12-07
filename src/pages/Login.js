import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [err, setErr] = useState(false)
  const navigation = useNavigate()

  const submitInput = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {

      await signInWithEmailAndPassword(auth, email, password)
      navigation("/")
      
    } catch(err) {
      setErr(true)
    }

  }

  return (
    <div className='loginContainer'>
      <div className='formWrapper'>
        <h3>Login</h3>
        <form className='form' onSubmit={submitInput}>
          <input type="email" className='formInput' placeholder='enter your email'/>
          <input type="password" className='formInput' placeholder='enter your password...'/>
          <button className='button'>
            SIgn in
          </button>
        </form>
        <p className='login'>Dont have an account? <Link className='link' to="/register">Sign Up...</Link></p>
        {err ? <span>Account does not exist or wrong username or password</span> : ''}
      </div>
    </div>
  )
}

export default Login