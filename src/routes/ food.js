'use strict'



const express = require('express');
const {Food}=  require('../models/index')
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)


router.post('/food', createFoodInstance);
router.get ('/food', findAllFoodRecords)
router.get ('/food/:id', findOneFoodRecord)
router.put ('/food/:id', updateFoodRecord)
router.delete ('/food/:id', deleteFoodRecord)


async function createFoodInstance (req,res){
const obj = req.body
const food = await Food.create(obj)
res.status(201).json(food)
}

async function findAllFoodRecords(req,res){
const allFood = await Food.findAll()
res.status(200).json(allFood)
}

async function findOneFoodRecord(req,res){
let id = req.params.id
const food = await Food.findOne({where: {id}})
res.status(200).json(food)
}

async function updateFoodRecord(req,res){
    const id = req.params.id;
    const obj = req.body;
    const food = await Food.findOne({where: { id }});
    const updatedFood = await food.update(obj)
    res.status(202).json(updatedFood);
}


async function deleteFoodRecord(req,res){
    const id = req.params.id;
    const deletedFood= await Food.destroy({ where: { id } });
    res.status(204).json(deletedFood);
}


module.exports = router;