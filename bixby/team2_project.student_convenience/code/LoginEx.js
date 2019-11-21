module.exports.function = function loginEx (resultFunction) {
  const console=require('console');

  console.log(resultFunction);

  var http = require('http');
  var options = {
    format: 'json',
    headers: {
      'accept': 'application/x-www-form-urlencoded'
    }
  }
  var pal={
    "username": "",
    "password": ""
  }
  
  var response = http.postUrl(resultFunction.url, pal, options);

  return response;
}
