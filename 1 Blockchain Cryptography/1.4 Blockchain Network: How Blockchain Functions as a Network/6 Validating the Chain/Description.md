## Blockchain - Chain Validation

Blockchains are run by a network of computers. When a computer finds a new block, it broadcasts its new version of the blockchain to all of its peers. There may be multiple versions of the blockchain at any given time. However, the longest valid blockchain is the accepted one.

### 🏁 Your Goal: Create an `isValid` Function

You need to create a function called `isValid` on our `Blockchain` class that will return `true` or `false` depending on whether the blockchain is valid.

The `isValid` function should check the integrity of every block in the chain by verifying that each block's `previousHash` field is equal to the hash of the block before it.

### 💡 Hint

To compare the output of the `SHA256` function, you need to convert the hash to a string (using `.toString()`) before comparing. For example:

```js
const hash1 = SHA256("a");
const hash2 = SHA256("a");

console.log(hash1 === hash2); // false
console.log(hash1.toString() === hash2.toString()); // true
```

Notice that in the first case, the comparison is false because SHA256("a") returns an object, and objects are compared by reference. In the second case, .toString() converts both objects to strings, so they are compared correctly.

## Next Steps:
Implement the `isValid` function in the Blockchain class.

Ensure that it checks the `previousHash` of each block and compares it to the actual hash of the block before it.

Return `false` if any discrepancy is found, otherwise return `true` if the chain is valid.

### Example:

```js
class Blockchain {
    constructor() {
        this.chain = [new Block("Genesis Block")];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Check if the current block's previousHash matches the hash of the previous block
            if (currentBlock.previousHash !== previousBlock.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
}
```

In this example, the isValid function checks each block in the blockchain and verifies that its previousHash matches the hash of the previous block.

