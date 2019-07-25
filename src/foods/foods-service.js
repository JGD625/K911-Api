const xss = require('xss')

const FoodsService = {
  getAllFoods(db) {
    return db
      .from('k911_foods AS food')
      .select(
        'food.id',
        'food.name',
        'food.toxicity',
        'food.toxic',
        'food.toxic_principles',
        'food.symptoms'
      )
  },



  getById(db, id) {
    return ArticlesService.getAllArticles(db)
      .where('food.id', id)
      .first()
  },


  serializeFoods(food) {
    return {
      id: food.id,
      toxicity: food.toxicity,
      toxic: food.toxic,
      toxic_principles: food.toxic_principles,
      name: food.name,
      symptoms: food.symptoms,
    }
  },
}

module.exports = FoodsService
