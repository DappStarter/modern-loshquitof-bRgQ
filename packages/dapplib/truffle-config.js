require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue renew saddle home imitate prize fringe tenant'; 
let testAccounts = [
"0xb617eab891b1905a77b0a6ed95768acb6020cf5b7a71d57bafbe6478df7390bf",
"0x446d7dce9856be2f2a6e3de67ae8e3a6a6d09e32636b361908363a2455bc3d90",
"0x20d1826acee83e4436e881cb97f4254ba1c1059823bbd4cb972fd823e50acc3e",
"0xa6129951b446313289de11009b692f410ba897e07dc3321bb863c28ad686149d",
"0xd576f1721f322ea13dfded138eb618f43b71f4b7f8f71f4b34acb48895e5ac81",
"0xc51ad255eaedf4db480d952548568e7feddb518a12d0bdf7c2363e52b5a79a1e",
"0x2b50b0f26fc4cb16696c8d2ed3effc395456d94ac09ee0334afb957ced130fee",
"0x94cb9c527338e1a0024341df6c712f092bc36949ef812ac22dea7619808082cc",
"0x21db23b1b3e9ddb17ecd982bc39f62fc111f477a43e2eb16a420c3c94aafcb6d",
"0x99c76e00cc881cb3b389d88c58028f7524428ec763cb6dd67ff00c0b716bf9ac"
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


