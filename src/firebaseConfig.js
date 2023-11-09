import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFjC54RVthuXdxtPsWlFM5CVIqdIa-zKA",
    authDomain: "memorygame-de255.firebaseapp.com",
    databaseURL: "https://memorygame-de255-default-rtdb.firebaseio.com",
    projectId: "memorygame-de255",
    storageBucket: "memorygame-de255.appspot.com",
    messagingSenderId: "269058986599",
    appId: "1:269058986599:web:533b5445c9ad795ddf3ac2"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);