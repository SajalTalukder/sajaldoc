import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA_RH6XAEhcuZkb6vOae5G50XJC02uROFs",
  authDomain: "sajaldocs-57135.firebaseapp.com",
  projectId: "sajaldocs-57135",
  storageBucket: "sajaldocs-57135.appspot.com",
  messagingSenderId: "1084847361488",
  appId: "1:1084847361488:web:1fdb4e2b416956c3527dd5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
