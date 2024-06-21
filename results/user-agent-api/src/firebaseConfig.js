// src/firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "rental-mobil-366a8.firebaseapp.com",
  projectId: "rental-mobil-366a8",
  storageBucket: "rental-mobil-366a8.appspot.com",
  messagingSenderId: "59253777816",
  appId: "1:59253777816:web:0093f74f31c7d1bd25b7ed",
  measurementId: "G-2WF6H4QMVF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export { firebase, database };

