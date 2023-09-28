import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "realtime-chatapp-c58c9.firebaseapp.com",
  projectId: "realtime-chatapp-c58c9",
  storageBucket: "realtime-chatapp-c58c9.appspot.com",
  messagingSenderId: "157062954347",
  appId: "1:157062954347:web:d6133548d9b025aecf602e",
  measurementId: "G-4JYHYJZ9EX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
