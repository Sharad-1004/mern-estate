// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-bccf1.firebaseapp.com",
  projectId: "mern-state-bccf1",
  storageBucket: "mern-state-bccf1.appspot.com",
  messagingSenderId: "380697887844",
  appId: "1:380697887844:web:af096f86e6a89ef0794b71"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);