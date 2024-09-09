// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH450xLOrP4vyk9Zh1wNg0nTHmnorm6wk",
  authDomain: "live-chat-be560.firebaseapp.com",
  projectId: "live-chat-be560",
  storageBucket: "live-chat-be560.appspot.com",
  messagingSenderId: "627353352951",
  appId: "1:627353352951:web:ce25b724fa3a12284f71f2",
  measurementId: "G-XCQMKMQ77K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
