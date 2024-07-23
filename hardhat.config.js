// require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
//   networks: {
//     zkEVMTestnet: {
//         url: "https://polygonzkevm-cardona.g.alchemy.com/v2/"+process.env.ALCHEMY_API_KEY,
//         accounts:[process.env.PRIVATE_KEY]
//     }

//   }
// };
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygonZkEvmTestnet: {
        url: "https://polygonzkevm-cardona.g.alchemy.com/v2/"+process.env.ALCHEMY_API_KEY,
        accounts:[process.env.PRIVATE_KEY]
    }
  
  }
};
