
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDxNjvWDOFZX1Notq_y3E9yhj4fnwTbQ_c",
  authDomain: "fir-auth-e9dba.firebaseapp.com",
  projectId: "fir-auth-e9dba",
  storageBucket: "fir-auth-e9dba.appspot.com",
  messagingSenderId: "1020622666819",
  appId: "1:1020622666819:web:7a61dffcbe2d1f32c4a8f6",
  measurementId: "G-ZSYPPGT73Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;