// on(type, element, fn)
// Registers an event listener of type on element

// Function that takes a type, element and Function
// it should register the function to run on an event listener when the
// type occurs

const click = 'click'
const mouseover = 'mouseover'
const dblclick = 'dblclick'
const $el = document.querySelector('#button')
function fn() {
  const $container = document.querySelector('#container')
  const $h1 = document.createElement('h1')
  $h1.textContent = 'Hello!'
  $container.appendChild($h1)
}

const on = (type, el, fn) => el.addEventListener(type, fn)

// on(type, $el, fn)
