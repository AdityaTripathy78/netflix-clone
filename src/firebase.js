import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNXkl0tWACVzTfQAHOlGdBccVonoo8i_0",
  authDomain: "netflix-clone-819c7.firebaseapp.com",
  projectId: "netflix-clone-819c7",
  storageBucket: "netflix-clone-819c7.appspot.com",
  messagingSenderId: "1042066065349",
  appId: "1:1042066065349:web:dd6dde8ef6bb471a266dac",
  measurementId: "G-29851055ZC"
};

  const initializeApp = firebase.initializeApp(firebaseConfig);
  const db = initializeApp.firestore();
  const auth = firebase.auth();

  console.log(auth)
  export {auth};
  export default db;
