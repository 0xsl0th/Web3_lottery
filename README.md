# Decentralized Raffle Smart Contract

A fully decentralized and automated raffle system built with Solidity, using Chainlink VRF for verifiable randomness and Chainlink Automation for autonomous execution.

## Features

- Fully automated drawing system
- Verifiably random winner selection
- Automatic prize distribution
- Configurable entry fee and time intervals
- Split prize pool (70% to winner, 30% to fee recipient)
- Chainlink VRF v2 integration for true randomness
- Chainlink Automation for autonomous execution
- Gas-optimized operations

## Requirements

- Node.js and npm
- Hardhat
- Chainlink VRF Subscription
- Chainlink Automation Registration
- ETH/LINK tokens for contract operation

## Contract Details

### Core Functionality

#### 1.Entry System

Users can enter by paying the configured entrance fee
Multiple entries per address are allowed
Entry is only possible when raffle is in OPEN state

#### 2. Winner Selection

- Automated via Chainlink Automation
- Uses Chainlink VRF for verifiable randomness
- Triggers when interval has passed and conditions are met

#### 3. Prize Distribution

- 70% of the pool goes to the winner
- 30% goes to the configured fee recipient address
- Distribution happens automatically upon winner selection

## Key Parameters

- `entranceFee`: Minimum amount required to enter the raffle
- `interval`: Time between raffle draws
- `feeRecipient`: Address receiving 30% of the prize pool
- `vrfCoordinator`: Chainlink VRF Coordinator address
- `gasLane`: Chainlink VRF gas lane key hash
- `subscriptionId`: Chainlink VRF subscription ID
- `callbackGasLimit`: Gas limit for VRF callback

## Deployment

1. Set up environment variables in .env:

```bash
CopyPRIVATE_KEY=your_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
COINMARKETCAP_API_KEY=your_coinmarketcap_api_key
VRF_SUBSCRIPTION_ID=your_subscription_id
```

2. Deploy the contract:

```bash
npx hardhat deploy --network <network_name>
```

3. Verify the contract:

```bash
npx hardhat verify --network <network_name> <contract_address> <constructor_args>
```

## Contract Setup Post-Deployment

1. Fund your Chainlink VRF subscription with LINK
2. Register contract with Chainlink Automation
3. Fund Automation registration with LINK

## Testing

Run the test suite:

```bash
npx hardhat test
```

Run coverage:

```bash
npx hardhat coverage
```

## Security Considerations

- Uses Chainlink VRF for secure randomness
- Implements checks-effects-interactions pattern
- All state-changing functions have appropriate access controls
- Uses call for ETH transfers instead of transfer
- Critical parameters are immutable
- No admin functions or upgrade capabilities

## Events

1. `RaffleEnter(address indexed player)`

- Emitted when a player enters the raffle

2. `RequestedRaffleWinner(uint256 indexed requestId)`

- Emitted when a random number is requested

3. `WinnerPicked(address indexed player)`

- Emitted when a winner is selected

## License

MIT

## Credit

Based on Patrick Collins' tutorial with additional features and modifications.

# Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
