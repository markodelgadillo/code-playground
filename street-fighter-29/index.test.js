const streetFighterSelection = require('./index.js')
const { expect } = require('chai')

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
]

let position = [0, 0]

let moves = ['right']
describe('select a character', () => {
  it('by starting a move with a right move.', () => {
    expect(streetFighterSelection(fighters, position, moves)).to.equal([
      'E.Honda'
    ])
  })
})

let moves = ['left']
describe('select a character', () => {
  it('by starting a move with a left move.', () => {
    expect(streetFighterSelection(fighters, position, moves)).to.equal(['Vega'])
  })
})

let moves = ['left', 'right', 'left']
describe('select a character', () => {
  it('by repeating the first move after the second.', () => {
    expect(streetFighterSelection(fighters, position, moves)).to.equal([
      'Vega',
      'Ryu',
      'Vega'
    ])
  })
})

let moves = ['up', 'left', 'down', 'right']
describe('select a character', () => {
  it('by starting with an up move.', () => {
    expect(streetFighterSelection(fighters, position, moves)).to.equal([
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken'
    ])
  })
})

let moves = ['left', 'left', 'down', 'down', 'left']
describe('select a character', () => {
  it('by including a down move one after the other.', () => {
    expect(streetFighterSelection(fighters, position, moves)).to.equal([
      'Vega',
      'Balrog',
      'Sagat',
      'Sagat',
      'Dhalsim'
    ])
  })
})
