function sortArray(array) {
  const odds = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i])
    }
  }
  odds.sort(function(a, b) {
    return a - b
  })
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 !== 0) {
      array[j] = odds.shift()
    }
  }
  return array
}

const array = [5, 3, 2, 8, 1, 4]
