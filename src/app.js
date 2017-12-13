import firebase from 'firebase';
import config from './config.js';

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.requestPermission().then(() => {
  return messaging.getToken();
}).then(token => {
  console.log('Token: ', token);
}).catch(err => {
  console.error('Unable to get permission to notify.', err);
});