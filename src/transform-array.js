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
function delStr(str){
  if (str != "--discard-next" && str != "--discard-prev" && str != "--double-next" && str != "--double-prev") 
  return str;
}

function transform(arr) {
  // if (!Array.isArray(arr))
  // throw new Error("'arr' parameter must be an instance of the Array!");
  // let result = arr;
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
  return 0;
}
console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
module.exports = {
  transform
};
