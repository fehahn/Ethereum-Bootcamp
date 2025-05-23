const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    return mempool.push(transaction)
}

function mine() {
    const block = {
        id: blocks.length,
        transactions: []
    }

    for (i = 0; i < MAX_TRANSACTIONS; i++) {
        const tx = mempool.shift()

        if (tx == undefined)
            break

        block.transactions.push(tx)
    }

    block.hash = SHA256(JSON.stringify(block))

    blocks.push(block)
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};