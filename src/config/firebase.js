// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2abBjO12w3KhaR_9Plokjb5t2RF6uW_0",
  authDomain: "inventory-management-sys-a8034.firebaseapp.com",
  projectId: "inventory-management-sys-a8034",
  storageBucket: "inventory-management-sys-a8034.appspot.com",
  messagingSenderId: "955733059403",
  appId: "1:955733059403:web:bdd53c24e8efc715b86ace",
  measurementId: "G-XZ9DK6YWHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);