const express = require('express')
const FoodsService = require('./foods-service')
const foodsRouter = express.Router()



const serializeFood = food => ({
  id: food.id,
  name: food.name,
  toxic: food.toxic,
  toxicity: food.toxicity,
  symptom: food.symptom,
  toxic_principles: food.toxic_principles
})

foodsRouter
  .route('/')
  .get((req, res) => {
    FoodsService.getAllFoods(req.app.get('db'))
      .then(foods => {
        res.json(foods.map(serializeFood))
      })
  })

foodsRouter
  .route('/:food_id')
  .get((req, res, ) => {
    const { food_id } = req.params
    FoodsService.getById(req.app.get('db'), food_id)
      .then(food => {
        if (!food) {
          return res.status(404).json({
            error: { message: `Food Not Found` }
          })
        }
        res.json(serializeFood(food))
      })
  })




module.exports = foodsRouter