// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACaxVd0XYq2JdXEqORSG6s_pf2f9o6Etw",
  authDomain: "online-fashion-shopping-675ab.firebaseapp.com",
  databaseURL: "https://online-fashion-shopping-675ab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-fashion-shopping-675ab",
  storageBucket: "online-fashion-shopping-675ab.appspot.com",
  messagingSenderId: "283082319248",
  appId: "1:283082319248:web:2829114cf493aba635ff15",
  measurementId: "G-E39HQR8LR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);