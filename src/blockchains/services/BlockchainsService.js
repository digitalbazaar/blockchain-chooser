/**
 * Blockchains service
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function BlockchainsService($q) {
  var blockchains = [
    {
      name: 'Bitcoin',
      tags: ['public', 'permissionless', 'payments'],
      icon: 'https://bitcoin.org/img/icons/opengraph.png',
      homepage: 'https://bitcoin.org/'
    },
    {
      name: 'Ethereum',
      tags: ['public', 'permissionless', 'smart contracts', 'payments'],
      icon: 'https://avatars1.githubusercontent.com/u/6250754?v=4&s=200',
      homepage: 'https://www.ethereum.org/'
    },
    {
      name: 'Hyperledger Fabric',
      tags: ['public', 'private', 'permissioned', 'smart contracts'],
      icon: 'https://avatars3.githubusercontent.com/u/7657900?v=4&s=200',
      homepage: 'https://www.hyperledger.org/projects/fabric'
    },
    {
      name: 'Hyperledger Indy',
      tags: ['public', 'permissioned', 'identity'],
      icon: 'https://avatars3.githubusercontent.com/u/7657900?v=4&s=200',
      homepage: 'https://www.hyperledger.org/category/hyperledger-indy'
    },
    {
      name: 'R3 Corda',
      tags: ['private', 'permissioned', 'smart contracts'],
      icon: 'https://avatars3.githubusercontent.com/u/22600631?v=4&s=400',
      homepage: 'https://www.corda.net/'
    },
    {
      name: 'Ripple',
      tags: ['public', 'permissioned', 'payments'],
      icon: 'https://www.cryptocompare.com/media/19972/ripple.png',
      homepage: 'https://ripple.com/'
    },
    {
      name: 'Veres',
      tags: ['public', 'private', 'permissioned', 'permissionless', 'identity'],
      icon: 'assets/svg/veres.svg',
      homepage: 'https://demo.ledger.veres.io/'
    }
  ];

  // Promise-based API
  return {
    loadAllBlockchains: function() {
      // Simulate async nature of real remote calls
      return $q.when(blockchains);
    }
  };
}

export default ['$q', BlockchainsService];
