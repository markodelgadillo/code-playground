const replace = require('./main.js')
const { expect } = require('chai')

describe('replace', () => {
  it('final word in string.', () => {
    expect(replace('Hi, my name is Marko', 'Marko', 'Jeff')).to.equal(
      'Hi, my name is Jeff'
    )
  })
  it('a word in the middle of a string.', () => {
    expect(
      replace('Hi, my name is Marko Delgadillo', 'Marko', 'Jeff')
    ).to.equal('Hi, my name is Jeff Delgadillo')
  })
  it('a word with punctuation.', () => {
    expect(replace('Hi, my name is Marko.', 'Marko', 'Jeff')).to.equal(
      'Hi, my name is Jeff.'
    )
  })
  it('a word not case sensitive.', () => {
    expect(replace('Hi, my name is marko.', 'Marko', 'Jeff')).to.equal(
      'Hi, my name is Jeff.'
    )
  })
  it('a word that is not in the string.', () => {
    expect(replace('Hi, my name is Frank.', 'Marko', 'Jeff')).to.equal(
      'The word to replace is not present.'
    )
  })
})
