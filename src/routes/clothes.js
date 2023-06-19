'use strict'



const express = require('express');
const {Clothes}=  require('../models/index')
const router = express.Router(); // we use it for creating a (HTTP) methods (get,update,..)


router.post('/clothes', createClothesInstance);
router.get ('/clothes', findAllClothesRecords)
router.get ('/clothes/:id', findOneClothesRecord)
router.put ('/clothes/:id', updateClothesRecord)
router.delete ('/clothes/:id', deleteClothesRecord)


async function createClothesInstance (req,res){
const obj = req.body
const clothes = await Clothes.create(obj)
res.status(201).json(clothes)
}

async function findAllClothesRecords(req,res){
const allClothes = await Clothes.findAll()
res.status(200).json(allClothes)
}

async function findOneClothesRecord(req,res){
let id = req.params.id
const clothes = await Clothes.findOne({where: {id}})
res.status(200).json(clothes)
}

async function updateClothesRecord(req,res){
    const id = req.params.id;
    const obj = req.body;
    const clothes = await Clothes.findOne({where: { id }});
    const updatedClothes = await clothes.update(obj)
    res.status(202).json(updatedClothes);
}


async function deleteClothesRecord(req,res){
    const id = req.params.id;
    const deletedClothes= await Clothes.destroy({ where: { id } });
    res.status(204).json(deletedClothes);
}


module.exports = router;