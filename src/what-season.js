const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = ['winter', 'spring', 'summer', 'autumn'];
  
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (date.toString !== new Date().toString || typeof date.getMonth !== 'function')  throw new Error("Invalid date!");
  
  let month = date.getMonth() + 1;

  return season[ Math.floor((month % 12) / 3 )];
}

module.exports = {
  getSeason
};
