const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let m = n.toString();
  let arr = m.split("");
  let array = []
  for (i in arr){
    let newArr = Array.from(arr);
    newArr.splice(i,1);
    array.push(Number(newArr.join("")))
  }
  return Math.max.apply(null, array)
}
console.log(deleteDigit(109))
module.exports = {
  deleteDigit
};
