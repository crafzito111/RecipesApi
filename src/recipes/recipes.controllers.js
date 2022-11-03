const uuid = require("uuid");
const Recipes = require("../models/recipes.models");

const getAllRecipes = async () => {
  const data = await Recipes.findAll();
  return data;
};

const getRecipeById = async (id) => {
  const data = await Recipes.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createRecipe = async (data, userId) => {
  const newRecipe = {
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    urlVideo: data.urlVideo,
    preparationTime: data.preparationTime,
    portions: data.portions,
    userId: userId,
    categoryId: data.categoryId,
    origin: data.origin,
  };
  const response = await Recipes.create(newRecipe);
  return response;
};

const deleteRecipeById = async (id) => {
  const data = await Recipes.destroy({
    where: {
      id,
    },
  });
  return data;
};

const updateRecipeById = async (id, data) => {
  const result = await Recipes.update(data, {
    where: {
      id,
    },
  });
  return result;
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    deleteRecipeById,
    updateRecipeById
}
