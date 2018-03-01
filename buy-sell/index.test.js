const { expect } = require('chai')
const buySell = require('./index.js')

describe('To buy low and sell high', () => {
  it('will get the greatest difference of two values starting from the first indice to last', () => {
    expect(buySell([100, 180, 356, 277, 40, 92])).to.eql(256)
  })
})
