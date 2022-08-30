import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWtT73xpGzm0xtuDqTHZPzmv1f75PFyj8",
  authDomain: "practice-7246e.firebaseapp.com",
  databaseURL: "https://practice-7246e-default-rtdb.firebaseio.com",
  projectId: "practice-7246e",
  storageBucket: "practice-7246e.appspot.com",
  messagingSenderId: "655801540606",
  appId: "1:655801540606:web:4d7a7ef23b72f7621f2aaf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);