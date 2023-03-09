require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/steam`, {
    native: false
})

const listaModelos = []
const pathModelsFiles = []
const requires = []

const pathModels = path.join(__dirname, "/models")
const models = fs.readdirSync(pathModels)
models.forEach(value => listaModelos.push(value))
listaModelos.forEach(value => pathModelsFiles.push(path.join(__dirname, "/models", value)))
pathModelsFiles.forEach(value => requires.push(require(value)))
requires.forEach(value => value(sequelize))


module.exports = {
    ...sequelize.models,
    conn: sequelize
}