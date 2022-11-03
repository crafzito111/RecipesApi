const recipeControllers = require("./recipes.controllers");

const getAll = (req, res) => {
  recipeControllers
    .getAllRecipes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getById = (req, res) => {
  const id = req.params.recipe_id;
  recipeControllers
    .getRecipeById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid Id" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteById = (req, res) => {
  const id = req.params.recipe_id;
  recipeControllers
    .deleteRecipeById(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid Id", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createRecipe = (req, res) => {
  const {
    title,
    description,
    urlImg,
    urlVideo,
    preparationTime,
    portions,
    categoryId,
    origin,
  } = req.body;
  const userId = req.user.id;
  if (
    title &&
    description &&
    preparationTime &&
    portions &&
    categoryId 
  ) {
    recipeControllers
      .createRecipe(
        {
          title,
          description,
          urlImg,
          urlVideo,
          preparationTime,
          portions,
          categoryId,
          origin,
        },
        userId
      )
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        res.status(400).json({ message: err.message })
      });
  }else {
    res.status(400).json({
        message: 'Missing Data',
        fields: {
            title: 'string',
            description: 'string',
            preparationTime: 'number',
            portions: 'number',
            categoryId: 'number'
        }
    })
  }
};

const patchRecipe = (req, res) => {
    const {
        title,
        description,
        urlImg,
        urlVideo,
        preparationTime,
        portions,
        categoryId,
        origin,
      } = req.body;
      const id = req.params.recipe_id;

    recipeControllers.updateRecipeById(id, {
        title,
        description,
        urlImg,
        urlVideo,
        preparationTime,
        portions,
        categoryId,
        origin,
    })
        .then(data => {
            if(data[0]){
                res.status(200).json({ message: `Recipe with ID ${id} was updated succesfully` })
            }else{
                res.status(404).json({ message: 'Invalid Id', id })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })


}


module.exports = {
    getAll,
    getById,
    deleteById,
    patchRecipe,
    createRecipe
}