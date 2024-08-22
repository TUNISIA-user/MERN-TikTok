// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDoH60yK34EwI59gxDNqQYJNSakWTDTkMA",
  authDomain: "tiktok-clone-a3435.firebaseapp.com",
  projectId: "tiktok-clone-a3435",
  storageBucket: "tiktok-clone-a3435.appspot.com",
  messagingSenderId: "805917254763",
  appId: "1:805917254763:web:9e87e77dcfc6ff21b6bd2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
