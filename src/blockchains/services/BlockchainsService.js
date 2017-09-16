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
      tags: ['permissionless', 'payments'],
      homepage: 'https://bitcoin.org/'
    },
    {
      name: 'Ethereum',
      tags: ['permissionless', 'smart contracts', 'payments'],
      homepage: 'https://www.ethereum.org/'
    },
    {
      name: 'Hyperledger Fabric',
      tags: ['permissioned', 'smart contracts'],
      homepage: 'https://www.hyperledger.org/projects/fabric'
    },
    {
      name: 'Hyperledger Indy',
      tags: ['permissioned', 'identity'],
      homepage: 'https://www.hyperledger.org/category/hyperledger-indy'
    },
    {
      name: 'R3 Corda',
      tags: ['permissioned', 'smart contracts'],
      homepage: 'https://www.corda.net/'
    },
    {
      name: 'Ripple',
      tags: ['permissioned', 'payments'],
      homepage: 'https://ripple.com/'
    },
    {
      name: 'Veres',
      tags: ['permissioned', 'permissionless', 'identity'],
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
