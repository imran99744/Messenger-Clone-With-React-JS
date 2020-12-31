import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
    apiKey: "AIzaSyA2kbD0yEr7EOHaOoovzqmJbXjd89JvUpM",
  authDomain: "messenger-clone-b7513.firebaseapp.com",
  projectId: "messenger-clone-b7513",
  storageBucket: "messenger-clone-b7513.appspot.com",
  messagingSenderId: "833620669114",
  appId: "1:833620669114:web:6fc6864ac16f39e33f4883"
})

const db = firebaseApp.firestore()

export default db