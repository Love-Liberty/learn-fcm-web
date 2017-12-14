importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '824974847213'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);

  const title = payload.data.name;
  const options = {
    body: payload.data.content,
    icon: 'https://carenusa.com/favicons/android-chrome-192x192.png',
  };

  return self.registration.showNotification(title, options);
});
