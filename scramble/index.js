// str1 will be the scrambled string
// str2 will be the word to check for

function scramble(str1, str2) {
  if (!str1.search(str2) || str1.length < str2.length) {
    return false
  } else if (str1.search(str2)) {
    return true
  }
}

let str1 = 'gibbler'
let str2 = 'big'

// module.exports = scramble

// add logic to keep count of each letter in each string

function scramble(str1, str2) {
  let flag1
  let flag2
  let newStr1 = [...str1]
  let newStr2 = [...str2]
  newStr2.forEach(function(char) {
    newStr1.forEach(char1 => (char1 === char ? flag2++ : flag2))
  })
  newStr1.forEach(function(char) {
    newStr2.forEach(char1 => (char1 === char ? flag1++ : flag2))
  })
}

function scramble3(str1, str2) {
  let newStr1 = [...str1]
  let newStr2 = [...str2]
  let flag = 0
  newStr2.forEach(function(char) {
    let x = newStr1.indexOf(char)
    x === -1 ? flag++ : newStr1.splice(x, 1, char) ? true : flag++
  })
  return flag > 0 ? false : true
}
