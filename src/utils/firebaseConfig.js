import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBokqD3hSlHT8INzeaH5wNik4YzHhq6WyY",
  authDomain: "tuto-from-scratch-auth-crud.firebaseapp.com",
  databaseURL: "https://tuto-from-scratch-auth-crud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tuto-from-scratch-auth-crud",
  storageBucket: "tuto-from-scratch-auth-crud.appspot.com",
  messagingSenderId: "1024256698810",
  appId: "1:1024256698810:web:cbe00bd191fce629485583",
  measurementId: "G-RJ94XZLKXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;