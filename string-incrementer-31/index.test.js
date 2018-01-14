const { expect } = require('chai')
const incrementString = require('./index.js')

describe('increment the string', () => {
  it('by incrementing the number in the string by 1', () => {
    expect(incrementString('foobar1')).to.eql('foobar2')
  })
  it('by considering no number at the end of the string to be a zero', () => {
    expect(incrementString('foobar')).to.eql('foobar1')
  })
  it('by incrementing a number with leading zeros at the end of the string', () => {
    expect(incrementString('foobar001')).to.eql('foobar002')
  })
  it('by incrementing a double digit number with a leading zero at the end of the string', () => {
    expect(incrementString('foobar099')).to.eql('foobar100')
  })
})
