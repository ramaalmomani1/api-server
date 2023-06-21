'use strict'

const { Sequelize, DataTypes } = require("sequelize");

const DB_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DB_URI;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} : {}

let sequelize = new Sequelize(DB_URL, sequelizeOptions); //taking the data base which is in our case (DB_URL), and the options(sequelizeOptions)
// new instense from Sequelize (from the Sequelize package itself so we require it)

// how to build the schema or the table? first by having the model requiered in a varable
// then we will start build the schema inside it

const clothes = require('./clothes')
const food = require('./food')
const books = require('./books')
const authors = require('./authors')
const Collection = require("./collection");


  module.exports = {
   db: sequelize,
   Clothes: clothes(sequelize,DataTypes),
   Food: food(sequelize,DataTypes)
  }


  /*
  This code connects to a database and defines two models, Clothes and Food. 
  The Clothes model represents a table in the database that stores information about clothes, and the Food model represents a table in the database that stores information about food. 
  The code exports the db variable, which is a reference to the Sequelize instance, as well as the Clothes and Food models.
  */
