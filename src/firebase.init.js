// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH3BrQMTfY4xMwrCeWCaLJRdUQcQ25_O0",
  authDomain: "genius-car-services-3b315.firebaseapp.com",
  projectId: "genius-car-services-3b315",
  storageBucket: "genius-car-services-3b315.appspot.com",
  messagingSenderId: "107894736710",
  appId: "1:107894736710:web:2c4384ef7df0b4ac47c747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;