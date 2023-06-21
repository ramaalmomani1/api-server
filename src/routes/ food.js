'use strict'



const express = require('express');
const { Food, foodCollection } = require('../models/index')
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)


router.post('/food', createFoodInstance);
router.get('/food', findAllFoodRecords)
router.get('/food/:id', findOneFoodRecord)
router.put('/food/:id', updateFoodRecord)
router.delete('/food/:id', deleteFoodRecord)




async function createFoodInstance(req, res) {
    const obj = req.body
    // const food = await Food.create(obj)
    const food = await foodCollection.create(obj)
    res.status(201).json(food)
}


async function findAllFoodRecords(req, res) {
    const allFood = await foodCollection.read()
    res.status(200).json(allFood)
}


async function findOneFoodRecord(req, res) {
    let id = req.params.id
    const food = await foodCollection.read(id)
    res.status(200).json(food)
}

async function updateFoodRecord(req, res) {
    const id = req.params.id;
    const obj = req.body;
    // const food = await Food.findOne({ where: { id } });
    const updatedFood = await foodCollection.update(id, obj)
    res.status(202).json(updatedFood);
}


async function deleteFoodRecord(req, res) {
    const id = req.params.id;
    const deletedFood = await foodCollection.delete(id);
    res.status(204).json(deletedFood);
}


module.exports = router;


/* 

Sure, here is the code in a simpler paragraph:

This code is a REST API that helps manage food records. It can create, read, update, and delete food records. It uses Express.js and Sequelize to handle HTTP requests and interact with a database.

To create a new food record, send a request with the food's information.

To read all food records,  send a request to the API.

To read a specific food record,  send a request with the food's ID. 

To update a specific food record,  send a request with the food's ID and the changes wanted. 

To delete a specific food record,  send a request with the food's ID. */
