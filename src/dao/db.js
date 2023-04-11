import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB_Z5Z5l0GYuDF_b8DYe_ffZZpMUiBj9bw",
    authDomain: "testvue-e7bdb.firebaseapp.com",
    projectId: "testvue-e7bdb",
    storageBucket: "testvue-e7bdb.appspot.com",
    messagingSenderId: "431876660973",
    appId: "1:431876660973:web:434db29afdee7288d176e4",
    measurementId: "G-Y3N74LSNSM"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;