//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')
//Tablas
const Recipes = require('./recipes.models')


const Instuctions = db.define('instructions', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    desciption : {
        type: DataTypes.TEXT
    },
    step : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recipeId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Recipes
        }
    },
    urlImg : {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_img'
    }
})

module.exports = Instuctions