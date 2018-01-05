const expandedForm = require('./index.js')
const { expect } = require('chai')

describe('expand', () => {
  it('a number of any length with zeroes.', () => {
    expect(expandedForm(70304)).to.equal('70000 + 300 + 4')
  })
  it('a number of any length with no zeroes.', () => {
    expect(expandedForm(12345)).to.equal('10000 + 2000 + 300 + 40 + 5')
  })
  it('a zero.', () => {
    expect(expandedForm(0)).to.equal('')
  })
  it('a two digit number.', () => {
    expect(expandedForm(12)).to.equal('10 + 2')
  })
})
