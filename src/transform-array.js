const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

function delStr(str){
  if (str != "--discard-next" && str != "--discard-prev" && str != "--double-next" && str != "--double-prev") 
  return str;
}
function doubleNext(result, j){
  if(j==(result.length-1) || del) return result;
  else {result.splice(j,1,result[++j]); ;return result;}
}
function doublePrev(result, j){
  if(j==0 || del) return ;
  else{ result.splice(j,1,result[--j]); return result}
}
function discardPrev(result, j){
  if(j==0) {
    console.log(j)
    return result;}
  else {
    del = true; 
    result.splice(--j,1);
    return result}
}
function discardNext(result, j){
  if(j==(result.length-1) || del){ console.log(result[j]); return result; }
  else{    del = true; result.splice(++j,1);  console.log(result); return result}
}


  if (!Array.isArray(arr))
  throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [...arr]
  let del = false;
  for (i in result){
    switch (result[i]){
      case '--double-next': doubleNext(result, i); break;
      case '--double-prev': doublePrev(result, i); break;
      case '--discard-next': discardNext(result, i); break;
      case '--discard-prev': discardPrev(result, i); break;
    }
  }
return result.filter(delStr);


  // for (let i = 0; i < arr.length; i++){
  //   if (typeof result[i] != 'string'){
  //     // result.push(arr[i]);
  //     continue;
  //   }
  //   else  {
  //     let j = i;
  //       switch(result[i]){
  //         case '--double-next': 
  //             if(i===(arr.length-1))
  //             {
  //               continue;
  //             }
  //             else {
  //               result.splice(j,1,result[++j]); }
  //             break;
  //         case '--discard-prev':      
  //             if(i===0)
  //             {
  //               continue;
  //             }
  //             else {
  //                   result.splice(result[--j],1); }
  //             break;
  //         case '--discard-next':
  //             if(j===(arr.length-1))
  //             {
  //               continue;
  //             }
  //             else result.splice(result[++j],1);
  //             break;
  //         case '--double-prev':              
  //             if(i===0)
  //             {
  //               continue;
  //             }
  //             else {
  //                   result.splice(j,0,result[--j]);} break;
  //       }
  //     }
  // }
}
console.log(transform(['--discard-prev', 1, 2, 3]))
module.exports = {
  transform
};
