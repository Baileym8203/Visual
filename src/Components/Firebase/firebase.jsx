// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVxCMst1duUCdZLDVyy4RAa2X3g9AdnGY",
  authDomain: "test-d60b3.firebaseapp.com",
  projectId: "test-d60b3",
  storageBucket: "test-d60b3.appspot.com",
  messagingSenderId: "1049028456273",
  appId: "1:1049028456273:web:176c7d4936e4527d836d70",
  measurementId: "G-P802WWW1PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const authentication = getAuth(app);