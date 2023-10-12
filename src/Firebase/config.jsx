// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAngPT4blVXyXXj5OByzG3Rm6Qj9UnBJw4",
  authDomain: "urbansty-5d31d.firebaseapp.com",
  projectId: "urbansty-5d31d",
  storageBucket: "urbansty-5d31d.appspot.com",
  messagingSenderId: "465323313470",
  appId: "1:465323313470:web:b21f930f189f90c954846f",
  measurementId: "G-6J8NFZMP0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);