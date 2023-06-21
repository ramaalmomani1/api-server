'use strict'



const express = require('express');
const { booksCollection } = require('../models/index')
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)


router.post('/books', createBooksInstance);
router.get('/books', findAllBooksRecords)
router.get('/books/:id', findOneBooksRecord)
router.put('/books/:id', updateBooksRecord)
router.delete('/books/:id', deleteBooksRecord)




async function createBooksInstance(req, res) {
    const obj = req.body
    const books = await booksCollection.create(obj)
    res.status(201).json(books)
}



async function findAllBooksRecords(req, res) {
    const allBooks = await booksCollection.read()
    res.status(200).json(allBooks)
}

async function findOneBooksRecord(req, res) {
    let id = req.params.id
    const books = await booksCollection.read(id)
    res.status(200).json(books)
}



async function updateBooksRecord(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const updatedBooks = await booksCollection.update(id,obj)
    res.status(202).json(updatedBooks);
}


  
async function deleteBooksRecord(req, res) {
    const id = req.params.id;
    const deletedBooks = await booksCollection.delete(id);
    res.status(204).json(deletedBooks);
}


module.exports = router;




 
  

  

 
  
