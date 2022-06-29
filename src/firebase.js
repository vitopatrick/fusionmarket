import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ? this will be hidden in an envirnoment variable

// ? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzHMQSQznKkvp5aRwidlurDak7ZlB8pos",
  authDomain: "fidelitymarket-6e97e.firebaseapp.com",
  projectId: "fidelitymarket-6e97e",
  storageBucket: "fidelitymarket-6e97e.appspot.com",
  messagingSenderId: "768583493113",
  appId: "1:768583493113:web:2cb509b64b7ebf77968928",
  measurementId: "G-CW5YLNT4Z4",
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
