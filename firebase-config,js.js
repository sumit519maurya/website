// firebase-config.js
// Firebase SDK scripts ko HTML me include karna hoga is file ke pehle

const firebaseConfig = {
    apiKey: "AIzaSyDhNP5ZSkVhAJUwxOLi1DYDEGddkDJHejA",
    authDomain: "attendweb-74d80.firebaseapp.com",
    projectId: "attendweb-74d80",
    storageBucket: "attendweb-74d80.firebasestorage.app",
    messagingSenderId: "664718667922",
    appId: "1:664718667922:web:bb8b5383ba1c05bbaef64b",
    measurementId: "G-EGEKJ5P09G"
  };
  
  // Firebase initialize
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  