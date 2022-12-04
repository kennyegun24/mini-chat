import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// import {  } from '../firebase';
const Register = () => {

  const [err, setErr] = useState(false)
  const submitInput = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true)
        }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
              await updateProfile(response.user, {
                displayName,
                photoURL: downloadURL,
              });
            await setDoc(doc(db, "users", response.user.uid),{
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            });
          }
        );
    } catch(err) {
      setErr(true)
    }

  }


  return ( 
    <div className='loginContainer'>
    <div className='formWrapper'>
      <h3>Register</h3>
      <form onSubmit={submitInput}>
        <input className='formInput' type="name" placeholder='name'/>
        <input type="email" className='formInput' placeholder='enter your email'/>
        <input type="password" className='formInput' placeholder='enter your password...'/>
        <input type="file" />
        <button type="submit" className='button'>
          SIgn up
        </button>
      </form>
      <p className='login'>Have an account? <Link className='link' to="/login">Login...</Link></p>
      {err && <span>Wrong details</span>}
    </div>
  </div>
  )
}

export default Register