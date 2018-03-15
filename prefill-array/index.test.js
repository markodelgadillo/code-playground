const { expect } = require('chai')
const prefill = require('./index.js')

// describe('Prefill an array', () => {
//   it('will fill the array with each entry being the value of v by n number of times', () => {
//     expect(prefill(3, 7)).to.eql([7, 7, 7])
//   })
// })

describe('Prefill an array', () => {
  it('will fill the array with each entry being the value of v by n number of times', () => {
    expect(prefill(3, 7)).to.eql([7, 7, 7])
  })
  it('will create an array of objects.', () => {
    expect(prefill(3, { name: 'Marko' })).to.eql([
      { name: 'Marko' },
      { name: 'Marko' },
      { name: 'Marko' }
    ])
  })
  it('will push "undefined" when v is undefined.', () => {
    expect(prefill(2)).to.eql([undefined, undefined])
  })
})
