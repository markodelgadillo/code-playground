function scramble(str1, str2) {
  let newStr1 = [...str1]
  let newStr2 = [...str2]
  let flag = 0
  newStr2.forEach(function(char) {
    let x = newStr1.indexOf(char)
    x === -1 ? flag++ : newStr1.splice(x, 1, '') ? true : flag++
  })
  return flag > 0 ? false : true
}
