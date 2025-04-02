const Blockchain = require('./blockchain');
const Block = require('./block');

// Initialize Blockchain
let myBlockchain = new Blockchain();

// Add new blocks with dummy transactions
console.log("Mining block 1...");
myBlockchain.addBlock(new Block(1, Date.now(), { amount: 10 }));

console.log("Mining block 2...");
myBlockchain.addBlock(new Block(2, Date.now(), { amount: 50 }));

console.log("Mining block 3...");
myBlockchain.addBlock(new Block(3, Date.now(), { amount: 100 }));

// Validate blockchain
console.log("\nBlockchain valid?", myBlockchain.isChainValid() ? "✅ Yes" : "❌ No");

// Tamper with the blockchain
console.log("\nTampering with blockchain...");
myBlockchain.chain[1].transactions = { amount: 10000 };

// Check validity after tampering
console.log("Blockchain valid after tampering?", myBlockchain.isChainValid() ? "✅ Yes" : "❌ No");
