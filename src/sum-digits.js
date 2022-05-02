const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // let m = n.toString()
  // let array = m.split('');
  // for (i in array){
  //   array[i] = Number(array[i])

  // }
  let d = 0
  let e = n%10;
  n = (n - e)*0.1
  if (n>10){
    d = n%10;
    n = (n-d)*0.1
  }
  let sum = e+n+d;
  console.log(sum)
  if (sum>=10){
    let sumE = sum %10;
    sum = (sum - sumE)*0.1
    return sum+sumE
  }
  return sum
}

module.exports = {
  getSumOfDigits
};
