// add-class
// Adds the specified class(es) to each element in the set of matched elements

// addClass(elements, ...classes)

// const $p = document.querySelector('#p1')
// const $h1 = document.querySelector('#h1')

// const addClass = (elements, ...classes) =>
//   Array.from(elements).forEach(element => element.classList.add(...classes))

// addClass([$p, $h1], 'p', 'text', 'paragraphs')

// console.log(addClass([$p, $h1], 'p', 'text', 'paragraphs'))

// const $paragraphs = document.getElementsByTagName('p')

const addClass = (elements, ...classes) => {
  Array.from(elements).forEach(element => element.classList.add(...classes))
}
module.exports = addClass

// node list

// try with multiple of one element - getElementsByTagName

// const addClass = (elements, ...classes) {
//   elements.forEach(element => element.classList.add(...classes))
// }
