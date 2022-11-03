//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')
//Tablas
const Recipes = require('./recipes.models')
const Users = require('./users.models')

const UsersRecipes = db.define('users_recipes', {
    id : {
        primaryKey: true, 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    amount : {
        type: DataTypes.STRING,
        allowNull: false
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    cooked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references:{
            key: 'id',
            model: Users
        }
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references:{
            key: 'id',
            model: Recipes
        }
    }
})

module.exports = UsersRecipes