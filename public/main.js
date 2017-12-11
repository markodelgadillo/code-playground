/* eslint-disable no-unused-vars */

// rendering the dom elements for the book list
function renderBooks({ title, author, _id }) {
  const $book = document.createElement('div')

  const $details = document.createElement('span')
  $details.textContent = title + ' by ' + author

  const $deleteBut = document.createElement('button')
  $deleteBut.textContent = 'x'
  $deleteBut.setAttribute('data-id', _id)

  $book.appendChild($details)
  $book.appendChild($deleteBut)

  return $book
}

const getBooks = function() {
  return fetch('./books').then(res => res.json())
}

// show the books on the page itself

const showBooks = function(location) {
  // location parameter
  getBooks() // calls getBooks function which retrieves the book list
    .then(book => {
      // follows up with function for book parameter
      location.innerHTML = '' // clears out the html from the location

      book // for the books parameter above in .then from calling getBooks()
        .map(books => renderBooks(books)) // maps the list fetched from getBooks()
        .forEach($book => location.appendChild($book)) // for each book from the list
      // appends to the $book dom element
    })
}

// event listener to show the books

const $books = document.querySelector('#books') // dom element for the individual books
$books.addEventListener('click', function() {
  // click event listener for the $books element
  // it gets delegated down to the "show books" button
  const $bookList = document.querySelector('#book-list')
  showBooks($bookList) // after click, $bookList get assigned a dom element
  //  then the function in showBooks runs with the location parameter becoming
  // the dom element of $bookList
})

// event listener for the delete button

const $bookList = document.querySelector('#book-list') // gets parent element for the books
$bookList.addEventListener('click', ({ target: { dataset: { id } } }) => {
  // targets the event
  // to the elements with the dataset attribute of id
  console.log(id)
  if (id) {
    // if the id parameter is true
    fetch(`./books/${id}`, { method: 'DELETE' }) // fetches each book by its id key and deletes it
      .then(() => {
        // after deletion
        const $bookList = document.querySelector('#book-list') // once again assign the parseInt
        // dom element of the books to $bookList
        showBooks($bookList) // run the function in the showBooks and pass
        // $bookList as the location parameter
      })
  }
})

// event listener to add a bookId

const $addBookBut = document.querySelector('#new-book') // selecing the dom element of the add button
$addBookBut.addEventListener('click', event => {
  event.preventDefault() // preventing the default of the button
  // const newId = document.querySelector('#null')
  const $bookForm = new FormData(document.querySelector('#new-book'))
  const book = {} // empty object of the new book
  for (let pair of $bookForm.entries()) {
    const [key, value] = pair
    book[key] = value
  }
  fetch('./books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
})
