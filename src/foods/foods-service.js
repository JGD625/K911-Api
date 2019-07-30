const FoodsService = {
  getAllFoods(knex) {
    return knex
      .select('*')
      .from('k911_foods')
  },
  getById(knex, id) {
    return knex
     .from('k911_foods')
     .select('*')
     .where('id', id)
     .first()
  },
}

module.exports = FoodsService
