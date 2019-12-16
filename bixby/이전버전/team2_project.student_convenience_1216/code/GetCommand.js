module.exports.function = function getCommand (command) {
  const fakeData=require("./Data/FunctionData.js");
  const rdata=require("./Data/RandomData.js");
  const console=require('console');
  let result=[];

  if(command != "RANDOM"){
    result=fakeData[command];
    //for(let i=0;i<result.length;++i){
      //result[i].url=command;
      //result[i].url=command.url;
      //result[i].title=command.title;
    //}
  }
  else
  {
    if(Math.floor(Math.random()*2))
      result=rdata["EVERYTIME"];
    else
      result=rdata["YOUTUBE"];
  }

  console.log(result);
  return result;
}