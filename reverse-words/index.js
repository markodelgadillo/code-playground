// for the string, separate each word into it's own string
// then reverse each word
// then combine all strings to one strings
// include spaces in between each word

function reverseWords(str) {
  const arrStr = str.split(' ')
  const newArr = []
  const newStr = []
  for (i = 0; i < arrStr.length; i++) {
    newArr.push(arrStr[i].split('').reverse())
  }
  for (j = 0; j < newArr.length; j++) {
    newStr.push(newArr[j].toString().replace(/([^A-Za-z.\b])/g, ''))
  }
  return newStr.toString().replace(/([^A-Za-z.\b])/g, ' ')
}
