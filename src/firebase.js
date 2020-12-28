// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyx5E3zybfiuD88L1bYd1a7wLL7JNGKe0",
  authDomain: "whatsapp-clone-81b35.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-81b35.firebaseio.com",
  projectId: "whatsapp-clone-81b35",
  storageBucket: "whatsapp-clone-81b35.appspot.com",
  messagingSenderId: "314922357699",
  appId: "1:314922357699:web:796bc5a3a2c79981e8e376",
  measurementId: "G-GEMD7SK6DT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;