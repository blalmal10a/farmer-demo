import * as firebaseui from 'firebaseui';

// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { home } from 'src/scripts/home';
const firebaseConfig = {
  apiKey: "AIzaSyCvc2x-vq3soJahuUBG8wTAfmW1T5QVFIQ",
  authDomain: "testna-f789e.firebaseapp.com",
  databaseURL: "https://testna-f789e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testna-f789e",
  storageBucket: "testna-f789e.appspot.com",
  messagingSenderId: "273543611582",
  appId: "1:273543611582:web:f994ce8155011b84728aef"
};
firebase.initializeApp(firebaseConfig)
const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,

    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: 'IN'
    }

  ],
};

// Initialize the FirebaseUI Widget using Firebase.
const firebaseAuthUI = new firebaseui.auth.AuthUI(firebase.auth());
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export { firebase, firebaseAuthUI, uiConfig }
