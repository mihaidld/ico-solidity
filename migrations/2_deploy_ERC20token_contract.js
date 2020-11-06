// NewToken is an artifact of the NewToken contract
const NewToken = artifacts.require('NewToken');
const { BN } = require('@openzeppelin/test-helpers');

module.exports = async (deployer) => {
  await deployer.deploy(
    NewToken,
    'NewToken',
    'New',
    18,
    new BN('1000000000000000000000000'),
    new BN('1000000000000000000000000'),
    '0x0f16385df3b467E4889b50907C365d3146016Cce',
  );
};
