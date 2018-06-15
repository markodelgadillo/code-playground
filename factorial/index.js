/*
  If n = 5
  5 = 5(5-1)(5-2)(5-3)(5-4)
    = 5*4*3*2*1
    = 120
*/
/*
  n! = factorial(n)

  going(n) => (1/n!) * (1! + 2! + 3!... + n!)
*/

// not completed
function going(n) {
  const x = n
  let y = 1
  let z
  let a = 0
  while (n > 0) {
    z = parseInt(factorial(y))
    a += z
    if (n === 1) {
      break
    } else {
      y++
      n--
    }
  }
  return 1 / factorial(x) * a
}

// (n === 1 ? break : (y++, n--))

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
      y++
      n--
    }
  }
  return x
}
