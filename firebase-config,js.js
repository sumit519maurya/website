// firebase-config.js

// Tumne Firebase SDK ko HTML me already include kiya hoga (app + database)
// e.g. <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
//      <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyDhNP5ZSkVhAJUwxOLi1DYDEGddkDJHejA",
  authDomain: "attendweb-74d80.firebaseapp.com",
  projectId: "attendweb-74d80",
  storageBucket: "attendweb-74d80.appspot.com",
  messagingSenderId: "664718667922",
  appId: "1:664718667922:web:bb8b5383ba1c05bbaef64b",
  measurementId: "G-EGEKJ5P09G",
  databaseURL: "https://attendweb-74d80-default-rtdb.firebaseio.com" // 👈 yeh zaruri hai
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Realtime Database ka reference
const db = firebase.database();

// Ab db ko dusre JS files me use kar sakte ho
