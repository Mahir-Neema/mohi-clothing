import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCO2QAd5BVFPlQ14Jgi22S9Zy65GbKvlfA",
    authDomain: "mohi-db.firebaseapp.com",
    // databaseURL: 'https://mohi-db.firebaseio.com',
    projectId: "mohi-db",
    storageBucket: "mohi-db.appspot.com",
    messagingSenderId: "712393890558",
    appId: "1:712393890558:web:053b1997249ddb2f9de3af",
    measurementId: "G-1CW1BE2L4E"
  };

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;