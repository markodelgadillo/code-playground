function vowelIndices(word) {
  const indices = []
  const arrWord = word.split('')
  for (i = 0; i < arrWord.length; i++) {
    if (
      arrWord[i].toLowerCase() === 'a' ||
      arrWord[i].toLowerCase() === 'e' ||
      arrWord[i].toLowerCase() === 'i' ||
      arrWord[i].toLowerCase() === 'o' ||
      arrWord[i].toLowerCase() === 'u' ||
      arrWord[i].toLowerCase() === 'y'
    ) {
      indices.push(i + 1)
    }
  }
  return indices
}
