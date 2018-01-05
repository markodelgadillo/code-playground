const expanded = require('./index.js')
const { expect } = require('chai')

descript('expand', () => {
  it('a number of any length with zeroes.', () => {
    expect(expanded(70304)).to.equal('70000 + 300 + 4')
  })
  it('a number of any length with no zeroes.', () => {
    expect(expanded(12345)).to.equal('10000 + 2000 + 300 + 40 + 5')
  })
  it('a zero.', () => {
    expect(expanded(0)).to.equal('0')
  })
  it('a two digit number.', () => {
    expect(expanded(12)).to.equal('10 + 2')
  })
})
