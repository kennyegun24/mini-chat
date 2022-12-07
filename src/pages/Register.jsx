import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {

  // SET ERROR
  const [err, setErr] = useState(false)
  // INITIALIZE USENAVIGATE HOOK
  const navigation = useNavigate()

  // FUNCTION TO SUBMIT BASED ON SUBMIT
  const submitInput = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]

    try {
      // IMPORT AND AWAIT THE FUNCTION TO CREATE AN ACCOUNT BY PASSING THE EMAIL AND PASSWORD AS PARAMETERS
      const response = await createUserWithEmailAndPassword(auth, email, password)
      // THIS IS TO INITIATE FIREBASE STORAGE
      const storageRef = ref(storage, response.user.uid);
      // THIS IS TO STORE FILES IN THE FIREBASE STORAGE

      await uploadBytesResumable(storageRef, file).then(()=> {
        getDownloadURL(storageRef).then(async(downloadURL)=> {
          try {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            // THIS IS TO STORE NEW REGS COLLECTIONS TO DATABASE
            await setDoc(doc(db, "users", response.user.uid),{
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // THIS IS TO STORE AND INITIATE NEW REGS CHATS COLLECTIONS IN DATABASE
            await setDoc(doc(db, "userchat", response.user.uid), {});
            navigation('/');

          }catch(err) {
            setErr(true)
          }
        })
      })
      // const uploadTask = uploadBytesResumable(storageRef, file);

      // uploadTask.on(
      //   (error) => {
      //     setErr(true)
      //   },
      //     () => {
      //       // THIS IS TO STORE NEW REGS TO STORAGE
      //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //         await updateProfile(response.user, {
      //           displayName,
      //           photoURL: downloadURL,
      //         });
      //         // THIS IS TO STORE NEW REGS COLLECTIONS TO DATABASE
      //         await setDoc(doc(db, "users", response.user.uid),{
      //           uid: response.user.uid,
      //           displayName,
      //           email,
      //           photoURL: downloadURL,
      //         });
      //         // THIS IS TO STORE AND INITIATE NEW REGS CHATS COLLECTIONS IN DATABASE
      //         await setDoc(doc(db, "userchat", response.user.uid), {});
      //         navigation('/');
      //       });
      //     }
      //   );
      // console.log(uploadTask)
    } catch(err) {
      setErr(true)
    };

  };

  return ( 
    <div className='loginContainer'>
    <div className='formWrapper'>
      <h3>Register</h3>
      <form className='form' onSubmit={submitInput}>
        <input className='formInput' type="name" placeholder='name' required/>
        <input type="email" className='formInput' placeholder='enter your email' required/>
        <input type="password" className='formInput' placeholder='enter your password...' required/>
        <input type="file" id="file" style={{display:"none"}} required />
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