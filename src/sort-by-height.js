const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArray = []
  for (i in arr)
    if (arr[i] != -1)
      sortedArray.push(arr[i])
  sortedArray.sort(function(a,b){return a-b})
  let j = 0;
  for (i in arr){
    if (arr[i]!= -1){
      arr.splice(i, 1, sortedArray[j])
      j++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
