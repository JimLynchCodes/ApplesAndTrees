const { ethers } = require('hardhat')
const { use, expect } = require('chai')
const { solidity } = require('ethereum-waffle')

use(solidity)

describe('TREE', function () {
  let myContract

  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000)
  })

  describe('TREE', function () {

    let TREE;
    let APPLE;

    beforeEach(async () => {
      const TreeHelpers_contract = await ethers.getContractFactory(
        'TreeHelpers',
      )
      const TreeHelpers = await TreeHelpers_contract.deploy()
      const BreedingHelpers_contract = await ethers.getContractFactory(
        'BreedingHelpers',
      )
      const BreedingHelpers = await BreedingHelpers_contract.deploy()
  
      const ColorAverager_contract = await ethers.getContractFactory(
        'ColorAverager',
      )
      const ColorAverager = await ColorAverager_contract.deploy()
      
      const APPLE_contract = await ethers.getContractFactory(
        'APPLE'
      )
      
      APPLE = await APPLE_contract.deploy()
  
      const TREE_contract = await ethers.getContractFactory('TREE', {
        libraries: {
          TreeHelpers: TreeHelpers.address,
          BreedingHelpers: BreedingHelpers.address,
          ColorAverager: ColorAverager.address,
        },
      })
  
      TREE = await TREE_contract.deploy(APPLE.address)

    })

    it('Should deploy TREE', async function () {
      expect((await TREE.name()).length).to.be.greaterThan(0)
    })

    describe('minting gen zero trees', () => {
      
    })

    describe('picking APPLE', () => {

    })

    describe('selling TREEs', () => {

    })

    describe('breeding TREEs', () => {

    })

  })
})
