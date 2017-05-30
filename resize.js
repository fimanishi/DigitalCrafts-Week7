//import sharp from 'sharp';

var options = {
  url: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
  encoding: null
};
var sharp = require('sharp');
var request = require('request');
var fs = require('fs');

request(options, function(err, response, imageData){
  sharp(imageData).resize(200).toFile('image.png', function(err, info){
    if(err){
      console.error(err.message);
      return;
    }
    console.log(info);
    console.log("Image file saved.")
  });
})
