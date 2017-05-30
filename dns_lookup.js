var readline = require('readline');
var dns = require('dns');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Domain name: ', function(domain){
  dns.lookup(domain, function(err,ip){
    if(err){
      console.error(err.message);
      return;
    }
    console.log("IP address: ", ip);
  });
  rl.close();
});
