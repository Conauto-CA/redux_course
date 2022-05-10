import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDV3WISEi_-TaM0qCu2nHPZWaLxIwuwt14",
    authDomain: "practice-redux-b0373.firebaseapp.com",
    projectId: "practice-redux-b0373",
    storageBucket: "practice-redux-b0373.appspot.com",
    messagingSenderId: "615330860459",
    appId: "1:615330860459:web:c307562daaad84095896ee"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    app,
    db,
    auth,
    googleAuthProvider
};