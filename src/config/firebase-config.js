// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOEovNtBc3_C_leKFBAWlyh0or6fY7v9Y",
  authDomain: "expense-tracker-a4157.firebaseapp.com",
  projectId: "expense-tracker-a4157",
  storageBucket: "expense-tracker-a4157.appspot.com",
  messagingSenderId: "221451779990",
  appId: "1:221451779990:web:edbb3df78cbd50ecc027b7",
  measurementId: "G-4VLYV45HQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
//firebase init
//firebase deploy

//sudo npm install -g firebase-tools