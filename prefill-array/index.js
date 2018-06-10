function prefill(n, v) {
  const arr = []
  if (n === 0) {
    return []
  } else if (isNaN(n) || n < 0 || !Number.isFinite(n) || !Number.isInteger(n)) {
    throw new TypeError(n + ' is invalid')
    console.log(TypeError)
  }
  arr.length = parseInt(n, 10)
  arr.fill(v, 0, n)
  return arr
}

module.exports = prefill
