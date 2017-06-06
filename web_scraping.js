var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var rp = require('request-promise');
var p = []
for (var i = 0; i < urls.length; i++){
  var x = rp(urls[i])
    .then(function (htmlString){
      console.log(htmlString);
    })
    .catch(function (err){
      console.error(err);
    })
  p.push(x);
}

Promise.all(p)
  .then(function (responses){
    console.log(responses.length);
  });
