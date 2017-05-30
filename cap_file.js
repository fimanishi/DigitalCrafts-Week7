var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Filename: ', function(filename){
  fs.readFile(filename, function(err, buffer){
    if (err){
      console.error(err.message);
      return;
    }
    console.log(buffer.toString().toUpperCase());
  });
  rl.close();
})
