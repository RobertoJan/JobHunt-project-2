
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAm2pEFAKgA3U4gnMZdSrfpc_-91X3nufA",
    authDomain: "project-2-5ddf5.firebaseapp.com",
    databaseURL: "https://project-2-5ddf5-default-rtdb.firebaseio.com",
    projectId: "project-2-5ddf5",
    storageBucket: "project-2-5ddf5.appspot.com",
    messagingSenderId: "396626903970",
    appId: "1:396626903970:web:7b3aba2fae8e5fe73b28fb"
  };

  // Initialize Firebase
  const firebaseInfo = initializeApp(firebaseConfig);
  export default firebaseInfo
