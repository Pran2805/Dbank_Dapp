# dBank - Decentralized Banking on the Internet Computer

## Overview
**dBank** is a decentralized banking application built using **Motoko** and deployed on the **Internet Computer (IC)**. It allows users to deposit, withdraw, and manage their funds securely in a trustless environment. The project showcases fundamental blockchain concepts such as smart contract interactions, persistent storage, and user authentication.

## Features
- 🏦 **Decentralized Banking**: Store and manage funds without a central authority.
- 🔐 **Secure Transactions**: All transactions are processed via smart contracts.
- 📈 **Persistent Storage**: Balance updates are stored securely on the Internet Computer.
- 🔄 **Deposit & Withdraw**: Users can add or remove funds from their account.
- 🆔 **Internet Identity Integration**: Secure authentication via Internet Identity (optional).

## Tech Stack
- **Motoko**: Smart contract programming language for the Internet Computer.
- **DFX (Dfinity SDK)**: Deployment and management of canisters.
- **Vanilla JavaScript**: Frontend development.
- **Internet Identity (Optional)**: Secure authentication mechanism.

## Installation & Deployment
### Prerequisites
Ensure you have the following installed:
- [DFX SDK](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html)
- Node.js & npm
- Internet Identity (if authentication is used)

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/Pran2805/Dbank_Dapp.git
   cd dbank
   ```
2. Start the DFINITY local network:
   ```sh
   dfx start --background
   ```
3. Deploy the canister:
   ```sh
   dfx deploy
   ```
4. Access the frontend:
   ```sh
   dfx canister call dbank_backend deposit '(10)'  # Example Deposit
   ```
5. Open the frontend in your browser:
   ```sh
   dfx canister id dbank_frontend
   ```
   Copy the canister ID and open it in a browser.

## Smart Contract Code (Motoko)
The core functionality is handled within the **dbank_backend** canister using Motoko:
```motoko
actor dBank {
  stable var balance : Nat = 0;

  public func deposit(amount : Nat) : async Nat {
    balance += amount;
    return balance;
  }

  public func withdraw(amount : Nat) : async Nat {
    assert (balance >= amount);
    balance -= amount;
    return balance;
  }

  public query func checkBalance() : async Nat {
    return balance;
  }
}
```

## Contributing
Feel free to fork this project and submit pull requests! Contributions are welcome to improve features, optimize code, and expand functionalities.

## License
This project is licensed under the **MIT License**.

## Author
Developed by **Pranav Shinde**. Reach out for collaboration or questions!

## Connect
- 🌐 GitHub: [yourgithub](https://github.com/Pran2805)
