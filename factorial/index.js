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

function going1(n) {
  const x = n
  let y = 1
  let z
  let a = 0
  while (n > 0) {
    z = factorial(y)
    a += z
    if (n === 1) {
      break
    } else {
      y++
      n--
    }
  }
  return Number(((1 / factorial(x)) * a).toString().slice(0, 8))
}

// Number((1 / factorial(x) * a).toString().slice(0, 8))

// ((1 / factorial(x)) * a).toString().slice(0, 8)
// (n === 1 ? break : (y++, n--))

// completed factorial function
function factorial(n) {
  let regX = new RegExp(/[^\.\d\s]/, 'gi')
  const fN = n
  let x = n
  let y = 1
  while (n > 0) {
    console.log(fN - y)
    console.log(x)
    if (y === fN) {
      break
    } else {
      x *= fN - y
      y++
      n--
    }
  }
  if (x.toString().includes('e+')) {
    return Number(
      x
        .toString()
        .replace(regX, '')
        .slice(0, 8)
    )
  } else {
    return x
  }
}

// best answer from Code Wars
// Come back to this code when handling numbers with e+/e-

function going(n) {
  var result = 1
  var acc = 1

  while (n > 1) {
    console.log(acc)
    console.log(result)
    console.log(n)
    acc *= 1 / n
    result += acc
    n--
  }
  console.log(Math.floor(result * 1e6))
  return Math.floor(result * 1e6) / 1e6
}
