const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")
const { network } = require("hardhat")

const BASE_FEE = "250000000000000000" // 0.25 LINK premium
const GAS_PRICE_LINK = 1e9 // 0.000000001 LINK per gas

module.exports = buildModule(
    "VRFCoordinatorV2Mock",
    async (m) => {
        const chainId = network.config.chainId

        // Only deploy mocks on local network
        if (chainId === 31337) {
            console.log("Local network detected! Deploying mocks...")

            // Deploy the VRFCoordinatorV2Mock contract
            const vrfCoordinatorV2Mock = m.contract("VRFCoordinatorV2Mock", [
                BASE_FEE,
                GAS_PRICE_LINK,
            ])

            console.log("Mocks Deployed!")
            console.log("----------------------------------------------------------")
            console.log(
                "You are deploying to a local network, you'll need a local network running to interact",
            )
            console.log(
                "Please run `yarn hardhat console --network localhost` to interact with the deployed smart contracts!",
            )
            console.log("----------------------------------------------------------")

            return {
                vrfCoordinatorV2Mock,
            }
        }

        // Return empty object if not on local network
        return {}
    },
    {
        tags: ["all", "mocks"],
    },
)
