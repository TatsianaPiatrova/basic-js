const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    this.chain.length;
  },
  addLink(value) {
    if(arguments.length === 0) this.chain.push('()');
    else this.chain.push(`(${value})`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || (position^0) !== position)
        throw new Error("You can't remove incorrect link!");
    position--;
    if( position>=this.chain.getLength() || position<0){
      this.chain = []
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    return this.chain.reverse();
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
