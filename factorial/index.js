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
  let x = n
  let y = 1
  let z
  while (n > 0) {
    z = factorial(y)
    console.log(n)
    if (n === 0) {
      break
    }
    console.log(z)
    z += z
    console.log(y)
    y++
    console.log(n)
    n--
  }
  console.log(z)
  return 1 / factorial(x) * this.z
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
