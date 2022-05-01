const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};
  domains.forEach((el) =>{
    let array = [];
    let domains = el.split('.');
    for (let i = (domains.length-1); i>=0; i--){
      array.push(domains[i])
      let name = '.'+array.join('.');
      if(answer[name]) 
        answer[name]++;
      else answer[name] = 1;
    }
  })
  return answer;
}
console.log(getDNSStats(['code.yandex.ru','music.yandex.ru','yandex.ru']));
module.exports = {
  getDNSStats
};
