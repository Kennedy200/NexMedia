// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDpvSmgGG8eX91mCkLBmH9imdeJI6SMNM",
  authDomain: "blog-website-c0595.firebaseapp.com",
  projectId: "blog-website-c0595",
  storageBucket: "blog-website-c0595.appspot.com",
  messagingSenderId: "926884909876",
  appId: "1:926884909876:web:a8b59fb701845fe98a0b61",
  measurementId: "G-34NHEB78JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);  // Initialize Firebase Storage

// Export the services
export { db, auth };
export { storage };