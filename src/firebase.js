import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseCredentials from './firebase-credentials.json';

const firebaseConfig = firebaseCredentials;

firebase.initializeApp(firebaseConfig);

export default firebase;