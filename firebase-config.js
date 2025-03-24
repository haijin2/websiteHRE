// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWg9QMvmGuXO8muczaT8C7mtKbAQdxflQ",
    authDomain: "website-7c0bb.firebaseapp.com",
    databaseURL: "https://website-7c0bb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "website-7c0bb",
    storageBucket: "website-7c0bb.firebasestorage.app",
    messagingSenderId: "161489771293",
    appId: "1:161489771293:web:ce3088f4c22bbb7e96dff4",
    measurementId: "G-KXHKNXW8WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app); // Initialize auth

// Export the database, auth, and any other Firebase services you need
export { database, auth }; // export database and auth