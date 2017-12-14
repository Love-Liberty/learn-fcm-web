import firebase from 'firebase';
import config from './config';

firebase.initializeApp({
  'messagingSenderId': config.messagingSenderId
});

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(payload => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
// });
