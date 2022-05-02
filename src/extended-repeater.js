const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!('separator' in options)) options.separator = '+';
  if (!('repeatTimes' in options)) options.repeatTimes = 1;
  if (!('addition' in options)) options.addition = '';
  if (!('additionRepeatTimes' in options)) options.additionRepeatTimes = 1;
  if (!('additionSeparator' in options)) options.additionSeparator = '|';
  let answerArray = [];
  let additionArray = [];
  for (let i = 0; i<options.additionRepeatTimes; i++)
    additionArray.push(String(options.addition));
  str+=additionArray.join(options.additionSeparator);
  for (let i = 0; i<options.repeatTimes; i++)
    answerArray.push(str);
  return answerArray.join(options.separator)
}

module.exports = {
  repeater
};
