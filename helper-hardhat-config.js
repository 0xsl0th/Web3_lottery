const { ethers } = require("hardhat")

const networkConfig = {
    31337: {
        name: "localhost",
        vrfCoordinatorV2: "",
        subscriptionId: "666",
        gasLane: "0x1234..",
        entranceFee: ethers.parseEther("0.01"),
        callbackGasLimit: "500000",
        interval: "60",
    },
    1: {
        name: "mainnet",
        interval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const frontEndContractsFile = "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json"
const frontEndAbiFile = "../nextjs-smartcontract-lottery-fcc/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    frontEndContractsFile,
    frontEndAbiFile,
}
