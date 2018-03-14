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
  arr.length = n
  arr.fill(v, 0, n)
  return arr
}
