// v can be anything (primitive or otherwise)

// if v is ommited, fill the array with undefined

// if no is 0, return an empty array

// if n is anything other than an integer or
// integer-formatted string(e.g.'123') that
// is >=0, throw a TypeError

// When throwing a TypeError, the message should be
// n is invalid
// where you replace n for the actual value passed

function prefill(n, v) {
  const arr = []
  if (n === 0) {
    return []
  } else if (isNaN(n) || n < 0) {
    throw new TypeError(n + ' is invalid')
  }
  arr.length = parseInt(n, 10)
  arr.fill(v, 0, n)
  return arr
}
