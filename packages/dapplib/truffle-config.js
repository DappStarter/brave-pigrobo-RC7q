require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike cruise oven evil give kangaroo army gauge'; 
let testAccounts = [
"0xb3d10ce11a4bbe769f674e7286a7d881ee6a09f63b611737af3fdc6c38cd4422",
"0x22f5da6d7c303de8ce916d498719ab8ce1fd155b2865b548961c065021656f8f",
"0x0c779164dec7db03712a9ef789542ece0c22e758f98a5ac678a25ee1d032963b",
"0x16651ef8718f6972887b7ab84b7ec43e3027a05a7ef5decf54c815e52b988f13",
"0x4a3a52bd2452b8031789a9cde6b656d4706531c18bbb10826f9a9524886ee746",
"0x879907f177231de5361e4d7c33c775ee89b7c6917ec4d2d36e5ad3409034180c",
"0x6bb420ed96863633ff697c652a881aaf02a4ff1b06f8a7e7a2e71b40140f7616",
"0xcfd8e0ca4e69dbbab5050dd5f17e49eb3e37875de3b4c79c0d8ef82bf1796f48",
"0xa79c37905ca0a15139182cf7eb80354a29cb4172df3c3e62ace88cb9566f3e3d",
"0xc35eafc40d6721ef9c866e0cecc0cf5a45beca812a98630b22b48b50c240cc2a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


