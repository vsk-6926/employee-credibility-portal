
async function main() {
  // Set up the contract instance
  const contractAddress = "0x41a0a3CAC729a477A155A08Da9c1c0442594cac2"; // Replace with the actual contract address
  const Score = await ethers.getContractFactory("Score");
  const scoreInstance = await Score.attach(contractAddress);

  // Set up the account that will be used to interact with the contract
  const accounts = await ethers.getSigners();
  const account = accounts[0];

  // Register a company name
  let txn = await scoreInstance.registerCompanyName("Acme Inc.");
  console.log(txn);

  // Create a credit score for an employee
  txn = await scoreInstance.createCreditScore("John Doe", 5, 7, 9, 8, 7);
  console.log(txn);
 

  // Update an existing credit score for an employee
  txn = await scoreInstance.updateCreditScore("John Doe", 6, 7, 9, 8, 7);
  console.log(txn);

  // Retrieve an employee's credit score
  const employeeScore = await scoreInstance.getScore("John Doe");
  console.log(employeeScore);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
