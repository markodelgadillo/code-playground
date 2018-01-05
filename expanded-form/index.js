/*
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
*/

function expandedForm(num) {
  const numArr = num.toString().split('')
  let expanded = ''
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0 && i > 0) {
      // originally used .padEnd() but it is not recognized by
      // Node v6.11.0 and replaced its use with .repeat()
      expanded +=
        ' + ' + numArr[i].toString() + '0'.repeat(numArr.length - (i + 1))
    } else if (numArr[i] > 0) {
      expanded += numArr[i].toString() + '0'.repeat(numArr.length - (i + 1))
    }
  }
  return expanded
}

module.exports = expandedForm
