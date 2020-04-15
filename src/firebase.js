import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDAMpRezw3FGVIXU60M2FDHNsYt9uG6Jrs',
  authDomain: 'netflip-c9e5a.firebaseapp.com',
  databaseURL: 'https://netflip-c9e5a.firebaseio.com',
  projectId: 'netflip-c9e5a',
  storageBucket: 'netflip-c9e5a.appspot.com',
  messagingSenderId: '590575593180',
  appId: '1:590575593180:web:f8090306f92b6cd55a25ae',
});

export { firebaseConfig as firebase };
