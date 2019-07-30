const PlantsService = {
  getAllPlants(knex) {
    return knex
      .select('*')
      .from('k911_plants')
  },
  getById(knex, id) {
    return knex
     .from('k911_plants')
     .select('*')
     .where('id', id)
     .first()
  },
}

module.exports = PlantsService
