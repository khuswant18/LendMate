import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCR8MtIKNSc63yS6bmFTnbhmZcUKu5b0Q",
  authDomain: "lendmate-31de9.firebaseapp.com",
  projectId: "lendmate-31de9",
  storageBucket: "lendmate-31de9.firebasestorage.app",
  messagingSenderId: "398281602810",
  appId: "1:398281602810:web:74e6543ec4e7d9654c7b43"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()