const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block('0')]
    }
}

module.exports = Blockchain;