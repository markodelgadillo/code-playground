const arr = [12, 2, 344, 11, 117, 8, 3]

function minMax(arr) {
  let ordered = arr.sort(function(a, b) {
    return a - b
  })
  console.log(ordered)
  return [ordered[0], ordered[ordered.length - 1]]
}
