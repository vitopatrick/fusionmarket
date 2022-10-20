import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ? this will be hidden in an envirnoment variable

// ? web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI25L1Jr-4vq8ejEuu4VhgFtMkcCz_oWc",
  authDomain: "highstrike-4fa0d.firebaseapp.com",
  projectId: "highstrike-4fa0d",
  storageBucket: "highstrike-4fa0d.appspot.com",
  messagingSenderId: "535544711891",
  appId: "1:535544711891:web:043b9eeb4288cad7fd6226"
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
