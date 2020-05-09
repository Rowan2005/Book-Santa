import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD4OVP2ZdeFs1owxLe6lwc2r8McqrXeBK4",
    authDomain: "book-santa-c5d4e.firebaseapp.com",
    databaseURL: "https://book-santa-c5d4e.firebaseio.com",
    projectId: "book-santa-c5d4e",
    storageBucket: "book-santa-c5d4e.appspot.com",
    messagingSenderId: "440354772680",
    appId: "1:440354772680:web:ade2de0bc805bb99ffb7fd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore()