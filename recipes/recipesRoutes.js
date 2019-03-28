const express = require('express');
const recipesDB = require('../data/helpers/recipesDB')

const router = express.Router();
router.use(express.json());


const error404 = {
  message: "The requested resource doesn't exist"
}

const error500 = {
  message: "Something went wrong when getting your request. Make sure the request is foolproof"
}

router.get('/', (req, res) => {
  recipesDB.getRecipes()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(()=> {
    res.status(500).json(error500)
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  recipesDB.getRecipe(id)
    .then(data => {
      if(!data) {
        res.status(404).json(error404)
      } else {
        res.status(200).json(data);
      }
    })
    .catch(() => {
      res.status(500).json(error500)
    })
})

// RETURNS ID of new entry
router.post('/', (req, res) => {
  const dish = req.body;
  if (!dish) {
    res.status(404).json(error404)
  } else {
    recipesDB.addRecipe(dish)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(() => {
        res.status(500).json(error500)
      })
  }
})

// Returns empty
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  recipesDB.deleteRecipe(id)
    .then(data => {
      if (!data) {
        res.status(404).json(error404)
      } else {
        res.status(204).json({
          message: `Successfully delete the dish with ID of ${id}`
        })
      }
    })
    .catch(() => {
      res.status(500).json(error500)
    })
})

module.exports = router;