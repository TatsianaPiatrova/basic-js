const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i<names.length; i++){
    if (names.includes(names[i], i+1)){
      let count = 1;
        while(names.includes(names[i], i+1)){
          let j = names.indexOf(names[i], i+1)
          names[j] = names[j] + `(${count})`;
          count++;
        }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
