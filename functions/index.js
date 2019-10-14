'use strict';

const {
  dialogflow,
  HtmlResponse
} = require('actions-on-google');

const functions = require('firebase-functions');
const app = dialogflow({
  debug: true
});
exports.main = functions.https.onRequest(app);

const WEB_CONTENT_URL = 'https://brave-lalande-303cf8.netlify.com';

app.intent('welcome', conv => {
  conv.ask('地図くんです。');

  conv.ask(new HtmlResponse({
    url: WEB_CONTENT_URL,
    suppress: true
  }));
});

app.intent('start', conv => {
  conv.ask('カウントを開始します。');

  conv.ask(new HtmlResponse({
    suppress: true,
    data: {
      starting: true
    }
  }));
});

// app.intent('stop', conv => {
//   conv.ask('カウントを一時停止します。');

//   conv.ask(new HtmlResponse({
//     suppress: true,
//     data: {
//       starting: false
//     }
//   }));
// });

// app.intent('reset', conv => {
//   conv.ask('カウントをリセットします。');

//   conv.ask(new HtmlResponse({
//     suppress: true,
//     data: {
//       reset: true
//     }
//   }));
// });