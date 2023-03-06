// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBOH1CRArX8h2XgSefjR32ySbSf4VabIqw",
  authDomain: "eshop-5dc74.firebaseapp.com",
  projectId: "eshop-5dc74",
  storageBucket: "eshop-5dc74.appspot.com",
  messagingSenderId: "894609827535",
  appId: "1:894609827535:web:bc98e1f017f46934abf9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
