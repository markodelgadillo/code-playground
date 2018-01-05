function expandedForm(num) {
  console.log(num)
  const numArr = num.toString().split('')
  console.log(numArr)
  var expanded = ''
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0 && i > 0) {
      expanded += ' + ' + numArr[i].toString().padEnd(numArr.length - i, '0')
    } else if (numArr[i] > 0) {
      expanded += numArr[i].toString().padEnd(numArr.length - i, '0')
    }
  }
  return expanded
}

module.exports = expandedForm
