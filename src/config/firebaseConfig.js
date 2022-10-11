// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBu8FKRtmBsS327Yh9e801ZSBRU9-AMjJo",
  authDomain: "note-app-5a87e.firebaseapp.com",
  projectId: "note-app-5a87e",
  storageBucket: "note-app-5a87e.appspot.com",
  messagingSenderId: "973803227201",
  appId: "1:973803227201:web:cd6dae68713e1a73a89ec0"
};


// Initialize Firebase
export const firebaseAppConfig = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseAppConfig);
export const db = getFirestore(firebaseAppConfig);

