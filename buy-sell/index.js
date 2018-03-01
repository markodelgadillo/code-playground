function buySell(arr) {
  let min = arr[0]
  let best = 0
  arr.forEach(function(value) {
    min = Math.min(min, value)
    let current = value - min
    best = Math.max(current, best)
  })
  return best
}

module.exports = buySell
