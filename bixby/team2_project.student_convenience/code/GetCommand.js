module.exports.function = function getCommand (command) {
  const fakeData=require("./Data/FunctionData.js");
  const console=require('console');
  let result=[];

  if(command){
    result=fakeData[command];
    //for(let i=0;i<result.length;++i){
      //result[i].url=command;
      //result[i].url=command.url;
      //result[i].title=command.title;
    //}
  }

  console.log(result);
  return result;
}
