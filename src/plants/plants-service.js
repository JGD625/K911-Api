const xss = require('xss')

const PlantsService = {
  getAllPlants(db) {
  return db
  .from('k991_plants AS plant')
  .select(
    'plant.id',
    'plant.name',
    'plant.toxic',
    'plant.toxicity',
    'plant.toxic_principles',
    'plant.symptoms',
  )
},

getById(db, id) {
return PlantsService.getAllPlants(db)
  .where('plant.id', id)
  .first()
},



  serializePlants(plant) {
    return {
      id: plant.id,
      toxicity: plant.toxicity,
      toxic: plant.toxic,
      title: plant.name,
      symptoms: plant.symptoms,
      toxic_principles: plant.toxic_principles,
    }
  },
}

module.exports = PlantsService
