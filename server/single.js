const admin = require('./init');

const to = process.argv[2];

let payload = {
  notification: {
    title: "Firebase Cloud Messaging",
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  }
};

admin.messaging().sendToDevice(to, payload)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
