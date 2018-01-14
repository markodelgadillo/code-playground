function incrementString(strng) {
  var splitStr = strng.split('')
  const alphaSplit = []
  const numSplit = []
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].match(/[A-Za-z]/g)) {
      alphaSplit.push(splitStr[i])
    } else if (splitStr[i].match(/[0-9]/g)) {
      numSplit.push(splitStr[i])
    }
  }
  let number = ''
  if (numSplit.toString() === '') {
    number = 1
  } else {
    number = parseInt(numSplit.join(''), 10) + 1
  }
  for (let j = numSplit.length - number.toString().length; j > 0; j--) {
    alphaSplit.push('0')
  }
  alphaSplit.push(number.toString())
  return alphaSplit.join('')
}

module.exports = incrementString
