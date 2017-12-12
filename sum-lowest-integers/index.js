const arr = [12, 2, 344, 11, 117, 8, 3]

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function(a, b) {
    return a - b
  })
}
