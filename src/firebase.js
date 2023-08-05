// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGZqkvefkOW6fqkzv8sdTRXHGewzbIqso",
  authDomain: "portfolio-contact-form-558f3.firebaseapp.com",
  projectId: "portfolio-contact-form-558f3",
  storageBucket: "portfolio-contact-form-558f3.appspot.com",
  messagingSenderId: "963501725687",
  appId: "1:963501725687:web:a70d8afb6b94f9355880f2",
  measurementId: "G-98H8NR9F6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);