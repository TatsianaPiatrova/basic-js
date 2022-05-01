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
    else this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || (position^0) !== position){
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
    }
    position--;
    if( position>=this.chain.length || position<0){
      this.chain = []
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newchain = this.chain.join("~~");
    this.chain = [];
    return newchain;
  }
};
//console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())
module.exports = {
  chainMaker
};
