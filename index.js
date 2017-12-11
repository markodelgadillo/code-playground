const mongodb = require('mongodb')
const { MongoClient } = require('mongodb')
const uuidv4 = require('uuid/v4')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

MongoClient.connect('mongodb://localhost/library', function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const books = db.collection('books')

  // Used higher in code to execute first
  app.use(bodyParser.json())

  // URL Handling

  app.get('/books', function(req, res) {
    console.log('getting stuff...')
    books
      .find({})
      .toArray()
      .then(function(book) {
        res.json(book)
      })
  })

  app.delete('/books/:id', function(req, res) {
    console.log('deleting stuff...')
    const bookId = { _id: new mongodb.ObjectId(req.params.id) }
    books
      .deleteOne(bookId)
      .then(function() {
        res.sendStatus(204)
      })
      .catch(function(err) {
        console.error(err)
        res.sendStatus(400)
      })
  })

  app.post('/books', function(req, res) {
    console.log('adding stuff...')
    if (req.body) {
      console.log(req.body)
      books.insertOne(req.body)
      return res.sendStatus(201)
    }
    return res.sendStatus(401)
  })

  app.put('/books/:id', function(req, res) {
    console.log('adding stuff to existing stuff...')
    const bookId = { _id: new mongodb.ObjectId(req.params.id) }
    books
      .updateOne(_id, { $set: req.body })
      .then(function() {
        res.sendStatus(201)
      })
      .catch(function(err) {
        console.error(err)
        res.sendStatus(400)
      })
  })

  app.listen(4000, function() {
    console.log('Listening on port 4000')
  })
})
