// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0cAC7yQlyrFxDL7BGjhODD4F2czXv_rw",
  authDomain: "mobile-app-tracker-ampo.firebaseapp.com",
  projectId: "mobile-app-tracker-ampo",
  storageBucket: "mobile-app-tracker-ampo.firebasestorage.app",
  messagingSenderId: "832847710615",
  appId: "1:832847710615:web:b4c15c182080b65b245cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);