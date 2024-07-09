// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvuNjkVcFA9cOw3T9RfU_mTCjCBTUuxc",
  authDomain: "auth-4d7fd.firebaseapp.com",
  projectId: "auth-4d7fd",
  storageBucket: "auth-4d7fd.appspot.com",
  messagingSenderId: "941370906056",
  appId: "1:941370906056:web:377e707cb64b6775d71cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,app };