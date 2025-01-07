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
}

module.exports = {
    networkConfig,
}
