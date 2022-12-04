import React, { useState } from 'react'
import img from '../../assets/screen-0.jpg'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase';

const Search = () => {

  const [useranme, setUseranme] = useState('')
  const [user, setuser] = useState(null)
  const [err, setErr] = useState(false)

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

  return (
    <div className='searchDiv'>
        <input type="search" onKeyDown={handleKey} onChange={(e) =>setUseranme(e.target.value)} className='search' placeholder='search for a user...'/>
        {err && <span>No users....</span>}
        {user && <div className="userWrapper">
            <img src={user.photoURL} />
            <div className='userChat'>
                <p>{user.displayName}</p>
                <span>hey there</span>
            </div>
        </div>}
    </div>
  )
}

export default Search