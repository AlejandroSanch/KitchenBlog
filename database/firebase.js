import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPwKfbm_0oFEmPRLkqnCLTjcl2LWeMLj8",
  authDomain: "blog-firebase-cc414.firebaseapp.com",
  projectId: "blog-firebase-cc414",
  storageBucket: "blog-firebase-cc414.appspot.com",
  messagingSenderId: "44036868995",
  appId: "1:44036868995:web:8a286155e538916020c4b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(initializeApp());

export default{app, db}