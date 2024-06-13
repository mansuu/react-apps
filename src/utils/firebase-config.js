// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJYGPJ_pRwpQwhqAKbUmDNwJhqKVaENac",
  authDomain: "react-netflix-clone-dc81e.firebaseapp.com",
  projectId: "react-netflix-clone-dc81e",
  storageBucket: "react-netflix-clone-dc81e.appspot.com",
  messagingSenderId: "206517567478",
  appId: "1:206517567478:web:ac5edacfd5f874a6fcd1d7",
  measurementId: "G-VXDK250R1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
