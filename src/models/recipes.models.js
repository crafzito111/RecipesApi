//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')
//Tablas
const CategoriesRecipes = require('./categories_recipes.model')
const Users = require('./users.models')

const Recipes = db.define('recipes', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    title : {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            min: 3
        }
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg : {
        type: DataTypes.STRING,
        field: 'url_img',
        validate:{
            isUrl: true
        }
    },
    urlVideo: {
        type: DataTypes.STRING,
        field: 'url_video'
    },
    preparationTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'preparation_time'
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    //? las llaves foraneas tienen ciertas reglas
    // Debe contener la columna a la que hace referencia en singular
    // Debe terminar con el sufijo id
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references:{
            key: 'id',
            model: Users
        }
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references:{
            key: 'id',
            model: CategoriesRecipes
        }
    },
    origin: {
        type: DataTypes.STRING
    },
    likes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = Recipes