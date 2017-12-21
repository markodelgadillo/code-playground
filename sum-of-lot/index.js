function f(n) {
  let sum = 0
  if (!parseInt(n) || parseInt(n) < 0 || !Number.isInteger(n)) {
    return false
  }
  for (i = 1; i <= n; i++) {
    sum += parseInt(i, 10)
  }
  return sum
}

f(17)
