import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfmeQLzxN6n0GQ8G8TeoDAiJj2RltfwMs",
  authDomain: "todoapp-faaf3.firebaseapp.com",
  projectId: "todoapp-faaf3",
  storageBucket: "todoapp-faaf3.appspot.com",
  messagingSenderId: "238950043804",
  appId: "1:238950043804:web:3a8a82a98b20b00c299d59",
  measurementId: "G-DWWJJWSC2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };
