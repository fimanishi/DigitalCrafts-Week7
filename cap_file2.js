var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input file: ", function(input){
  fs.readFile(input, function(err, buffer){
    if (err){
      console.error(err.message);
      return;
    }
    rl.question("Output file: ", function(output){
      buffer = buffer.toString().toUpperCase();
      fs.writeFile(output, buffer, function(err){
        if (err){
          console.error(err.message);
          return;
        };
      });
      rl.close();
    });
  });
});
