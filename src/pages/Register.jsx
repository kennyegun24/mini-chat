import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {

  const [err, setErr] = useState(false)
  const navigation = useNavigate()

  const submitInput = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, response.user.uid);
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
            // await setDoc(doc(db, "userchat", response.user.uid, {}))
            navigation('/');
            });
          }
        );
      console.log(uploadTask)
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
        <input type="file" id="file" style={{display:"none"}} />
        <label htmlFor="file">
          <span>
            put an image
          </span>
        </label>
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