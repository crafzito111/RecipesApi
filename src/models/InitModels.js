const Users = require('./users.models')
const CategoriesRecipes = require('./categories_recipes.model')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.model')
const RecipesIngredients = require('./recipes_ingredients.model')
const Recipes = require('./recipes.models')
const TypesIngredients = require('./types_ingredients.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models') 


const initModel = ()=>{
    //? hasMany 
    //? belongsTo

    //? Relacion 1:N
    // Usuarios 1:N Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //? Relacion 1:N
    TypesIngredients.hasMany(Ingredients)
    Ingredients.belongsTo(TypesIngredients)

    //? Relacion 1:N
    CategoriesRecipes.hasMany(Recipes)
    Recipes.belongsTo(CategoriesRecipes)

    //? Relacion 1:N
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

    //?Relacion N:N
    // Usuarios 1:N UsersRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)
    
    // Recipes 1:N UsersRecipes
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)
    
    //?Relacion N:N
    // Recipes 1:N RecipesIngredients
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)
    
    // Ingredients 1:N RecipesIngredientes
    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)
    
    //? Relacion N:N
    // 1:N
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)
    
    // 1:N
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)
    
}

module.exports = initModel