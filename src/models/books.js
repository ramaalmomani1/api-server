// containing the schema for the books table


'use strict'

const books = (sequelize, DataTypes) => sequelize.define('books', {
    name: {
        type: DataTypes.STRING
    },
    numOfPages: {
        type: DataTypes.INTEGER
    },
    authorsId: {
        type: DataTypes.INTEGER,
      }
});

module.exports = books;