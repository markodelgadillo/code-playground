function f(n) {
  let sum = 0
  for (i = 1; i <= n; i++) {
    sum += parseInt(i, 10)
  }
  return sum
}

f(17)
