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
  console.log(alphaSplit)
  console.log(numSplit)
}

module.exports = incrementString
