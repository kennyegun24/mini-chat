import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../../firebase';
import {AuthContext} from "../../context/context"

const Search = () => {

  const [useranme, setUseranme] = useState('')
  const [user, setuser] = useState(null)
  const [err, setErr] = useState(false)
  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("displayName", "==", useranme));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setuser(doc.data())
      })
    } catch(err) {
      setErr(true)
    }

  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleClick = async () => {
    //check whether the group exists or not, if not, create
    const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid

    try{
      const response = await getDoc(doc(db, "chats", combineId))
      if(!response.exists()) {
        await setDoc(doc(db, "chats", combineId), {messages: []})

        await updateDoc(doc(db, "userchat", currentUser.uid), {
          [combineId+".userInfo"]: {
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combineId+".date"]:serverTimestamp()
        });
        await updateDoc(doc(db, "userchat", user.uid), {
          [combineId+".userInfo"]: {
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combineId+".date"]:serverTimestamp()
        });
      }
    }catch(error) {

    }
    setuser(null)
    setUseranme('')
    
  }

  return (
    <div className='searchDiv'>
        <input type="search" value={useranme} onKeyDown={handleKey} onChange={(e) =>setUseranme(e.target.value)} className='search' placeholder='search for a user...'/>
        {err && <span>No users....</span>}
        {user && <div className="userWrapper userWrapperSm" onClick={handleClick}>
            <img src={user.photoURL} alt="" />
            <div className='userChat userSearch'>
                <p>{user.displayName}</p>
                <span>hey there</span>
            </div>
        </div>}
    </div>
  )
}

export default Search