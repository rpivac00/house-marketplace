// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd9HDSJUuRS57jpOYzp6cEqoX_PJoGSKo",
  authDomain: "house-marketplace-app-rpivac00.firebaseapp.com",
  projectId: "house-marketplace-app-rpivac00",
  storageBucket: "house-marketplace-app-rpivac00.appspot.com",
  messagingSenderId: "1049690611232",
  appId: "1:1049690611232:web:77eaae0ac1afc1280fe645",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
