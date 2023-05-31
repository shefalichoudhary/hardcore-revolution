// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { collection, getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAQ5gIvNgIJN5Ni5Qa9GXRnD-q1j6BMnQ",
  authDomain: "hardcore-revolution.firebaseapp.com",
  projectId: "hardcore-revolution",
  storageBucket: "hardcore-revolution.appspot.com",
  messagingSenderId: "317884059626",
  appId: "1:317884059626:web:66f183ca72589d5c41ec93",
  measurementId: "G-RR4R89PYV6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

//init services
export const db = getFirestore(app);

// collection ref
export const colRef = collection(db, "users");

//get collection data
