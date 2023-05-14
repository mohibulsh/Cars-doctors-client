// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY2ezl7MV3CxghUH3Q02cMpU76R6c_4RI",
  authDomain: "cars-doctors-c2571.firebaseapp.com",
  projectId: "cars-doctors-c2571",
  storageBucket: "cars-doctors-c2571.appspot.com",
  messagingSenderId: "436831405813",
  appId: "1:436831405813:web:2026c4e8d151e1cadaa7bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app