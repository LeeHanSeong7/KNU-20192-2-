module.exports.function = function loginEx (resultFunction) {
  const console=require('console');

  console.log(resultFunction);
  var http = require('http');
  
  //아이디 비번
  var data = {
    usr_id : "",
    usr_pwd : "",
    returnURL : ""
  }
  var options = {
    returnHeaders:true
  };
  
  var response = http.postUrl(resultFunction.url + "/ilos/lo/login.acl", data, options); //현제 lms 만 됨

  console.log(response);

  return response;
}
