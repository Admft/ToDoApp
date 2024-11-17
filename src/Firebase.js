// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfmeQLzxN6n0GQ8G8TeoDAiJj2RltfwMs",
  authDomain: "todoapp-faaf3.firebaseapp.com",
  projectId: "todoapp-faaf3",
  storageBucket: "todoapp-faaf3.firebasestorage.app",
  messagingSenderId: "238950043804",
  appId: "1:238950043804:web:3a8a82a98b20b00c299d59",
  measurementId: "G-DWWJJWSC2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);