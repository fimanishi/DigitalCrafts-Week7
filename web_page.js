var readline = require('readline');
var request = require('request');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("URL: ", function(user_url){
  rl.question("Save to file: ", function(file_name){
    var url = 'http://' + user_url;
    request.get(url, function(err, response, html){
      if (err){
        console.error(err.message);
        return;
      }
      fs.writeFile(file_name, html, function(err){
        if (err){
          console.error(err.message);
          return;
        }
        console.log("Saved to file " + file_name);
        rl.close();
      });
    });
  });
});
