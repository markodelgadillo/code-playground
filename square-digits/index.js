function squareDigits(num) {
  let numbers = num.toString().split('')
  let squared = numbers.map(number => number * number)
  return parseInt(squared.join().replace(/([^0-9])/g, ''), 10)
}
