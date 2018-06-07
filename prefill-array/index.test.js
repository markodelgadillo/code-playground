const { expect, bind } = require('chai')
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
  // it('will throw a TypeError when n is a float.', () => {
  //   expect(prefill(3.14, 8)).to.throw(new TypeError('3.14 is invalid'))
  // })
  // it('will throw a TypeError when n is Infinity.', () => {
  //   expect(prefill.bind(prefill(Infinity, 17))).to.throw(
  //     new TypeError('Infinity is invalid')
  //   )
  // })
  // it('will throw a TypeError when n is a boolean.', () => {
  //   expect(prefill(false, 3)).to.throw('TypeError: false is invalid')
  // })
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
