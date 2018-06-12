/*
  If n = 5
  5 = 5(5-1)(5-2)(5-3)(5-4)
    = 5*4*3*2*1
    = 120
*/

// not completed
function going(n) {
  let u
  while (n > 0) {
    if (n === 0) {
      break
    } else {
      console.log(factorial(n))
      u = 1 / factorial(n)
    }
  }
}

// completed factorial function
function factorial(n) {
  const fN = n
  let x = n
  let y = 1
  while (n > 0) {
    if (y === fN) {
      break
    } else {
      x *= fN - y
      n--
      y++
    }
  }
  return x
}
