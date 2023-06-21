'use strict'



const express = require('express');
const { authorsCollection, booksCollection } = require('../models/index')
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)


router.post('/authors', createAuthorsInstance);
router.get('/authors', findAllAuthorsRecords)
router.get('/authors/:id', findOneAuthorsRecord)
router.put('/authors/:id', updateAuthorsRecord)
router.delete('/authors/:id', deleteAuthorsRecord)
router.get('/authorbooks/:id', allAuthorBooks)



async function createAuthorsInstance(req, res) {
    const obj = req.body
    const authors = await authorsCollection.create(obj)
    res.status(201).json(authors)
}



async function findAllAuthorsRecords(req, res) {
    const allAuthors = await authorsCollection.read()
    res.status(200).json(allAuthors)
}

async function findOneAuthorsRecord(req, res) {
    let id = req.params.id
    const authors = await authorsCollection.read(id)
    res.status(200).json(authors)
}



async function updateAuthorsRecord(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const updatedAuthors = await authorsCollection.update(id,obj)
    res.status(202).json(updatedAuthors);
}


  
async function deleteAuthorsRecord(req, res) {
    const id = req.params.id;
    const deletedAuthors = await authorsCollection.delete(id);
    res.status(204).json(deletedAuthors);
}

async function allAuthorBooks(req, res) {
    const id = req.params.id;
    const readAuthorBooksId = await authorsCollection.readAuthorBooks(id, booksCollection.model);
    res.status(200).json(readAuthorBooksId)
  }
  

module.exports = router;




 
  

  

 
  

