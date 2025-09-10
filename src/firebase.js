// Import the compat version of Firebase
import firebase from "firebase/compat/app";

// Import the services you need
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIqDcPelQ56KlRJ2fa8-CdbsltyPf8bFo",
  authDomain: "skillbridge-ca085.firebaseapp.com",
  projectId: "skillbridge-ca085",
  storageBucket: "skillbridge-ca085.firebasestorage.app",
  messagingSenderId: "440562592938",
  appId: "1:440562592938:web:8eb9929ab83a4b587174d3",
  measurementId: "G-STWFJ99LTM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
