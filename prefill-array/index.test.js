const { expect } = require('chai')
const prefill = require('./index.js')

// should throw erro when n is a float

// should throw error when n is infinity

// should throw error when n is a boolean

// 
describe('Prefill an array', () => {
  it('will fill the array with each entry being the value of 'v' by 'n' number of times', () => {
    expect(prefill(3, 7)).to.eql({7,7,7})
  })
  it('', () => {
    expect(prefill(n, v)).to.eql()
  })
})
