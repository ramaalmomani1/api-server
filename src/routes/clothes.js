'use strict'



const express = require('express');
const { Clothes, clothesCollection } = require('../models/index')
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)


router.post('/clothes', createClothesInstance);
router.get('/clothes', findAllClothesRecords)
router.get('/clothes/:id', findOneClothesRecord)
router.put('/clothes/:id', updateClothesRecord)
router.delete('/clothes/:id', deleteClothesRecord)


async function createClothesInstance(req, res) {
    const obj = req.body
    const clothes = await clothesCollection.create(obj)
    res.status(201).json(clothes)
}

async function findAllClothesRecords(req, res) {
    const allClothes = await clothesCollection.read()
    res.status(200).json(allClothes)
}

async function findOneClothesRecord(req, res) {
    let id = req.params.id
    const clothes = await clothesCollection.read(id)
    res.status(200).json(clothes)
}

async function updateClothesRecord(req, res) {
    const id = req.params.id;
    const obj = req.body;
    // const clothes = await Clothes.findOne({ where: { id } });
    const updatedClothes = await clothesCollection.update(id, obj)
    res.status(202).json(updatedClothes);
}


async function deleteClothesRecord(req, res) {
    const id = req.params.id;
    const deletedClothes = await clothesCollection.delete(id);
    res.status(204).json(deletedClothes);
}


module.exports = router;

/* 
The provided code is an Express router module that defines several routes for CRUD operations on a "Clothes" model. 
The routes include creating a new clothes instance, retrieving all clothes records, retrieving a specific clothes record by ID, updating a clothes record, and deleting a clothes record.
 Each route handler function is asynchronous and utilizes Sequelize ORM methods to interact with the database.
 The code follows RESTful API conventions and sends appropriate JSON responses with corresponding HTTP status codes. 
It is important to ensure that the necessary modules are imported correctly and that the "Clothes" model is properly defined for the code to work as intended.
*/