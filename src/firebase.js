import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlDeyOs4lpT2Ny5S_wg6UGs3aE3NMbNKM",
//   authDomain: "chat-f7b52.firebaseapp.com",
//   projectId: "chat-f7b52",
//   storageBucket: "chat-f7b52.appspot.com",
//   messagingSenderId: "826911440420",
//   appId: "1:826911440420:web:2d0942be025b38603462b1"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCiCg3E2pnC9vWBXjrn-YIfLmShDWpwoi4",
//   authDomain: "chat2-5afa5.firebaseapp.com",
//   projectId: "chat2-5afa5",
//   storageBucket: "chat2-5afa5.appspot.com",
//   messagingSenderId: "529592359836",
//   appId: "1:529592359836:web:bfaf9d7af0775761270659"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBBRuEdMx26wccsv7mwXDiMkpomZN2R6JA",
//   authDomain: "chat3-995a6.firebaseapp.com",
//   projectId: "chat3-995a6",
//   storageBucket: "chat3-995a6.appspot.com",
//   messagingSenderId: "90890848812",
//   appId: "1:90890848812:web:63798035e303936549df89"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC0RXO1Xu2YzwqUTQvW4c5w_bEKC_D1qA8",
  authDomain: "chat-eb001.firebaseapp.com",
  projectId: "chat-eb001",
  storageBucket: "chat-eb001.appspot.com",
  messagingSenderId: "215500312650",
  appId: "1:215500312650:web:a10d39ee21b4a1c0bc96b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const storage = getStorage();
export const db = getFirestore()
