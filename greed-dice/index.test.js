const score = require('./index.js')
const { expect } = require('chai')

describe('rolling five dice', () => {
  it("and rolling four 1's", () => {
    expect(score([1, 2, 1, 1, 1])).to.equal(1100)
  })
  it("and rolling three 1's", () => {
    expect(score([1, 4, 2, 1, 1])).to.equal(1000)
  })
  it("and rolling less than three 1's", () => {
    expect(score([1, 4, 2, 2, 1])).to.equal(200)
  })
  it("and rolling four 6's", () => {
    expect(score([6, 2, 6, 6, 6])).to.equal(600)
  })
  it("and rolling three 6's", () => {
    expect(score([6, 2, 6, 3, 6])).to.equal(600)
  })
  it("and rolling less than three 6's", () => {
    expect(score([6, 2, 2, 4, 6])).to.equal(0)
  })
  it("and rolling four 5's", () => {
    expect(score([5, 5, 2, 5, 5])).to.equal(550)
  })
  it("and rolling three 5's", () => {
    expect(score([5, 3, 2, 5, 5])).to.equal(500)
  })
  it("and rolling less than three 5's", () => {
    expect(score([5, 2, 2, 4, 5])).to.equal(100)
  })
  it("and rolling four 4's", () => {
    expect(score([2, 4, 4, 4, 4])).to.equal(400)
  })
  it("and rolling three 4's", () => {
    expect(score([2, 4, 4, 2, 4])).to.equal(400)
  })
  it("and rolling three 4's and a 5", () => {
    expect(score([2, 4, 4, 5, 4])).to.equal(450)
  })
  it("and rolling less than three 4's", () => {
    expect(score([2, 3, 3, 4, 4])).to.equal(0)
  })
  it("and rolling four 3's", () => {
    expect(score([3, 4, 3, 3, 3])).to.equal(300)
  })
  it("and rolling three 3's", () => {
    expect(score([3, 4, 2, 3, 3])).to.equal(300)
  })
  it("and rolling less than three 3's", () => {
    expect(score([3, 4, 2, 3, 6])).to.equal(0)
  })
  it("and rolling four 2's", () => {
    expect(score([2, 2, 2, 2, 3])).to.equal(200)
  })
  it("and rolling three 2's", () => {
    expect(score([2, 6, 2, 2, 3])).to.equal(200)
  })
  it("and rolling less than three 2's", () => {
    expect(score([6, 2, 3, 2, 3])).to.equal(0)
  })
})
