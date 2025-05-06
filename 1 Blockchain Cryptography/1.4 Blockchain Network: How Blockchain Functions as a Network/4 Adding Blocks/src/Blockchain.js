const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block('0')]
    }

    addBlock(block) {
        this.chain.push(block)
    }
}

module.exports = Blockchain;