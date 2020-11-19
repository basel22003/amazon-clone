import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATchI5QOw-QBpDixxWxqF2Rrlidp7lDpQ",
  authDomain: "challenge-d9150.firebaseapp.com",
  databaseURL: "https://challenge-d9150.firebaseio.com",
  projectId: "challenge-d9150",
  storageBucket: "challenge-d9150.appspot.com",
  messagingSenderId: "23640311248",
  appId: "1:23640311248:web:ea148f8dd09a5ef4a225d5",
  measurementId: "G-9NHNQNELXM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
