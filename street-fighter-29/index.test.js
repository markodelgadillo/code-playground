const streetFighterSelection = require('./index.js')
const { expect } = require('chai')

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
]

describe('select a character', () => {
  let position = [0, 0]
  it('by starting a move with a right move.', () => {
    expect(streetFighterSelection(fighters, position, ['right'])).to.eql([
      'E.Honda'
    ])
  })
})

describe('select a character', () => {
  let position = [0, 0]
  it('by starting a move with a left move.', () => {
    expect(streetFighterSelection(fighters, position, ['left'])).to.eql([
      'Vega'
    ])
  })
})

describe('select a character', () => {
  let position = [0, 0]
  it('by repeating the first move after the second.', () => {
    expect(
      streetFighterSelection(fighters, position, ['left', 'right', 'left'])
    ).to.eql(['Vega', 'Ryu', 'Vega'])
  })
})

describe('select a character', () => {
  let position = [0, 0]
  it('by starting with an up move.', () => {
    expect(
      streetFighterSelection(fighters, position, [
        'up',
        'left',
        'down',
        'right'
      ])
    ).to.eql(['Ryu', 'Vega', 'M.Bison', 'Ken'])
  })
})
describe('select a character', () => {
  let position = [0, 0]
  it('by including a down move one after the other.', () => {
    expect(
      streetFighterSelection(fighters, position, [
        'left',
        'left',
        'down',
        'down',
        'left'
      ])
    ).to.eql(['Vega', 'Balrog', 'Sagat', 'Sagat', 'Dhalsim'])
  })
})
