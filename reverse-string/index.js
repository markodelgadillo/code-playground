function reverse(string) {
  let reversed = []
  let split = string.split(' ')
  for (i = split.length - 1; i >= 0; i--) {
    reversed.push(split[i])
  }
  return reversed.join().replace(/([^A-Za-z0-9\s])/g, ' ')
}
