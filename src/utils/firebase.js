// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1kCQK-qEu6bldZxGujykznURIX4KXMhk",
  authDomain: "netflixgpt-9ed24.firebaseapp.com",
  projectId: "netflixgpt-9ed24",
  storageBucket: "netflixgpt-9ed24.firebasestorage.app",
  messagingSenderId: "16530624838",
  appId: "1:16530624838:web:6c103e7975d669fcf79547",
  measurementId: "G-GGYKM1KD5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);