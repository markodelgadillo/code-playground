function fizzbuzz() {
  let value
  for (x = 1; x <= 100; x++) {
    if (x % 3 === 0) {
      value = 'Fizz'
      document.write(value + ' ')
    } else if (x % 5 === 0) {
      value = 'Buzz'
      document.write(value + ' ')
    } else if (x % 3 === 0 && x % 5 === 0) {
      value = 'FizzBuzz'
      document.write(value + ' ')
    } else {
      value = x
      document.write(value + ' ')
    }
  }
}
