module.exports.function = function loginEx (resultFunction) {
  const console=require('console');

  console.log(resultFunction);
  var base64 = require('base64');
  var http = require('http');
  var id  = base64.encode("qhcks1030");
  var pass = base64.encode("Qhhcks0525104!");
  var options = {
    format : "json",
    headers:{
      "Authorization": "Basic " + base64.encode("qhcks1030" + ":" + "Qhcks0525104!"),
      "X-Requested-With": "XMLHttpRequest"
    },
    returnHeaders:true
  };
  
  var response = http.getUrl(resultFunction.url, options);

  console.log(response);

  return response;
}
