import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAk2KieuQEBdz_Ep0Lp-Sz1YlaZjOBl90',
  authDomain: 'quiz-ed5f5.firebaseapp.com',
  projectId: 'quiz-ed5f5',
  storageBucket: 'quiz-ed5f5.appspot.com',
  messagingSenderId: '324146653398',
  appId: '1:324146653398:web:6328237d6683935fe10177',
  measurementId: 'G-WBZ91XEX08',
};

if (!firebaseConfig.apiKey) throw new Error('Missing firebase apiKey');
if (!firebaseConfig.apiKey) throw new Error('Missing firebase authDomain');
if (!firebaseConfig.apiKey) throw new Error('Missing firebase projectId');
if (!firebaseConfig.apiKey) throw new Error('Missing firebase storageBucket');
if (!firebaseConfig.apiKey)
  throw new Error('Missing firebase messagingSenderId');
if (!firebaseConfig.apiKey) throw new Error('Missing firebase appId');
if (!firebaseConfig.apiKey) throw new Error('Missing firebase measurementId');

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
