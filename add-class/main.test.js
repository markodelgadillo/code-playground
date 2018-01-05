const addClass = require('./main.js')
const chai = require('chai')
const { expect } = require('chai')
const jsdom = require('jsdom')
chai.use(require('chai-dom'))

const { JSDOM } = jsdom
const { window } = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Add Classes</title>
    </head>
    <body>
      <p id="p1">Paragraph 1</p>
      <p id="p2">Paragraph 2</p>
      <p id="p3">Paragraph 3</p>
      <h1 id="h1"></h1>
    </body>
  </html>
  `)

const { document } = window
global.document = document
global.window = window

describe('addClass', () => {
  const $p = document.querySelector('#p1')
  const $h1 = document.querySelector('#h1')
  it('adds class(es) to the elements.', () => {
    addClass([$p, $h1], 'p', 'text', 'paragraphs')
    expect($p).to.have.class('p')
    expect($p).to.have.class('text')
    expect($p).to.have.class('paragraphs')
    expect($h1).to.have.class('p')
    expect($h1).to.have.class('text')
    expect($h1).to.have.class('paragraphs')
  })
  const $paragraphs = document.querySelectorAll('p')
  it('adds class(es) to more than one of the same type of element.', () => {
    const $p1 = document.querySelector('#p1')
    const $p2 = document.querySelector('#p2')
    const $p3 = document.querySelector('#p3')

    addClass($paragraphs, 'p', 'paragraph')
    expect($p1).to.have.class('p')
    expect($p1).to.have.class('paragraph')
    expect($p2).to.have.class('p')
    expect($p2).to.have.class('paragraph')
    expect($p3).to.have.class('p')
    expect($p3).to.have.class('paragraphs')
  })
})
