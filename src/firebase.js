import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// KEYS AND INFOS ABOUT MY FIREBASE APP
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-eb001.firebaseapp.com",
  projectId: "chat-eb001",
  storageBucket: "chat-eb001.appspot.com",
  messagingSenderId: "215500312650",
  appId: "1:215500312650:web:a10d39ee21b4a1c0bc96b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// INITIATE FIREBASE STORAGE
export const storage = getStorage();

// INITIATE FIRESTORE DATABASE
export const db = getFirestore()
