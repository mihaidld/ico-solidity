// FirstErc20 is an artifact of the NewToken contract
const NewToken = artifacts.require('NewToken');
// NewIco is an artifact of the NewIco contract
const NewIco = artifacts.require('NewIco');
const { BN } = require('@openzeppelin/test-helpers');

module.exports = async (deployer) => {
  await deployer.deploy(
    NewIco,
    new BN('100000000000000000'),
    '0x0f16385df3b467E4889b50907C365d3146016Cce',
    NewToken.address, // use NewToken address from artifact
  );
};
