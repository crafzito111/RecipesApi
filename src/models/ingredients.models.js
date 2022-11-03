//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')
//Tablas
const TypesIngredients = require('./types_ingredients.models')



const Ingredients = db.define('ingredients', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    typeId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        references: {
            key: 'id',
            model: TypesIngredients
        }
    },
    urlImg : {
        type: DataTypes.STRING,
        field: 'url_img',
        validate : {
            isUrl: true
        }
    }
})

module.exports = Ingredients