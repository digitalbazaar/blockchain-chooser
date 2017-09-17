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
      tags: ['public', 'permissionless', 'payments', 'proofOfWork'],
      icon: 'https://bitcoin.org/img/icons/opengraph.png',
      summary: 'Bitcoin is a worldwide cryptocurrency and digital payment system called the first decentralized digital currency, since the system works without a central repository or single administrator.',
      homepage: 'https://bitcoin.org/'
    },
    {
      name: 'Ethereum',
      tags: [
        'public', 'permissionless', 'smart contracts', 'payments',
        'proofOfWork'
      ],
      icon: 'https://avatars1.githubusercontent.com/u/6250754?v=4&s=200',
      summary: 'Ethereum is an open-source, public, blockchain-based distributed computing platform featuring smart contract (scripting) functionality.',
      homepage: 'https://www.ethereum.org/'
    },
    {
      name: 'Hyperledger Fabric',
      tags: [
        'public', 'private', 'permissioned', 'smart contracts', 'majorityVote'
      ],
      icon: 'https://avatars3.githubusercontent.com/u/7657900?v=4&s=200',
      summary: 'Hyperledger Fabric is a platform for distributed ledger solutions, underpinned by a modular architecture delivering high degrees of confidentiality, resiliency, flexibility and scalability. ',
      homepage: 'https://www.hyperledger.org/projects/fabric'
    },
    {
      name: 'Hyperledger Indy',
      tags: ['public', 'permissioned', 'identity', 'majorityVote'],
      icon: 'https://avatars3.githubusercontent.com/u/7657900?v=4&s=200',
      summary: 'Hyperledger Indy enables creating and managing decentralized, self-sovereign identities using distributed ledgers.',
      homepage: 'https://www.hyperledger.org/category/hyperledger-indy'
    },
    {
      name: 'R3 Corda',
      tags: ['private', 'permissioned', 'smart contracts', 'majorityVote'],
      icon: 'https://avatars3.githubusercontent.com/u/22600631?v=4&s=400',
      summary: 'Corda is a distributed ledger platform designed from the ground up to record, manage and synchronise financial agreements between regulated financial institutions.',
      homepage: 'https://www.corda.net/'
    },
    {
      name: 'Ripple',
      tags: ['public', 'permissioned', 'payments', 'majorityVote'],
      icon: 'https://www.cryptocompare.com/media/19972/ripple.png',
      summary: 'Ripple is a real-time gross settlement system, currency exchange and remittance network.',
      homepage: 'https://ripple.com/'
    },
    {
      name: 'Veres',
      tags: [
        'public', 'private', 'permissioned', 'permissionless', 'identity',
        'proofOfWork', 'majorityVote', 'benevolentDictator'],
      icon: 'assets/svg/veres.svg',
      summary: 'Veres is a highly configurable blockchain platform capable of deploying thousands of fit for purpose blockchains.',
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
