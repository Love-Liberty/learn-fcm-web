# learn-fcm-web
Learn Firebase Cloud Messaging for Web (Javascript)

## Development
* copy and then paste `src/config.js.sample` to `src/config.js`, change it.
* run `npm install` or `yarn` to install dependecies.
* run `npm install -g serve` to install serve.
* run `npm run build` for generating client's assets.
* for client run this `serve public -p 8000` command on the terminal.
* download your `service-account.json` from firebase console, then paste it to `/server` dir.

## Test FCM
* `node server/single.js <TOKEN_DESTINATION>`
* `node server/multiple.js <TOKEN_DESTINATION_1> <TOKEN_DESTINATION_2> <TOKEN_DESTINATION_N>`
* `node server/data.js <TOKEN_DESTINATION>`
* subscribing tokens to topic, run this `node server/topic-subscriber.js <TOPIC_NAME> <TOKEN_DESTINATION_1> <TOKEN_DESTINATION_2> <TOKEN_DESTINATION_N>`
* `node server/topic.js <TOPIC_NAME>`


## References
* [Firebase Cloud Messaging Documentation](https://firebase.google.com/docs/cloud-messaging/index)
* [Getting Started with Firebase Cloud Messaging on the Web - Firecasts](https://www.youtube.com/watch?v=BsCBCudx58g)
* [Firebase Cloud Messaging Quickstart](https://github.com/firebase/quickstart-js/tree/master/messaging)
