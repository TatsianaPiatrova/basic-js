const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let array = n.split('-');
  let reg = /\p{Hex_Digit}\p{Hex_Digit}/u;
  let matches;
  if(array[1].length>3)
  return false
  for (let i = 0; i<array.length; i++){
    matches = array[i].match(reg) || []
    if(!matches.length)
    return false
  }
 return true
}
console.log(isMAC48Address('FF-FF-FF-FF-FF-FF'));
module.exports = {
  isMAC48Address
};
