import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkegviEPQyX6A_RS7DE30OGRzeEh45HA4",
  authDomain: "coffee-store-c0511.firebaseapp.com",
  projectId: "coffee-store-c0511",
  storageBucket: "coffee-store-c0511.firebasestorage.app",
  messagingSenderId: "254361828937",
  appId: "1:254361828937:web:7d39a16113fee7c8354998",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
