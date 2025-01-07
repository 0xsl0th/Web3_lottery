const { ethers } = require("hardhat")

networkConfig = {
    31337: {
        name: "localhost",
        subscriptionId: "666",
        gasLane: "0x1234..",
        entranceFee: ethers.parseEther("0.01"),
        callbackGasLimit: "500000",
        interval: "60",
    },
}

module.exports = {
    networkConfig,
}
