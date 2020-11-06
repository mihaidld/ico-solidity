// FirstErc20 is an artifact of the NewToken contract
const NewToken = artifacts.require('NewToken');
const { BN } = require('@openzeppelin/test-helpers');

module.exports = async (deployer) => {
  // All the abstractions/instances below are not needed
  // They are only useful if we need to interact with it
  // for further deployments.

  await deployer.deploy(
    NewToken,
    'NewToken',
    'New',
    18,
    new BN('1000000000000000000000000'),
    new BN('1000000000000000000000000'),
  );
};
