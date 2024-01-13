// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcsGY4EBQDaUVZpV7HHjTmcL3VVA9dZ9Q",
    authDomain: "aiklass-d721f.firebaseapp.com",
    projectId: "aiklass-d721f",
    storageBucket: "aiklass-d721f.appspot.com",
    messagingSenderId: "54539307863",
    appId: "1:54539307863:web:b5b800e967fcfa3d8b8c12",
    measurementId: "G-RTHSLJT7FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const form = document.getElementById("contactForm")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("form submitted");
})

function writeEmail(){

}