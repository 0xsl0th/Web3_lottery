require("dotenv").config()

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")
const { networkConfig } = require("./helper-hardhat-config")
const { network } = require("hardhat")
const chainId = network.config.chainId
const { ethers } = require("hardhat")

module.exports = buildModule("Raffle", (m) => {
    const vrfCoordinatorV2 = "0x1234.." // address to request random value from chainlink
    const subscriptionId = 666
    const gasLane = "0x1234.." // 500 Gwei
    const interval = 60
    const entranceFee = ethers.parseEther("0.01") // Replace with the entrance fee in ETH
    const callbackGasLimit = 500000
    const _feeRecipient = "0x1234.."

    return {
        vrfCoordinatorV2,
        subscriptionId,
        gasLane,
        interval,
        entranceFee,
        callbackGasLimit,
        _feeRecipient,
    }
})
