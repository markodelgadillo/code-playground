// first separate the string into an array
// then find the index of the vowels in the array
// and return the result

function vowelIndices(word) {
  let arrWord = word.split('')
  arrWord.findIndex(function() {
    for (i = 0; i < arrWord.length; i++) {
      if (arrWord[i] === 'a' || 'e' || 'i' || 'o' || 'u') {
        return
      }
    }
  })
}
