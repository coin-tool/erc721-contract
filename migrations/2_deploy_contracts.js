const TokenMintERC721Token = artifacts.require("TokenMintERC721Token");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(TokenMintERC721Token);
};