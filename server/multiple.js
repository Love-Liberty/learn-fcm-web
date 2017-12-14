const admin = require('./init');

const tokens = [];

process.argv.forEach((val, index) => {
  if (index >= 2) {
    tokens.push(val);
  }
});

console.log(tokens);

let payload = {
  notification: {
    title: "Firebase Cloud Messaging - Multiple",
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    click_action: 'https://dummypage.com'
  }
};

admin.messaging().sendToDevice(tokens, payload)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
