/*
  If n = 5
  5 = 5(5-1)(5-2)(5-3)(5-4)
    = 5*4*3*2*1
    = 120
*/

function going(n) {
  while (n > 0) {
    let fN *= (n-1)
  }
  return n * fN
}
