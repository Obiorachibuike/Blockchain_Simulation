
# Simple Blockchain Simulation

## Overview

This project simulates a basic blockchain using JavaScript. It demonstrates the core principles of blockchain technology such as block structure, hashing, and how blocks are linked together to form a chain. The simulation also includes methods to validate the integrity of the chain and detect any tampering.

---

## Features

- **Block Structure**: Each block contains:
  - Block number (index)
  - Timestamp of block creation
  - A list of transactions (dummy data)
  - Hash of the previous block
  - Current block hash (generated using SHA-256)
  
- **Blockchain Class**: A class to manage the blockchain:
  - Method to add new blocks to the chain.
  - Method to validate the blockchain’s integrity and check for tampered data.

- **Proof-of-Work (Optional)**: A simple proof-of-work mechanism to make the block creation process computationally intensive by requiring a specific condition on the hash value.

---

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:
- **Node.js** (v12 or later)
- **npm** (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blockchain-simulation.git
   cd blockchain-simulation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   node index.js
   ```

4. You should see the blockchain being printed out in the console along with any tampering detection if applicable.

---

## Usage

- **Create a New Blockchain**: The blockchain is instantiated with a genesis block (the first block in the chain).
- **Add New Blocks**: New blocks are added to the chain with dummy transaction data.
- **Blockchain Validation**: The `validateBlockchain()` method ensures that the chain is valid and checks for any tampering by comparing the hash of each block to the hash of the previous one.

### Example:

```javascript
const blockchain = new Blockchain();
blockchain.addBlock(new Block(1, new Date(), [{ from: "Alice", to: "Bob", amount: 50 }]));
blockchain.addBlock(new Block(2, new Date(), [{ from: "Bob", to: "Charlie", amount: 30 }]));
blockchain.printBlockchain();  // Outputs the blockchain details
blockchain.validateBlockchain();  // Validates the integrity of the blockchain
```

---

## Features

- **Tampering Detection**: If someone tries to tamper with the data in the blockchain, the hash value of the modified block won't match the expected hash, and the blockchain will flag the chain as invalid.
  
- **Proof-of-Work**: (Optional) If you enable proof-of-work, each new block creation will require a computational effort to find a hash that satisfies the "difficulty" condition (e.g., the first few characters of the hash must be zeros).

---

## File Structure

```
blockchain-simulation/
├── app.js               # Main application file
├── blockchain.js        # Contains Blockchain and Block classes
├── hash.js              # Utilities for hashing (SHA-256)
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation (this file)
```

---

## Technologies Used

- **JavaScript (Node.js)**: For creating the blockchain simulation.
- **SHA-256**: A cryptographic hashing algorithm used for block hashing.
- **npm**: Node package manager for installing dependencies (if any).

---

## Contribution Guidelines

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any queries or feedback, feel free to reach out to me at [your-email@example.com].

---

### Acknowledgments

- **Blockchain Concept**: Inspired by the blockchain principles used in cryptocurrencies like Bitcoin and Ethereum.
- **SHA-256 Algorithm**: Used for generating the hash of blocks and ensuring data integrity.

---

## Disclaimer

This project is for educational purposes only and should not be used for any financial transactions or sensitive data.