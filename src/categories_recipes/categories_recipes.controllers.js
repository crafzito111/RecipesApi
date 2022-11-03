const CategoriesRecipes = require('../models/categories_recipes.model')

//? Ver todas las categorias
//? Ver una categoria en especifico
//? Crear categoria
//? Eliminar categoria

const getAllCategories = async () => {
    const data = await CategoriesRecipes.findAll()
    return data
}

const getCategoryById = async (id) => {
    const data = await CategoriesRecipes.findOne({
        where: {
            id
        }
    })
    return data
}

const createCategory = async (name) => {
    const data = await CategoriesRecipes.create({
        name
    })
    return data
}

const deleteCategory = async (id) => {
    const data = await CategoriesRecipes.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}