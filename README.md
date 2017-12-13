# learn-fcm-web
Learn Firebase Cloud Messaging for Web (Javascript)

## Development
* copy and then paste `src/config.js.sample` to `src/config.js`, change it.
* run `npm install` or `yarn` to install dependecies.
* run `npm install -g serve` to install serve.
* run `npm run build` for generating client's assets.
* for client run this `serve public -p 8000` command on the terminal.
* download your service-account.json from firebase console, then paste it to `/server` dir.

## Test FCM
* `node server/single.js <TOKEN_DESTINATION>`
