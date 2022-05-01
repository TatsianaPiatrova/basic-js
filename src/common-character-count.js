const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length == 0 || s2.length == 0)
    return 0;
  let str1, str2;
  if(s1.length>s2.length){
  str1 = s1.split("");
  str2 = s2.split("");
  }
  else{
    str1 = s2.split("");
    str2 = s1.split("");
  }
  for (char of str1){
    for(i in str2)
    if (char == str2[i]){
      console.log(str2, str1)
      let j = str1.indexOf(char);
      str2.splice(i,1);    
      break  
    }
  }

if (s1.length>s2.length) return (s2.length - str2.length);
      else return (s1.length - str2.length)
}
console.log(getCommonCharacterCount('abca', 'xyzbac'))
module.exports = {
  getCommonCharacterCount
};
