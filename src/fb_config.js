import firebase from 'firebase'

const config = firebase.initializeApp({
  apiKey: "AIzaSyDplqj8VQUzwUFKw-66nEUtnXIFMxCEkq0",
  authDomain: "react-login-manager.firebaseapp.com",
  databaseURL: "https://react-login-manager.firebaseio.com",
  projectId: "react-login-manager",
  storageBucket: "react-login-manager.appspot.com",
  messagingSenderId: "585048216165"
})

export default config
