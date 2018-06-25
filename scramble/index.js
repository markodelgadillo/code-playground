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

function scramble2(str1, str2) {
  str2.length !=
    [...str2].map(char => char === [...str1].map(char1 => char1)).length
  console.log() ? false : true
}

// let obj = {
//   key1: {
//     another_key: {
//       that: 'super cool value'
//     }
//   }
// }
//
// function resolve(path, object) {
//   path = path.split('.')
//   return path.reduce(
//     (base, next) =>
//       (base && base[next], console.log(base, next)) ? base[next] : null,
//     object
//   )
// }
