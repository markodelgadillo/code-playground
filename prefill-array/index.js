function prefill(n, v) {
  const arr = []
  if (isNaN(n) || n < 0 || !Number.isFinite(n) || !Number.isInteger(n)) {
    throw new TypeError(`${n} is invalid`)
  } else if (n === 0) {
    return arr
  }
  arr.length = parseInt(n, 10)
  arr.fill(v, 0, n)
  return arr
}

module.exports = prefill
