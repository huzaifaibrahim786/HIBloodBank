import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDMg5aIuCGBPGExrceFaSex2BTQm0aiXSQ",
  authDomain: "hi-bloodbank.firebaseapp.com",
  projectId: "hi-bloodbank",
  storageBucket: "hi-bloodbank.appspot.com",
  messagingSenderId: "650760223689",
  appId: "1:650760223689:web:9d3885e05d9d89dc160618",
  measurementId: "G-WW9QR7TPB3"
};
export default firebase.initializeApp(firebaseConfig);