import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAjDMBf-UxvW0fGrkrg6L95LoYzWTFlswM",
    authDomain: "discord-clone-62c87.firebaseapp.com",
    projectId: "discord-clone-62c87",
    storageBucket: "discord-clone-62c87.appspot.com",
    messagingSenderId: "929164561476",
    appId: "1:929164561476:web:5f2db4c0f5e7d064b70011"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
