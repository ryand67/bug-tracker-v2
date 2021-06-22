import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4Ke4dGNqZmyQOC4sR2eFA-5w7MTAb3Ng",
    authDomain: "bug-tracker-59bc5.firebaseapp.com",
    projectId: "bug-tracker-59bc5",
    storageBucket: "bug-tracker-59bc5.appspot.com",
    messagingSenderId: "445944685890",
    appId: "1:445944685890:web:5e95e309570468b00694db",
    measurementId: "G-9VBWKKV5LD"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.EmailAuthProvider();

export { db, auth, provider };