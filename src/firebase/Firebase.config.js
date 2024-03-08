// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1gGvvV7vADDYLIWYLnj2pSBGa2ytAzp0",
  authDomain: "first-firebase-920ae.firebaseapp.com",
  projectId: "first-firebase-920ae",
  storageBucket: "first-firebase-920ae.appspot.com",
  messagingSenderId: "361469489157",
  appId: "1:361469489157:web:defb484ea6e928824b2c6c",
  measurementId: "G-HM1X0TFH1P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);