// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4fb6fBCMgjCpLLzIF7qThH4mz-eIforE",
  authDomain: "react-firebase-b5fb0.firebaseapp.com",
  projectId: "react-firebase-b5fb0",
  storageBucket: "react-firebase-b5fb0.appspot.com",
  messagingSenderId: "1065774703286",
  appId: "1:1065774703286:web:0fbd92b339f6fe86bf7c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);