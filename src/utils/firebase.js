// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-AGwy0uZpwmoTe8oNdPOr80sW5_FoI7U",
    authDomain: "netflixgpt-ed8e4.firebaseapp.com",
    projectId: "netflixgpt-ed8e4",
    storageBucket: "netflixgpt-ed8e4.appspot.com",
    messagingSenderId: "926138345199",
    appId: "1:926138345199:web:2e23b7a88b788ac365dd1a",
    measurementId: "G-S5121MXRNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Getting auth from Firebase
export const auth = getAuth();
