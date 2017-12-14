const admin = require('./init');

const topic = process.argv[2]
const payload = {
  notification: {
    title: 'Kimi no Na Wa',
    body: 'Kimi no Na wa., atau yang dikenal juga dengan judul bahasa Inggrisnya Your Name, adalah sebuah film animasi Jepang produksi tahun 2016',
    icon: 'https://carenusa.com/favicons/android-chrome-192x192.png',
  }
};

admin.messaging().sendToTopic(topic, payload)
  .then(res => {
    console.log("Successfully sent message:", res);
  })
  .catch(err => {
    console.log("Error sending message:", err);
  });
