import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
//others that we are not gonna use
// import '@firebase/storage'
// import '@firebase/functions'
// import '@firebase/messaging'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_6Db7mUzwihx59Nwolqs7Mx-HcGWhWns",
  authDomain: "mantadrie.firebaseapp.com",
  databaseURL: "https://mantadrie.firebaseio.com",
  projectId: "mantadrie",
  storageBucket: "mantadrie.appspot.com",
  messagingSenderId: "1052629538156",
  appId: "1:1052629538156:web:4963833de5a8504e630f49"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//give access to auth and firestore to the entire app
const auth = firebase.auth;
const firestore = firebase.firestore;

export { auth, firestore };
