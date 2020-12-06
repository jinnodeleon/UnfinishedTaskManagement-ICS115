import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
//others that we are not gonna use
// import '@firebase/storage'
// import '@firebase/functions'
// import '@firebase/messaging'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKMyHYbv6GIoZX9ua7B5OI3rIA8snLyVQ",
  authDomain: "mantadrie-8dd7d.firebaseapp.com",
  projectId: "mantadrie-8dd7d",
  storageBucket: "mantadrie-8dd7d.appspot.com",
  messagingSenderId: "858538424755",
  appId: "1:858538424755:web:81c1e39d87dd165f4eb3c6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//give access to auth and firestore to the entire app
const auth = firebase.auth;
const firestore = firebase.firestore;

export { auth, firestore };
