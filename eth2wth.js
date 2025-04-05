const { ethers } = require("ethers");


const PRIVATE_KEY = "YOUR-PRIVATE-KEY";
const RPC_URL = "https://sepolia.infura.io/v3/YOUR-INFURA-KEY";

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);


const WETH_ADDRESS = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";
const WETH_ABI = [
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
];

const contract = new ethers.Contract(WETH_ADDRESS, WETH_ABI, wallet);

async function main() {
  const tx = await contract.deposit({
    value: ethers.parseEther("0.1") // swap 0.1 ETH ( YOU CAN CHANGE IT AS MUCH AS U WANT )
  });

  console.log("TX sent:", tx.hash);
  await tx.wait();
  console.log("TX confirmed!");
}

main();
