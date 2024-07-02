// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFl_r1BS6Iqem_akdDlbGw6j3A6L-2i4",
  authDomain: "email-password-auth-6e54b.firebaseapp.com",
  projectId: "email-password-auth-6e54b",
  storageBucket: "email-password-auth-6e54b.appspot.com",
  messagingSenderId: "62867817076",
  appId: "1:62867817076:web:73ad748f77b91703f38721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;