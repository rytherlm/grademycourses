// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

// Read the firebaseConfig.json file
import firebaseConfig from "/Users/aidan/Desktop/Rate/grademycourses/src/firebase-credentials.json";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;
