module.exports.function = function loginEx (resultFunction) {
  const console=require('console');

  console.log(resultFunction);
  var http = require('http');
  
  //아이디 비번
  var data = {
    usr_id : "juhongkim2",
    usr_pwd : "rlawnghd2@0521",
    returnURL : "http://lms.knu.ac.kr/ilos/main/main_form.acl"
  }
  var options = {
    returnHeaders:true
  };
  
  var response = http.postUrl(resultFunction.url + "/ilos/lo/login.acl", data, options); //현제 lms 만 됨

  console.log(response);  console.log(response.parsed.returnURL);

  var res = JSON.parse(response.parsed);

  var URL = res.returnURL;
  return URL;
}
