// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "[API_KEY]",
  authDomain: "[AUTH_DOMAIN]",
  projectId: "[ESHOP]",
  storageBucket: "[STORAGE_BUCKET_ID]",
  messagingSenderId: "[MSG_SENDER_ID]",
  appId: "[APP_ID]",
  measurementId: "[MEASUREMENT_ID]",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp); // Firestore initialization
const auth = getAuth(firebaseApp); // Authentication initialization

// Export Firestore and Auth instances
export { db, auth };
