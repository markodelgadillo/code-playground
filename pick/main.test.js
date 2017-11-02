const pick = require('./main.js')
const { expect } = require('chai')

describe('pick', () => {
  it('keys from an object.', () => {
    expect(pick({ a: 2, b: 'ten', c: 'Hello' }, ['a', 'b'])).to.eql({
      a: 2,
      b: 'ten'
    })
  })
  it('key not in the target object.', () => {
    expect(pick({ a: 5, c: 'Hello', d: 'Goodbye' }, ['b', 'c'])).to.eql({
      c: 'Hello'
    })
  })
  it('all keys not in the target object.', () => {
    expect(pick({ a: 'Ay', b: 'Bee', c: 'See' }, ['d', 'e'])).to.eql({})
  })
  it('keys using upper case property paths.', () => {
    expect(pick({ a: 'Hi', b: 'Hello', c: 'Hola' }, ['A', 'B'])).to.eql({
      a: 'Hi',
      b: 'Hello'
    })
  })
  it('the same key twice.', () => {
    expect(
      pick({ a: 'water', b: 'fire', c: 'air', d: 'earth' }, ['a', 'b', 'a'])
    ).to.eql({
      a: 'water',
      b: 'fire'
    })
  })
})

// console.log(pick({ a: 2, b: 'ten', c: 'Hello' }, ['a', 'b']))
