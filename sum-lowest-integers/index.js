const arr = [12, 2, 344, 11, 117, 8]

function sumTwoSmallestNumbers(numbers) {
  const newArr = []
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1] || numbers[i] < numbers[i - 1]) {
      newArr.push(numbers[i])
    }
  }
  console.log(newArr)
  const low = []
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] < newArr[i + 1] || newArr[i] < newArr[i - 1]) {
      low.push(newArr[i])
    }
  }
  return low[0] + low[1]
}
