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