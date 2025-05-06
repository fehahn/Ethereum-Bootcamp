const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block('0', '0')];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash()
        this.chain.push(block)
    }

    isValid() {
        for (let i = this.chain.length - 1; i > 0; i--) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i - 1]

            if (currentBlock.previousHash.toString() !== previousBlock.toHash().toString()) {
                return false
            }
        }

        return true
    }
}

module.exports = Blockchain;