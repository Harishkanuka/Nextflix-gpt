/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW8GD4AdchRS1_pSCONx4iBEafGFDyTmU",
    authDomain: "filmfusion-search.firebaseapp.com",
    projectId: "filmfusion-search",
    storageBucket: "filmfusion-search.appspot.com",
    messagingSenderId: "901612089675",
    appId: "1:901612089675:web:963270bf0bde87567df8ce",
    measurementId: "G-33QC1BJ4NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Getting auth from Firebase
export const auth = getAuth();
