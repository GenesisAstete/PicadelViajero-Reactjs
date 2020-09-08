import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCiNrxRTtGg8vnxZiRqE92L3ieLR5kzXyk",
    authDomain: "lapicadelviajero-1f992.firebaseapp.com",
    databaseURL: "https://lapicadelviajero-1f992.firebaseio.com",
    projectId: "lapicadelviajero-1f992",
    storageBucket: "lapicadelviajero-1f992.appspot.com",
    messagingSenderId: "609549706982",
    appId: "1:609549706982:web:d4b31c554c6518aac03d27"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};