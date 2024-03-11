import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCV_uhvHHM_EnIYo4zK-QkOdud9uHljI",
  authDomain: "e-commerce-deraiopian-b5513.firebaseapp.com",
  projectId: "e-commerce-deraiopian-b5513",
  storageBucket: "e-commerce-deraiopian-b5513.appspot.com",
  messagingSenderId: "134689681736",
  appId: "1:134689681736:web:7e7e6825253e23ebf0437d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)