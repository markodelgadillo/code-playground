const palindrome = require('./index.js')
const { expect } = require('chai')

describe('Check if it is a palindrome', () => {
  it('when the string IS a palindrome.', () => {
    expect(palindrome('Anna')).to.equal('true')
  })
  it('when the string is a sentence with spaces and punctuation IS a palindrome', () => {
    expect(palindrome('Ah, Satan sees Natasha!')).to.equal('true')
  })
  it('when the string is NOT a palindrome.', () => {
    expect(palindrome('Hello World!')).to.equal('false')
  })
})
