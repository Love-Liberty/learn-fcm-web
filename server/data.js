const admin = require('./init');

const to = process.argv[2];

let dataPayload = {
  data: {
    name: 'Lorem Ipsum',
    content: 'Lorem Ipsum content'
  }
};

admin.messaging().sendToDevice(to, dataPayload)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
