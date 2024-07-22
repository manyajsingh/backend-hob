const hre = require("hardhat");

async function main() {
    // Get the ContractFactory
    const Blog = await hre.ethers.getContractFactory("Blog");
    
    // Deploy the contract
    console.log("Deploying Blog contract...");
    const blog = await Blog.deploy();
    
    // Wait for the deployment to be mined
    await blog.deploymentTransaction();
    console.log("Blog contract deployed to:", blog);
    
    // Log the contract address
    console.log("Blog deployed to:", blog.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
