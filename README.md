# Backend of the Hack-On-Blocks'24 Project, AlertShe3
This repository consists of the backend part of the project. It utilizes solidity frameworks and is built on the ZkEvm Polygon Cardona Testnet
In order to run this, make sure you have the following set up on your system:
  1. Node
  2. React
  3. Solidity
  4. Metamask
  5. Alchemy
  6. Polygon ZkEvm Testnet
  7. Hardhat
```shell
    npm install -g hardhat
```

Run the following command:
```shell
npm install @nomicfoundation/hardhat-toolbox
```
     
After the connection of your accounts, clone this repository on your system and upload it on your text editor (eg, VS Code)
After doing so, create a .env file that contains your private_key and alchemy_api_key

Then run the following:
```shell
npm install --force
npx hardhat compile
npx hardhat run scripts/deploy.js --network polygonZkEvmTestnet
```
Your PC should look something like this:
![Screenshot 2024-07-23 235142](https://github.com/user-attachments/assets/393564e4-cdf2-4766-840d-a5b2a96df07c)

The 'target' hexadecimal code generated must be copied and pasted to the address in the config.js file in the client part of your project

To refer to the frontend of the website, refer to my team's repository:
AlertSheMain: https://github.com/SaniaVr/AlertSheMain

View our app here: https://saniavr.github.io/AlertSheMain/

