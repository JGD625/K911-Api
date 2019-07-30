const express = require('express')
const PlantsService = require('./plants-service')
const plantsRouter = express.Router()



const serializePlant = plant => ({
  id: plant.id,
  name: plant.name,
  toxic: plant.toxic,
  toxicity: plant.toxicity,
  symptom: plant.symptom,
  toxic_principles: plant.toxic_principles
})

plantsRouter
  .route('/')
  .get((req, res) => {
    PlantsService.getAllPlants(req.app.get('db'))
      .then(plants => {
        res.json(plants.map(serializePlant))
      })
  })

plantsRouter
  .route('/:plant_id')
  .get((req, res, ) => {
    const { plant_id } = req.params
    PlantsService.getById(req.app.get('db'), plant_id)
      .then(plant => {
        if (!plant) {
          return res.status(404).json({
            error: { message: `Plant Not Found` }
          })
        }
        res.json(serializePlant(plant))
      })
  })




module.exports = plantsRouter
