// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwQooI2vNJrs5p08dHIodJspxZP-jHszM",
  authDomain: "file-sharing-9458e.firebaseapp.com",
  projectId: "file-sharing-9458e",
  storageBucket: "file-sharing-9458e.firebasestorage.app",
  messagingSenderId: "553301646682",
  appId: "1:553301646682:web:95f00c52bb95e7b1872763",
  measurementId: "G-FH80WPN5P1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
