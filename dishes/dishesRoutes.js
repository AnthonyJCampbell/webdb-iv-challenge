const express = require('express');
const dishesDB = require('../data/helpers/dishesDB')

const router = express.Router();
router.use(express.json());

const error404 = {
  message: "The requested resource doesn't exist"
}

const error500 = {
  message: "Something went wrong when getting your request. Make sure the request is foolproof"
}

router.get('/', (req, res) => {
  dishesDB.getDishes()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(()=> {
    res.status(500).json(error500)
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  dishesDB.getDish(id)
    .then(data => {
      res.status(200).json(data);
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
    dishesDB.addDish(dish)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(() => {
        res.status(500).json(error500)
      })
  }
})

module.exports = router;
