//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')


const CategoriesRecipes = db.define('categories_recipes', {
    id : {
        primaryKey: true, 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    }
}, {
    //? Evita que te de el valor de createdAt y updatedAt
    timestamps: false
})

module.exports = CategoriesRecipes