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
  dishesDB.get()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(()=> {
    res.status(500).json(error500)
  })
})

module.exports = router;
