const arr1 = [21, 5, 17, 12, 3]
function minimum(arr) {
  let min = arr[0]
  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}

function maximum(arr) {
  let max = arr[0]
  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}
