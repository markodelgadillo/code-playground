const streetFighterSelection = require('./index.js')
const { expect } = require('chai')

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
]

let position = [0, 0]

describe('select a character', () => {
  it('by starting a move with a right move.', () => {
    expect(streetFighterSelection(fighters, position, 'right')).to.equal([
      'E.Honda'
    ])
  })
})

describe('select a character', () => {
  it('by starting a move with a left move.', () => {
    expect(streetFighterSelection(fighters, position, 'left')).to.equal([
      'Vega'
    ])
  })
})

describe('select a character', () => {
  it('by repeating the first move after the second.', () => {
    expect(
      streetFighterSelection(fighters, position, ['left', 'right', 'left'])
    ).to.equal(['Vega', 'Ryu', 'Vega'])
  })
})

describe('select a character', () => {
  it('by starting with an up move.', () => {
    expect(
      streetFighterSelection(fighters, position, [
        'up',
        'left',
        'down',
        'right'
      ])
    ).to.equal(['Ryu', 'Vega', 'M.Bison', 'Ken'])
  })
})

describe('select a character', () => {
  it('by including a down move one after the other.', () => {
    expect(
      streetFighterSelection(fighters, position, [
        'left',
        'left',
        'down',
        'down',
        'left'
      ])
    ).to.equal(['Vega', 'Balrog', 'Sagat', 'Sagat', 'Dhalsim'])
  })
})
