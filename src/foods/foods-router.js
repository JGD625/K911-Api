const express = require('express')
const FoodsService = require('./foods-service')
const foodsRouter = express.Router()

foodsRouter
  .route('/')
  .get((req, res, next) => {
    FoodsService.getAllFoods(req.app.get('db'))
      .then(foods => {
        res.json(foods.map(FoodsService.serializeFood))
      })
      .catch(next)
  })

foodsRouter
  .route('/:foods_id')
  .all(checkFoodExists)
  .get((req, res) => {
    res.json(FoodsService.serializeFood(res.food))
  })



/* async/await syntax for promises */
async function checkFoodExists(req, res, next) {
  try {
    const food = await FoodsService.getById(
      req.app.get('db'),
      req.params.food_id
    )

    if (!food)
      return res.status(404).json({
        error: `Food doesn't exist`
      })

    res.food = food
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = foodsRouter
