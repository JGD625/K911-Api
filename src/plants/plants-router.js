const express = require('express')
const PlantsService = require('./plants-service')
const plantsRouter = express.Router()

plantsRouter
  .route('/')
  .get((req, res, next) => {
    PlantsService.getAllPlants(req.app.get('db'))
      .then(plants => {
        res.json(plants.map(PlantsService.serializePlant))
      })
      .catch(next)
  })

plantsRouter
  .route('/:plant_id')
  .all(checkPlantExists)
  .get((req, res) => {
    res.json(PlantsService.serializePlant(res.plant))
  })



/* async/await syntax for promises */
async function checkPlantExists(req, res, next) {
  try {
    const plant = await PlantsService.getById(
      req.app.get('db'),
      req.params.plant_id
    )

    if (!plant)
      return res.status(404).json({
        error: `Plant doesn't exist`
      })

    res.plant = plant
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = plantsRouter
