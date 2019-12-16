module.exports.function = function getDetailInfo (resultFunction) {
  const console=require('console');

  console.log(resultFunction);
  
  return {
    title: resultFunction.title,
    url: resultFunction.url
  };
}
