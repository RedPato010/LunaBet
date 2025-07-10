// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDWxn28oXn04--DMwkzqMq00g_W-OYJ3g",
  authDomain: "lunabet-73609.firebaseapp.com",
  databaseURL: "https://lunabet-73609-default-rtdb.firebaseio.com",
  projectId: "lunabet-73609",
  storageBucket: "lunabet-73609.firebasestorage.app",
  messagingSenderId: "45582135337",
  appId: "1:45582135337:web:3cb9190e37827d9cc72c38",
  measurementId: "G-0XC4PX3HK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
