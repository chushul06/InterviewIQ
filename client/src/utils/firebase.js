import {initializeApp} from "firebase/app"
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-229e7.firebaseapp.com",
  projectId: "interviewiq-229e7",
  storageBucket: "interviewiq-229e7.firebasestorage.app",
  messagingSenderId: "1025844591103",
  appId: "1:1025844591103:web:0c1a0bea4143a76ee0cfca",
  measurementId: "G-6RWX1974KJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider

export {auth , provider} 