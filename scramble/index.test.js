const scramble = require('./index.js')
const { expect } = require('chai')

describe('Check if the first string', () => {
  it('has the letters in the second string', () => {
    expect(scramble('gibbler', 'big')).to.eql('true')
  })
  it('has the letters and amount of each letter in the second string', () => {
    expect(scramble('gibbler', 'bigi')).to.eql('false')
  })
  it('has as many or more letters than the second string', () => {
    expect(scramble('big', 'bigg')).to.eql('false')
  })
})
