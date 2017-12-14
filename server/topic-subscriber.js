const admin = require('./init');

const topic = process.argv[2];
const tokens = [];

process.argv.forEach((val, index) => {
  if (index > 2) {
    tokens.push(val);
  }
});

admin.messaging().subscribeToTopic(tokens, topic)
  .then(res => {
    console.log("Successfully subscribed to topic:", res);
  })
  .catch(err => {
    console.error("Error subscribing to topic:", err);
  });
